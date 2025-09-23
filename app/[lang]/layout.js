import FooterContainer from "@/components/footer/FooterContainer";
import FooterEnd from "@/components/footer/FooterEnd";
import FooterLayout from "@/components/footer/FooterLayout";
import Header from "@/components/header/header";
import { getDictionary } from "@/lib/dictionaries";
import { Inter } from "next/font/google";
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
      </body>
    </html>
  );
}
