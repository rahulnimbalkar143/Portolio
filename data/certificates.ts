import { CertificateItem } from "@/types";

export const certificatesData: CertificateItem[] = [
  {
    id: "nexanova-cert",
    title: "NexaNova ProTech Internship Completion Certificate",
    issuer: "NexaNova ProTech, Pune",
    date: "04/06/2026",
    badge: "Verified Industry Experience",
    previewUrl: "/certificates/nexanova_protech_internship.jpg",
    fileUrl: "/certificates/nexanova_protech_internship.jpg",
    isPdf: false,
  },
  {
    id: "vkumar-cert",
    title: "V Kumar Solutions Industrial Internship Certificate",
    issuer: "V Kumar Solutions (I) Pvt. Ltd., Pune",
    date: "17/03/2026",
    badge: "Verified Industry Experience",
    previewUrl: "/certificates/vkumar_solutions_internship_preview.png",
    fileUrl: "/certificates/vkumar_solutions_internship.pdf",
    isPdf: true,
  },
  {
    id: "mkcl-python-django-cert",
    title: "Building Dynamic Applications with Flask & Django Frameworks",
    issuer: "MKCL & Dr. J.J. Magdum College of Engineering",
    date: "05/05/2025",
    badge: "Score: 96% • Python & Web Frameworks",
    previewUrl: "/certificates/mkcl_python_django_flask.jpg",
    fileUrl: "/certificates/mkcl_python_django_flask.pdf",
    isPdf: true,
  },
];
