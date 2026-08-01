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
  title: "Aqua Linux - Buildroot Based Independent Distro",
  description:
    "A Buildroot based independent Linux distribution in progress, built toward a custom Wayland compositor and liquid-glass desktop.",
  openGraph: {
    title: "Aqua Linux",
    description:
      "Independent Buildroot based Linux distribution work in progress.",
    images: ["/aqua-full-logo-glow.png"],
  },
  icons: {
    icon: "/aqua-mark-glass.png",
    shortcut: "/aqua-mark-glass.png",
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
      </body>
    </html>
  );
}
