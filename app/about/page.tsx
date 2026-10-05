import { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About & Credentials | Rahul Siddhu Nimbalkar",
  description:
    "Learn about Rahul Siddhu Nimbalkar's background, education (MCA 9.57 CGPA, 1st Rank), engineering philosophy, and leadership experience.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-[85vh]">
      <About />
    </div>
  );
}
