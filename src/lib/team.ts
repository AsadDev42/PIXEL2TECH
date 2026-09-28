import teamUsama from "@/assets/team-usama.webp.asset.json";
import teamAsad from "@/assets/team-asad.webp.asset.json";
import teamSaad from "@/assets/team-saad.webp.asset.json";
import teamGul from "@/assets/team-gul.webp.asset.json";
import teamAhsan from "@/assets/team-ahsan.webp.asset.json";
import teamNoman from "@/assets/opt-team-noman-800.webp.asset.json";
import teamRashail from "@/assets/team-rashail.webp.asset.json";

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  /** Internal profile page, when the person has one. */
  profile?: "/usama-farooq" | "/asad-farooq" | "/saad";
  linkedin?: string;
  /** Co-founders (listed as founders in structured data and on About). */
  founder?: boolean;
};

/** The in-house team. Shown on Home and About; its length is the team size. */
export const TEAM: TeamMember[] = [
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
    role: "Co-Founder & Creative Director",
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
  { name: "Muhammad Rashail", role: "Head of Engineering & Automation", img: teamRashail.url },
];

export const TEAM_SIZE = TEAM.length;
