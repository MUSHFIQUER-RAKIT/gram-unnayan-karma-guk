"use client";
import { Facebook, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className=" bg-primary-700 text-white  ">
        <div className="flex justify-between max-w-7xl mx-auto p-2  text-sm ">
          <ul className="flex gap-2">
            <li className="flex gap-2">
              <Mail size={18} />
              info@guk.org.bd
            </li>
            <li>|</li>
            <li className="flex gap-2">
              <Phone />
              01733366999
            </li>
          </ul>

          <ul className="flex  gap-1.5">
            <li>
              <Facebook />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Youtube />
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Image src="/favicon.png" width={48} height={48} alt="GUK" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
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
