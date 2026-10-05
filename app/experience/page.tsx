import { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Professional Experience | Rahul Siddhu Nimbalkar",
  description:
    "Software engineering internship experience at NexaNova ProTech and V Kumar Solutions (I) Pvt. Ltd., building production-grade web systems.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-24 min-h-[85vh]">
      <Experience />
    </div>
  );
}
