import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bimsara Madurapperuma | Software Engineer & Business Analyst",
  description:
    "Portfolio of Bimsara Madurapperuma – Software Engineer & Business Analyst. Projects, skills, experience, awards, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#0D1B2A] text-white`}>
        {children}
      </body>
    </html>
  );
}
