import Link from "next/link";

export default function FooterLink({ href, type, children }) {
  return (
    <Link
      href={href}
      className={` ${type === "icon" ? "text-gray-400" : ""} hover:text-white`}
    >
      {children}
    </Link>
  );
}
