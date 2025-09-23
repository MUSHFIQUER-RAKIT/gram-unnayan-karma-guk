import Image from "next/image";
import Link from "next/link";
import FooterEnd from "./FooterEnd";
import FooterLink from "./FooterLink";

export default async function FooterContainer({ footer }) {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image width={50} height={50} alt="DD" src="/favicon.png" />
                <div>
                  <h3 className="text-xl font-bold">{footer?.webDes.title}</h3>
                  <p className="text-sm text-gray-400">{footer?.webDes.des}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{footer?.webDes.description}</p>
              <div className="flex space-x-4">
                <FooterLink href="#" type="icon">
                  <i className="fab fa-facebook"></i>
                </FooterLink>
                <FooterLink href="#" type="icon">
                  <i className="fab fa-twitter"></i>
                </FooterLink>
                <FooterLink href="#" type="icon">
                  <i className="fab fa-instagram"></i>
                </FooterLink>
              </div>
            </div>

            {Object.entries(footer?.list).map(([section, links]) => (
              <div key={section}>
                <h4 className="font-semibold mb-4">{section}</h4>
                <ul className="space-y-2 text-gray-400">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <span>Find Us On Google Map</span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7243.097606094261!2d89.38162400000002!3d24.810899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc557cdc8b77eb%3A0x6a43d012656434ec!2sGUK%20Tower%20-%20Bogura!5e0!3m2!1sen!2sbd!4v1758621160060!5m2!1sen!2sbd"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <FooterEnd footerEnd="Copyright © 2025 - GUK.ORG.BD | All rights reserved" />
      </footer>
    </>
  );
}
