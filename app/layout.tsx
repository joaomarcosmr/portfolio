import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "Professional portfolio of a full-stack developer specialized in React, Next.js, TypeScript and Node.js. Creating modern and performant web experiences.",
  keywords: ["portfolio", "developer", "full-stack", "react", "next.js", "typescript", "web developer"],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    title: "Portfolio | Full-Stack Developer",
    description: "Professional portfolio of a full-stack developer specialized in React, Next.js and TypeScript",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full-Stack Developer",
    description: "Professional full-stack developer portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="supported-color-schemes" content="dark" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
