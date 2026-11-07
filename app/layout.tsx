import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Appliance Repair in Maihar | Maihar AC Service Center",
  description:
    "Independent multi-brand repair for AC, refrigerator, washing machine, deep freezer, microwave oven, car AC, RO purifier and geyser in Maihar, Madhya Pradesh. Call or WhatsApp to book.",
  openGraph: {
    title: "Home Appliance Repair in Maihar | Maihar AC Service Center",
    description:
      "Multi-brand repair for AC, refrigerator, washing machine, microwave and more in Maihar.",
    locale: "en_IN",
    type: "website",
    siteName: "Maihar AC Service Center",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
