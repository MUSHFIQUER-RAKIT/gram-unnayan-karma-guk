"use client";
import { usePathname } from "next/navigation";
export default function FooterLayout({ DefaultFooter, CreatePageFooter }) {
  const pathName = usePathname();

  const locales = pathName.split("/")[1];

  return pathName === `/${locales}/donate` ||
    pathName === `/${locales}/donate/paynow`
    ? CreatePageFooter
    : DefaultFooter;
}
