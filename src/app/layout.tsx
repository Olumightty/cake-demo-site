import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navigation/NavBar";


export const metadata: Metadata = {
  title: "Cake | Bakery Site",
  description: "A bakery site built with Next.js and Tailwind CSS",
  icons: {
    icon: "/images/logo.svg",
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
        className={`antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
