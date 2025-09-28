"use client";
import { Mail, Phone } from "lucide-react";
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

  const [openSubMenus, setOpenSubMenus] = useState({});
  const toggleSubMenu = (index) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <header
      className={`w-full ${
        pathName === `/${locales}/donate` ||
        pathName === `/${locales}/donate/paynow`
          ? "fixed"
          : ""
      } `}
    >
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
              <Link href="https://www.facebook.com/guk.org.bd" target="_blank">
                <img className="w-7" src="/icon/icons8-facebook-48.png" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/gram-unnayan-karma-guk"
                target="_blank"
              >
                <img className="w-7" src="/icon/icons8-linkedin-48.png" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UCa18Gu5eZJ2vFjjnuXA92Iw"
                target="_blank"
              >
                <img className="w-7" src="/icon/icons8-youtube-48.png" />
              </Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-0">
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
                      <ul key={index} className=" group relative">
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
                            }  ${
                              item?.name === "Donate" || item?.name === "ডোনেট"
                                ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:text-white hover:animate-pulse"
                                : ""
                            } `}
                          >
                            {item?.name}
                          </Link>
                        </li>
                        {item?.sub && (
                          <ul className="absolute z-40 -left-10 min-w-[250px]  overflow-auto rounded-lg border border-slate-200 bg-primary-600/90   backdrop-blur-3xl shadow-lg  p-1.5  focus:outline-none hidden group-hover:block">
                            {item?.sub.map((ite, i) => (
                              <li
                                key={i}
                                className="cursor-pointer text-white  flex w-full text-sm items-center rounded-md transition-all hover:bg-primary-700/90 "
                              >
                                <Link
                                  href={`/${locales}${ite?.href}`}
                                  className=" w-full h-full p-3  "
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
        <div className="md:hidden fixed inset-x-0 top-24 bg-white shadow-lg border-t border-gray-200 z-40">
          <nav className="flex flex-col space-y-1 p-4">
            {navBar.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center justify-between w-full">
                  <Link
                    href={item?.href}
                    className="py-2 text-nowrap  text-gray-700 hover:text-green-600"
                  >
                    {item?.name}
                  </Link>

                  {item?.sub && (
                    <button
                      type="button"
                      onClick={() => toggleSubMenu(index)}
                      className="p-2   w-full text-gray-500  hover:text-green-600 focus:outline-none transition-transform duration-200"
                      aria-expanded={openSubMenus[index] ? "true" : "false"}
                      aria-controls={`submenu-${index}`}
                    >
                      <svg
                        className={`h-5 w-5 transform place-self-end ${
                          openSubMenus[index] ? "rotate-180" : "rotate-0"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {item?.sub && openSubMenus[index] && (
                  <div
                    id={`submenu-${index}`}
                    className="ml-4 pl-3 border-l border-gray-200 space-y-1 mt-1"
                  >
                    {item?.sub.map((ite, i) => (
                      <Link
                        key={i}
                        href={`/${locales}${ite?.href}`}
                        className="block py-2 text-sm text-gray-600 hover:text-green-600"
                      >
                        {ite.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
