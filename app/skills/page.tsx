import { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "Technical Skills & Technologies | Rahul Siddhu Nimbalkar",
  description:
    "Explore the technical stack, programming languages, backend frameworks, and engineering practices used by Rahul Siddhu Nimbalkar.",
};

export default function SkillsPage() {
  return (
    <div className="pt-24 min-h-[85vh]">
      <Skills />
    </div>
  );
}
