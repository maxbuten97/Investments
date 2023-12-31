import "./globals.scss";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Продвижение бизнеса | Главная",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className="container">
          <Header />
          <Navigation />
          <main className={inter.className}>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
