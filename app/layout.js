import Header from "@/components/header/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Gram Unnayan Karma",
  description: "Recreated with Next.js + Tailwind",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
