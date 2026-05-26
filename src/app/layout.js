import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${site.name} | Portfolio`,
  description: site.tagline,
  keywords: [
    "Harshvardhan Mani Tripathi",
    "Software Engineer",
    "Full Stack Developer",
    "IIIT Surat",
    "React",
    "Next.js",
    "Machine Learning",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | Portfolio`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#060a12] text-slate-100">{children}</body>
    </html>
  );
}
