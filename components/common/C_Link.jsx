"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function C_Link({ link, text }) {
  const pathName = usePathname();

  const locales = pathName.split("/")[1];
  return (
    <Link
      href={`/${locales}/${link}`}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
    >
      {text}
    </Link>
  );
}
