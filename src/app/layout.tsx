import type { Metadata } from "next";
import { Overpass_Mono } from "next/font/google";
import "./globals.css";

const overpassMono = Overpass_Mono({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bernard Ishimwe | Portfolio",
  description:
    "Portfolio of Bernard Ishimwe — Civil & Transportation Engineering, ML, and geospatial research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overpassMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
