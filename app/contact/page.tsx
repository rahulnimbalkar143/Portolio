import { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact & Connect | Rahul Siddhu Nimbalkar",
  description:
    "Get in touch with Rahul Siddhu Nimbalkar for software engineering roles, full-stack opportunities, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8">
      <Contact />
    </div>
  );
}
