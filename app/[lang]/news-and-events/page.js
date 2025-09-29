import BreadCrumb from "@/components/common/BreadCrumb";
import Pagination from "@/components/common/Pagination";
import NewsCard from "@/components/page/NewsCard";
import { getDictionary } from "@/lib/dictionaries";
import Image from "next/image";

export default async function NewsAndEvents({ params: { lang } }) {
  const { newsandEvents } = await getDictionary(lang);
  return (
    <section className="p-8 max-w-7xl mx-auto space-y-8">
      <button className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <BreadCrumb />

      <div className="flex gap-7  max-w-full">
        <aside className=" w-96 p-4 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sticky top-20 h-screen">
          <form className="w-full ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </form>

          <ul className="m-5">
            <li className=" list-disc marker:text-green-500 tracking-wider font-bold">
              Latest News
            </li>
          </ul>

          <div className="flex   bg-white border border-gray-200 rounded-lg shadow-sm  md:max-w-xl hover:bg-gray-100   cursor-pointer">
            <Image
              width={96}
              height={96}
              className="rounded-t-lg w-24 h-24 object-cover"
              src="/health.jpg"
              alt="{title}"
            />

            <div className="flex flex-col justify-between  leading-normal">
              <h5
                className={`text-primary-800 p-2 text-xs font-bold tracking-tight  dark:text-white`}
              >
                Meeting with Grameen Communication high officials
              </h5>

              <div className="flex ms-auto mr-2 text-primary-800 text-[10px]">
                <span>09-24-2025</span>
                <span className=" mx-2">|</span>
                <span>0 Comments</span>
              </div>
            </div>
          </div>
        </aside>
        <div className=" w-full  text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          {newsandEvents.map((item, i) => (
            <NewsCard key={i} item={item} />
          ))}

          <Pagination />
        </div>
      </div>
    </section>
  );
}
