import FooterContainer from "@/components/footer/FooterContainer";
import FooterEnd from "@/components/footer/FooterEnd";
import FooterLayout from "@/components/footer/FooterLayout";
import Header from "@/components/header/header";
import { getDictionary } from "@/lib/dictionaries";
import { MessagesSquare } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../globals.css";

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

export default async function RootLayout({ children, params: { lang } }) {
  const { navBar, footer } = await getDictionary(lang);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased scroll-smooth`}>
        <Header navBar={navBar} />

        <main>{children}</main>

        <FooterLayout
          DefaultFooter={
            <FooterContainer
              footer={footer}
              CreatePageFooter={
                <FooterEnd footerEnd="Copyright © 2025 - GUK.ORG.BD | All rights reserved" />
              }
            />
          }
        />

        <div className=" fixed bottom-0 right-0 mb-4 mr-4 z-10  ">
          <Link
            title="Chat withAI"
            href="#"
            target="_blank"
            className=" w-16 h-16 flex justify-center items-center bg-primary-800 text-white    rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <MessagesSquare />
          </Link>
        </div>
      </body>
    </html>
  );
}
