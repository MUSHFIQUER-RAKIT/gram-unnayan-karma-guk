import FooterContainer from "@/components/footer/FooterContainer";
import FooterEnd from "@/components/footer/FooterEnd";
import FooterLayout from "@/components/footer/FooterLayout";
import Header from "@/components/header/header";
import { getDictionary } from "@/lib/dictionaries";
import { ToastContainer } from "react-toastify";

export default async function RootLayout({ children, params: { lang } }) {
  const { navBar, footer } = await getDictionary(lang);

  return (
    <>
      <Header navBar={navBar} />

      <main>
        <ToastContainer position="bottom-right" autoClose={2000} />
        {children}
      </main>

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
    </>
  );
}
