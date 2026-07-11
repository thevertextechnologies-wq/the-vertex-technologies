import osamaCeo from "@/assets/Team  Images/Osama CEO.webp";
import moeedCto from "@/assets/Team  Images/MoeedCTO.webp";
import maheenCmo from "@/assets/Team  Images/Maheen CMO.webp";
import bilalLead from "@/assets/Team  Images/Bilal Team Lead.webp";

export type TeamMember = {
  name: string;
  role: string;
  accent: string;
  initials: string;
  image?: string;
  linkedin?: string;
};

// Order below = display order (Vertex brand color per member).
export const teamMembers: TeamMember[] = [
  {
    name: "Osama Mahmood",
    role: "Founder & CEO",
    accent: "var(--brand-red)",
    initials: "OM",
    image: osamaCeo,
    linkedin: "https://www.linkedin.com/in/iosamarajput/",
  },
  {
    name: "Moeed Rizwan",
    role: "Co-Founder & CTO",
    accent: "var(--brand-blue)",
    initials: "MR",
    image: moeedCto,
    linkedin: "https://www.linkedin.com/in/moeed-rizwan-126b21392/",
  },
  {
    name: "Maheen Asim",
    role: "CMO & Brand Manager",
    accent: "var(--brand-orange)",
    initials: "MA",
    image: maheenCmo,
    linkedin: "https://www.linkedin.com/in/maheen-asim-763123308/",
  },
  {
    name: "Bilal Ahmad",
    role: "Team Lead",
    accent: "var(--brand-green)",
    initials: "BA",
    image: bilalLead,
    linkedin: "#",
  },
];
