import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Janjatek",
  description: "Nosso objetivo é transformar a interação entre pessoas e sistemas tecnológicos, conectando comunidades e empresas por meio de serviços acessíveis e impactantes.",
  keywords: ["JANJA", "JANJATEK", "MOTORS", "Angola", "Technology", "Company", "Factory", "Karts", "Kart Kross", "Cross", "Car", "Maintenance", "Maintenance Vehicle", "NoHere", "Xfrente"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },

  authors: [{name: "António Garcia"}, {name: "Janjatek"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={``} suppressHydrationWarning>
        <Header />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
