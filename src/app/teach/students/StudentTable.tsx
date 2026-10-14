"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { card } from "@/components/ui";

export type StudentRow = {
  id: string;
  fullName: string;
  login: string;
  mastered: number;
  learning: number;
  reviewsDue: number;
  /** Whole percent, or null before any answer. */
  accuracy: number | null;
  lastActive: string;
};

/** Every student, searchable by name or login; each name opens the student's page. */
export function StudentTable({ students }: { students: StudentRow[] }) {
  const [query, setQuery] = useState("");
  const id = useId();
  const q = query.trim().toLowerCase();
  const shown = q ? students.filter((s) => s.fullName.toLowerCase().includes(q) || s.login.includes(q)) : students;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        Search students
      </label>
      <input
        id={id}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Name or username"
        className="mt-1.5 block min-h-11 w-full max-w-sm rounded-xl border border-border-strong bg-card px-3.5 shadow-card focus:border-accent"
      />
      <p className="mt-2 text-sm text-muted" aria-live="polite">
        {q ? `${shown.length} of ${students.length} students` : `${students.length} students`}
      </p>
      <div className={`${card} mt-3 overflow-x-auto`}>
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                Student
              </th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">
                Mastered
              </th>
              <th scope="col" className="hidden px-4 py-3 text-right font-semibold md:table-cell">
                In progress
              </th>
              <th scope="col" className="hidden px-4 py-3 text-right font-semibold md:table-cell">
                Reviews due
              </th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">
                Accuracy
              </th>
              <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">
                Last active
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {shown.map((s) => (
              <tr key={s.id}>
                <td className="px-4 py-3">
                  <Link href={`/teach/students/${s.id}`} className="font-medium text-accent underline-offset-4 hover:underline">
                    {s.fullName}
                  </Link>
                  <span className="block font-mono text-xs text-muted">{s.login}</span>
                  {/* Phones: the hidden columns, in one line. */}
                  <span className="block text-xs text-muted md:hidden">
                    {s.learning} in progress · {s.reviewsDue} due<span className="sm:hidden"> · {s.lastActive}</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-right tabular-nums">{s.mastered}</td>
                <td className="hidden px-4 py-3 text-right tabular-nums md:table-cell">{s.learning}</td>
                <td className="hidden px-4 py-3 text-right tabular-nums md:table-cell">{s.reviewsDue}</td>
                <td className="px-4 py-3 text-right tabular-nums">{s.accuracy === null ? "—" : `${s.accuracy}%`}</td>
                <td className="hidden px-4 py-3 text-muted sm:table-cell">{s.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
