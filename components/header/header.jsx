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
            <Link href={`/${locales}`}>
              <Image src="/favicon.png" width={48} height={48} alt="GUK" />
            </Link>

            {pathName !== `/${locales}/donate` &&
              pathName !== `/${locales}/donate/paynow` && (
                <>
                  {/* Desktop Menu */}
                  <nav className="hidden md:flex space-x-6 relative ">
                    {navBar.map((item, index) => (
                      <ul key={index} className=" group">
                        <li>
                          <Link
                            href={`/${locales}${item?.href}`}
                            className={`${
                              pathName.replace(`/${locales}`, "/") ===
                              item?.href
                                ? "text-primary-500 font-bold"
                                : ""
                            } hover:text-primary-500 ${
                              item?.sub
                                ? "before:content-['▼'] before:text-white before:absolute before:top-5   before:z-50  before:opacity-0 group-hover:before:opacity-100 before:transition-opacity "
                                : ""
                            } `}
                          >
                            {item?.name}
                          </Link>
                        </li>
                        {item?.sub && (
                          <ul className="absolute z-40 left-0 top-6  min-w-[800px] overflow-auto rounded-lg border border-slate-200 bg-primary-600/90   backdrop-blur-3xl shadow-lg  p-1.5  focus:outline-none hidden group-hover:block">
                            {item?.sub.map((ite, i) => (
                              <li
                                key={i}
                                className="cursor-pointer text-white  flex w-full text-sm items-center rounded-md transition-all hover:bg-primary-700/90 "
                              >
                                <Link
                                  href={`/${locales}${ite?.href}`}
                                  className=" w-full h-full p-3 "
                                >
                                  {ite.name}
                                </Link>
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
