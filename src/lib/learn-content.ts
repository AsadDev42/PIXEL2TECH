import type { PostSummary } from "@/lib/blog-types";

/**
 * Articles readers use while they work (checklists, briefs, routines and
 * step-by-step processes) are playbooks. Everything else is a guide.
 */
export const PLAYBOOK_SLUG_PATTERN = /checklist|brief|routine|process|handover|how-to-/;

export const PLAYBOOK_KINDS: {
  id: string;
  title: string;
  intro: string;
  match: RegExp;
}[] = [
  {
    id: "checklists",
    title: "Checklists",
    intro: "Run these before a launch, a sale or a handover, so nothing important gets missed.",
    match: /checklist|handover/,
  },
  {
    id: "briefs",
    title: "Project briefs",
    intro:
      "Fill these in before you hire a designer, developer or editor, so the quote matches the job.",
    match: /brief/,
  },
  {
    id: "routines",
    title: "Routines and processes",
    intro: "Weekly and monthly routines for small teams, and the steps a project goes through.",
    match: /routine|process|how-to-/,
  },
];

export function isPlaybook(p: Pick<PostSummary, "slug">) {
  return PLAYBOOK_SLUG_PATTERN.test(p.slug);
}
