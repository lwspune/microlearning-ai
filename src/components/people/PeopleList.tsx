import { card } from "@/components/ui";
import type { Role } from "@/lib/auth/routing";

export type PersonRow = { id: string; fullName: string; email: string; username: string | null; role: Role };

const ROLE: Record<Role, string> = { student: "Student", teacher: "Teacher", academy_admin: "Academy admin", superadmin: "Superadmin" };

/** An academy's people: name, what they sign in with, role. */
export function PeopleList({ people }: { people: PersonRow[] }) {
  if (people.length === 0) return <p className={`${card} p-6 text-muted`}>No one here yet.</p>;
  return (
    <div className={`${card} overflow-x-auto`}>
      <table className="w-full text-left text-sm">
        <thead className="bg-surface text-muted">
          <tr>
            <th scope="col" className="px-5 py-3 font-semibold">
              Name
            </th>
            <th scope="col" className="px-5 py-3 font-semibold">
              Signs in with
            </th>
            <th scope="col" className="hidden px-5 py-3 font-semibold sm:table-cell">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {people.map((p) => (
            <tr key={p.id}>
              <td className="px-5 py-3">
                <span className="font-medium">{p.fullName}</span>
                {/* Phones: the role sits under the name instead of in its own column. */}
                <span className="block text-muted sm:hidden">{ROLE[p.role]}</span>
              </td>
              <td className="px-5 py-3 font-mono break-all">{p.username ?? p.email}</td>
              <td className="hidden px-5 py-3 text-muted sm:table-cell">{ROLE[p.role]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
