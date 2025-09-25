"use client";
import { HandHeart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyLink() {
  const pathName = usePathname();

  const locales = pathName.split("/")[1];
  return (
    <Link
      href={`/${locales}/donate`}
      className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 group"
      aria-label="Make a donation"
    >
      <span>Donation</span>
      <HandHeart className=" group-hover:animate-ping" />
    </Link>
  );
}
