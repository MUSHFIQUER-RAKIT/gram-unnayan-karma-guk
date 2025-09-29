import { MessagesSquare } from "lucide-react";
import { Noto_Serif_Bengali, Open_Sans } from "next/font/google";
import Link from "next/link";
import "swiper/css";
import "./globals.css";

const inter = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const notoSansBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Gram Unnayan Karma",
  description: "Recreated with Next.js + Tailwind",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased scroll-smooth`}
      >
        {children}

        <div className=" fixed bottom-0 right-0 mb-4 mr-4 z-10  ">
          <Link
            title="Chat withAI"
            href="#"
            target="_blank"
            className=" w-16 h-16 flex justify-center items-center bg-primary-800 text-white    rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <MessagesSquare />
          </Link>
        </div>
      </body>
    </html>
  );
}
