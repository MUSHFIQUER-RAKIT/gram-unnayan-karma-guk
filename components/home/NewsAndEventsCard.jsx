import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});

export default function NewsAndEventsCard({ item }) {
  return (
    <div
      className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 group`}
    >
      <a href="#">
        <div className=" w-96 overflow-hidden relative ">
          <Image
            width={208}
            height={208}
            className="rounded-t-lg w-96 h-52 object-cover group-hover:scale-110  transition-all"
            src={item.src}
            alt={item.title}
          />
          <div className="absolute  top-2 right-2 bg-primary-500 px-4 py-2  text-xs text-white rounded-2xl">
            {item.tag}
          </div>
        </div>
      </a>
      <div className="p-5 group-hover:bg-gray-100">
        <a href="#">
          <h5 className="mb-2 font-serif font-medium text-2xl  tracking-tight text-gray-900 dark:text-white">
            {item?.title}
          </h5>
        </a>
        <p className="mb-3 font-sans text-gray-500 dark:text-gray-400">
          {item?.description}
        </p>

        <div className="flex justify-between items-center">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <div className="flex text-sm text-primary-700">
            <span>09-23-2025</span>
            <span className="mx-2">|</span>
            <span>0 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
