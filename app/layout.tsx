import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#040714",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulnimbalkar.dev"),
  title: {
    default: "Rahul Siddhu Nimbalkar | Full Stack Developer & Software Engineer",
    template: "%s | Rahul Siddhu Nimbalkar",
  },
  description:
    "Full Stack Developer with hands-on experience building production-grade web applications using Java, Spring Boot, React, Next.js, and Node.js. MCA graduate (9.57 CGPA, 1st Rank).",
  keywords: [
    "Rahul Siddhu Nimbalkar",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Node.js Developer",
    "MCA Graduate",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Rahul Siddhu Nimbalkar" }],
  creator: "Rahul Siddhu Nimbalkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahulnimbalkar.dev",
    title: "Rahul Siddhu Nimbalkar | Full Stack Developer & Software Engineer",
    description:
      "Full-stack developer building scalable, user-focused production systems using React, Next.js, Spring Boot, and Node.js.",
    siteName: "Rahul Siddhu Nimbalkar Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Rahul Siddhu Nimbalkar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Siddhu Nimbalkar | Full Stack Developer & Software Engineer",
    description:
      "Full-stack developer building scalable, user-focused production systems using React, Next.js, Spring Boot, and Node.js.",
    images: ["/images/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.add('light');}else{document.documentElement.classList.remove('light');}}catch(e){}})();`,
          }}
        />
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
