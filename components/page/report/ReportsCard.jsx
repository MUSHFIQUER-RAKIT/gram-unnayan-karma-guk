import Image from "next/image";

export default function ReportsCard({ item }) {
  return (
    <div
      className={`max-w-[275px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 group`}
    >
      <a href="#">
        <div className=" w-full overflow-hidden">
          <Image
            width={208}
            height={208}
            className="rounded-t-lg w-full h-52 object-cover group-hover:scale-110  transition-all"
            src={item.imgUrl}
            alt={item.title}
          />
        </div>
      </a>
      <div className="p-5 group-hover:bg-gray-100">
        <a href="#">
          <h5 className="mb-2     tracking-tight text-gray-900 dark:text-white">
            {item?.title}
          </h5>
        </a>

        <div className="flex justify-between items-center">
          <a
            href={item?.download}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download
          </a>
          <div className="flex text-sm text-primary-700">
            <span>09-23-2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
