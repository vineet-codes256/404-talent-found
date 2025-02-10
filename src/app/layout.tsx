import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vineet Rawat | Full-Stack Developer Portfolio",
  description: "Explore the portfolio of Vineet Rawat, a creative full-stack developer specializing in AI integration, problem-solving, and innovative solutions.",
  keywords: "Vineet Rawat, Full-Stack Developer, AI Integration, Chrome Extensions, Software Developer Portfolio, Web Development, Problem Solver",
  authors: [{ name: "Vineet Rawat" }],
  openGraph: {
    title: "Vineet Rawat | Full-Stack Developer Portfolio",
    description: "Explore the portfolio of Vineet Rawat, a creative full-stack developer specializing in AI integration, problem-solving, and innovative solutions.",
    images: [
      {
        url: "/path-to-portfolio-image.jpg",
      },
    ],
    url: "https://vineet-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
