"use client";
import { usePathname } from "next/navigation";
export default function FooterLayout({ DefaultFooter, CreatePageFooter }) {
  const pathName = usePathname();
  return pathName === "/en/donate" ? CreatePageFooter : DefaultFooter;
}
