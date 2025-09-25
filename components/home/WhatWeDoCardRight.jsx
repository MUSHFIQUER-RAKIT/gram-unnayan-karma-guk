import Image from "next/image";

export default function WhatWeDoCardRight({ src, title, des }) {
  let color;
  switch (title) {
    case "GUK Eye Hospital":
      color = " bg-emerald-700 ";
      break;
    case "Development Projects":
      color = " bg-cyan-900 ";
      break;
    case "Micro Enterprise":
      color = " bg-primary-800 ";
      break;

    default:
      break;
  }
  return (
    <div className="flex my-5  bg-white border border-gray-200 rounded-lg shadow-sm  md:max-w-xl hover:bg-gray-100 group  cursor-pointer">
      <div className="flex flex-col justify-between  md:py-4 leading-normal">
        <h5
          className={`${color} p-2 text-2xl font-bold tracking-tight text-white dark:text-white`}
        >
          {title}
        </h5>
        <p className="mb-3 font-normal p-2 text-gray-700 dark:text-gray-400">
          {des
            ? des
            : `Here are the biggest enterprise technology acquisitions of 2021 so
           far, in reverse chronological order.`}
        </p>
      </div>

      <div className=" w-96 overflow-hidden">
        <Image
          width={208}
          height={208}
          className="w-40 h-40 md:w-52 md:h-52 object-cover group-hover:scale-110  transition-all"
          src={src}
          alt={title}
        />
      </div>
    </div>
  );
}
