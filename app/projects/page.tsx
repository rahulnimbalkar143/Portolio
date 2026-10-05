import { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Featured Engineering Projects | Rahul Siddhu Nimbalkar",
  description:
    "Showcasing full-stack engineering systems including NodeSq AI, Krushee Mart, Enterprise Inventory Management System, and Online Quiz Application.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-[85vh]">
      <Projects />
    </div>
  );
}
