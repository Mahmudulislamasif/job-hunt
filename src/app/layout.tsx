import type { Metadata } from "next";
import { Inter, Lato, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
const lato = Lato({ 
  subsets: ["latin"]
  ,weight:['100','300','400','700','900'],
  variable:"--font-montserrat"
 });
const montserrat = Montserrat({ 
  subsets: ["latin"]
  ,weight:['100','200','300','400','500','600','700','800','900'],
  variable:"--font-montserrat"
 });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
