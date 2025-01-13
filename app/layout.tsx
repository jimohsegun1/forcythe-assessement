import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Forcythe - Your Partner in Scalable Business Growth | Digital Solutions Expert",
  description:
    "Discover bespoke digital solutions with Forcythe, the growth catalyst for businesses aiming to scale in the US market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-black antialiased text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
