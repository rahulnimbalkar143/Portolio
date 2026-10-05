import { Metadata } from "next";
import { Certificates } from "@/components/sections/Certificates";

export const metadata: Metadata = {
  title: "Certificates & Achievements | Rahul Siddhu Nimbalkar",
  description:
    "Verified internship completion certificates from NexaNova ProTech and V Kumar Solutions (I) Pvt. Ltd., and academic milestones.",
};

export default function CertificatesPage() {
  return (
    <div className="pt-24 min-h-[85vh]">
      <Certificates />
    </div>
  );
}
