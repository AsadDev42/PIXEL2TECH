import teamUsama from "@/assets/team-usama.webp.asset.json";
import teamAsad from "@/assets/team-asad.webp.asset.json";
import teamSaad from "@/assets/team-saad.webp.asset.json";
import teamGul from "@/assets/team-gul.webp.asset.json";
import teamAhsan from "@/assets/team-ahsan.webp.asset.json";
import teamNoman from "@/assets/opt-team-noman-800.webp.asset.json";

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  /** Internal profile page, when the person has one. */
  profile?: "/usama-farooq" | "/asad-farooq" | "/saad";
  linkedin?: string;
  /** Co-founders (listed as founders in structured data and on About). */
  founder?: boolean;
  /**
   * Temporarily off the site: no card, byline, schema or profile page.
   * Remove the flag to bring the person back everywhere.
   */
  hidden?: boolean;
};

/** Everyone, including people who are temporarily hidden. */
export const ALL_TEAM: TeamMember[] = [
  {
    name: "Usama Farooq",
    role: "CEO & Founder",
    img: teamUsama.url,
    profile: "/usama-farooq",
    founder: true,
    linkedin: "https://www.linkedin.com/in/osama-farooq-manj/",
  },
  {
    name: "Asad Farooq",
    role: "Co-Founder & COO",
    img: teamAsad.url,
    profile: "/asad-farooq",
    founder: true,
    linkedin: "https://www.linkedin.com/in/designerasad/",
  },
  {
    name: "Saad",
    role: "Creative Video Editor",
    img: teamSaad.url,
    profile: "/saad",
    linkedin: "https://www.linkedin.com/in/designersaadpk/",
  },
  { name: "Gul E Zahra", role: "Creative Brand Designer", img: teamGul.url },
  { name: "Ahsan Mushtaq", role: "Website Developer", img: teamAhsan.url },
  { name: "Noman Ahmed", role: "Video Editor", img: teamNoman.url },
];

/** The in-house team shown on the site. Shown on Home and About. */
export const TEAM: TeamMember[] = ALL_TEAM.filter((m) => !m.hidden);

/** True when a profile page belongs to someone who is hidden for now. */
export function isHiddenProfile(path: string): boolean {
  return ALL_TEAM.some((m) => m.profile === path && m.hidden);
}
