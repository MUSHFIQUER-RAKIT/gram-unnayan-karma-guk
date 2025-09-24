"use client";
import { Facebook, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Search from "./Search";

export default function Header({ navBar }) {
  const pathName = usePathname();

  const locales = pathName.split("/")[1];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full ${
        pathName === `/${locales}/donate` ||
        pathName === `/${locales}/donate/paynow`
          ? "fixed"
          : ""
      } `}
    >
      {/* //top header  */}
      <div className=" bg-primary-700 text-white  ">
        <div className="flex justify-between max-w-7xl mx-auto p-2  text-sm ">
          <ul className="flex gap-2">
            <li className="flex gap-2">
              <Mail size={18} />
              info@guk.org.bd
            </li>
            <li>|</li>
            <li className="flex gap-2">
              <Phone size={18} />
              01733366999
            </li>
          </ul>

          <ul className="flex  gap-1.5">
            <li>
              <Facebook size={18} />
            </li>
            <li>
              <Linkedin size={18} />
            </li>
            <li>
              <Youtube size={18} />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`
    w-full
    transition-all duration-300 ease-in-out
    ${
      scrolled &&
      pathName !== `/${locales}/donate` &&
      pathName !== `/${locales}/donate/paynow`
        ? "fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-lg"
        : ""
    }
  `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Image src="/favicon.png" width={48} height={48} alt="GUK" />
            </Link>

            {pathName !== `/${locales}/donate` &&
              pathName !== `/${locales}/donate/paynow` && (
                <>
                  {/* Desktop Menu */}
                  <nav className="hidden md:flex space-x-6 ">
                    {navBar.map((item, index) => (
                      <ul key={index} className="relative group">
                        <li>
                          <Link
                            href={`/${locales}${item?.href}`}
                            className={`${
                              pathName.replace(`/${locales}`, "/") ===
                              item?.href
                                ? "text-primary-500 font-bold"
                                : ""
                            } hover:text-primary-500`}
                          >
                            {item?.name}
                          </Link>
                        </li>
                        {item?.sub && (
                          <ul className="absolute left-0 top-full z-10 min-w-[200px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none hidden group-hover:block">
                            {item?.sub.map((ite, i) => (
                              <li
                                key={i}
                                className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100"
                              >
                                {ite.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </ul>
                    ))}
                  </nav>
                </>
              )}
            <Search />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-600">
              About
            </Link>
            <Link href="/programs" className="hover:text-green-600">
              Programs
            </Link>
            <Link href="/donate" className="hover:text-green-600">
              Donate
            </Link>
            <Link href="/contact" className="hover:text-green-600">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
