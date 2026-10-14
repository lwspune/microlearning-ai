import { permanentRedirect } from "next/navigation";

/** Courses are chosen on /learn. */
export default function CoursesIndex() {
  permanentRedirect("/learn");
}
