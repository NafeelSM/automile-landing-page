import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AutoMile - Your Travel Companion",
  description:
    "Improve vehicle management using IoT, data analytics, and AI. Features include GPS tracking with ESP32, predictive maintenance, AI chatbot assistance, and intelligent parts recommendations.",
  keywords:
    "AutoMile, vehicle management, IoT, ESP32, GPS tracking, predictive maintenance, AI chatbot, automotive analytics, smart vehicle system",
  authors: [{ name: "AutoMile Development Team" }],
  openGraph: {
    title: "AutoMile - Smart IoT-Based Vehicle Management",
    description:
      "Track, maintain, and enhance your vehicle experience with IoT and AI-powered solutions.",
    type: "website",
    locale: "en_US",
  },
  generator: "Custom Development",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
