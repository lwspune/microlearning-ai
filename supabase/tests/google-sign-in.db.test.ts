import { describe, expect, it } from "vitest";
import { rolledBack, rolledBackSelect } from "./sql";

/**
 * Google sign-in (self sign-up): a person who signs in with Google and has no
 * profile claims one with claim_student_profile(). It is always a solo
 * student, built from what the auth server knows (never from the browser);
 * guests, password-only logins and existing profiles get nothing new.
 */

const GOOGLE_NEW = "00000000-0000-4000-8000-00000000600a";
const GOOGLE_NAMELESS = "00000000-0000-4000-8000-00000000600b";
const LINKED_GUEST = "00000000-0000-4000-8000-00000000600c";
const TEACHER = "00000000-0000-4000-8000-00000000600d";
const GUEST = "00000000-0000-4000-8000-00000000600e";
const PASSWORD_ONLY = "00000000-0000-4000-8000-00000000600f";

const FIXTURE = `
insert into auth.users (id, email, is_anonymous, raw_user_meta_data) values
  ('${GOOGLE_NEW}', 'Asha.Rao@Test.invalid', false, '{"full_name":"  Asha Rao  ","name":"Asha"}'),
  ('${GOOGLE_NAMELESS}', 'ravi.k@test.invalid', false, '{}'),
  ('${LINKED_GUEST}', null, false, '{}'),
  ('${TEACHER}', 'teacher-g@test.invalid', false, '{"full_name":"Someone Else"}'),
  ('${GUEST}', null, true, '{}'),
  ('${PASSWORD_ONLY}', 'pw-only@test.invalid', false, '{"full_name":"Pw Only"}');
insert into auth.identities (provider_id, user_id, identity_data, provider) values
  ('g-new', '${GOOGLE_NEW}', '{"sub":"g-new","email":"asha.rao@test.invalid"}', 'google'),
  ('g-nameless', '${GOOGLE_NAMELESS}', '{"sub":"g-nameless","email":"ravi.k@test.invalid"}', 'google'),
  ('g-linked', '${LINKED_GUEST}', '{"sub":"g-linked","email":"Meera@Test.invalid","name":"Meera"}', 'google'),
  ('g-teacher', '${TEACHER}', '{"sub":"g-teacher","email":"teacher-g@test.invalid"}', 'google');
insert into academies (name, slug) values ('Test Academy G', 'test-academy-g');
insert into profiles (id, role, academy_id, full_name, email) values
  ('${TEACHER}', 'teacher', (select id from academies where slug = 'test-academy-g'), 'Teacher G', 'teacher-g@test.invalid');
`;

function as(user: string) {
  return `set local role authenticated; select set_config('request.jwt.claims', '{"sub":"${user}","role":"authenticated"}', true);`;
}

type Row = { role: string; academy_id: string | null; full_name: string; email: string; created_by: string | null };

/** `user` claims a profile; returns their profile row afterwards (read as postgres). */
async function claim(user: string): Promise<Row | undefined> {
  const [row] = await rolledBackSelect<Row>(
    FIXTURE,
    `${as(user)} select public.claim_student_profile(); reset role;
     select role::text, academy_id::text, full_name, email, created_by::text from profiles where id = '${user}';`,
  );
  return row;
}

describe("claim_student_profile", () => {
  it("gives a new Google account a solo student profile with its Google name and lower-cased email", async () => {
    expect(await claim(GOOGLE_NEW)).toEqual({
      role: "student",
      academy_id: null,
      full_name: "Asha Rao",
      email: "asha.rao@test.invalid",
      created_by: null,
    });
  });

  it("falls back to the email's name part when Google gave no name", async () => {
    expect((await claim(GOOGLE_NAMELESS))?.full_name).toBe("ravi.k");
  });

  it("reads the email and name from the Google identity when the login has none (a guest who linked Google)", async () => {
    expect(await claim(LINKED_GUEST)).toMatchObject({ role: "student", full_name: "Meera", email: "meera@test.invalid" });
  });

  it("leaves an existing profile exactly as it is", async () => {
    expect(await claim(TEACHER)).toMatchObject({ role: "teacher", full_name: "Teacher G", email: "teacher-g@test.invalid" });
  });

  it("refuses a guest", async () => {
    await expect(rolledBack(FIXTURE + `${as(GUEST)} select public.claim_student_profile();`)).rejects.toThrow(
      /claim_profile_guest/,
    );
  });

  it("refuses a login with no Google identity (self sign-up is Google only)", async () => {
    await expect(rolledBack(FIXTURE + `${as(PASSWORD_ONLY)} select public.claim_student_profile();`)).rejects.toThrow(
      /claim_profile_needs_google/,
    );
  });

  it("is closed to visitors who aren't signed in", async () => {
    await expect(rolledBack(FIXTURE + `set local role anon; select public.claim_student_profile();`)).rejects.toThrow(
      /permission denied/,
    );
  });
});
