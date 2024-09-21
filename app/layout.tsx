import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Portfolio - Om Kumar",
  description: "Personal portfolio for creating digital presence",
  keywords: "Om Kumar, Portfolio, om kumar, portfolio, om kumar portfolio, about om kumar",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",

  // Open Graph metadata
  openGraph: {
    type: "website",
    title: "Portfolio - Om Kumar",
    description: "Portfolio website for showing Digital presence.",
    url: "https://omkumar-portfolio.vercel.app",
    images: [
      {
        url: "https://omkumar-portfolio.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Om Kumar Portfolio Image",
      },
    ],
    siteName: "Om Kumar Portfolio",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Om Kumar",
    description: "Portfolio website for showing Digital presence.",
    images: ["https://omkumar-portfolio.vercel.app/favicon.ico"],
  },
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
        <SpeedInsights />
      </body>
    </html>
  );
}
