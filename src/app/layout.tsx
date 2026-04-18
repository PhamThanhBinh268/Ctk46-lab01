import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfolio Phạm Thanh Bình",
  description: "Website portfolio cá nhân - CTK46A",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 px-4 py-8 max-w-5xl mx-auto w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
