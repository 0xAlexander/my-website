import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://meikopoulos.com"),
  alternates: {
    canonical: "https://meikopoulos.com",
  },
  title: "Alexander Meikopoulos",
  description:
    "Alexander Meikopoulos is a Front-end Software Engineer and Project Leader with expertise in Quality excellence and Web3 technology.",
  keywords:
    "Alexander Meikopoulos, Front-end Engineer, Project Leader, Web Development, Web3, Decentralized Applications, Quality Assurance, Software Engineering, Blockchain, Cryptography",
  openGraph: {
    locale: "en_US",
    siteName: "Alexander Meikopoulos",
    type: "website",
    title: "Alexander Meikopoulos",
    description:
      "Alexander Meikopoulos is a Front-end Software Engineer and Project Leader with expertise in Quality excellence and Web3 technology.",
    url: "https://meikopoulos.com",
    images: [
      {
        url: "./og_large.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Meikopoulos",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
