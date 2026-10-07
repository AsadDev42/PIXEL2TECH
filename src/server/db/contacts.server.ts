import { getDb } from "./prisma.server";

/**
 * One row for the `contacts` table: contact-form and newsletter submissions.
 * `lastName` and `phone` default to "" in the database.
 */
export type NewContact = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message: string;
};

/**
 * How long a save may take before the form gives up. The database client
 * retries a cold-start connect for about a minute; a visitor should not wait
 * that long, so after this the caller shows its "try again" message.
 */
const SAVE_TIMEOUT_MS = 20_000;

const EMAIL_SHAPE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/i;

/** Postgres char_length of the trimmed value: counts code points, not UTF-16 units. */
const charLength = (value: string) => Array.from(value.trim()).length;

/**
 * The same checks the old Supabase row-level-security policy ran on every
 * insert. The shared zod schema already enforces stricter rules; this is the
 * last line of defence in front of the database.
 */
export function contactProblems(row: NewContact): string[] {
  const problems: string[] = [];
  const first = charLength(row.firstName);
  if (first < 1 || first > 100) problems.push("first_name length");
  if (charLength(row.lastName ?? "") > 100) problems.push("last_name length");
  const email = charLength(row.email);
  if (email < 3 || email > 255) problems.push("email length");
  if (!EMAIL_SHAPE.test(row.email)) problems.push("email format");
  if (charLength(row.phone ?? "") > 40) problems.push("phone length");
  const message = charLength(row.message);
  if (message < 1 || message > 5000) problems.push("message length");
  return problems;
}

/** Inserts one contact. Throws on invalid rows, a missing connection, timeouts and DB errors. */
export async function insertContact(row: NewContact): Promise<void> {
  const problems = contactProblems(row);
  if (problems.length > 0) throw new Error(`contact rejected: ${problems.join(", ")}`);

  const insert = getDb().orm.public.Contact.create({
    firstName: row.firstName,
    lastName: row.lastName ?? "",
    email: row.email,
    phone: row.phone ?? "",
    message: row.message,
  });

  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(
      () => reject(new Error(`contact insert timed out after ${SAVE_TIMEOUT_MS} ms`)),
      SAVE_TIMEOUT_MS,
    );
  });
  try {
    await Promise.race([insert, timeout]);
  } finally {
    clearTimeout(timer);
  }
}
