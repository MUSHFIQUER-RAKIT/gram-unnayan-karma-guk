"use client";

import { X } from "lucide-react";
import { useRef } from "react";

export default function Marquee() {
  const marqueeRef = useRef();
  function closeMarquee() {
    if (marqueeRef.current) {
      marqueeRef.current.style.display = "none";
    }
  }
  return (
    <div ref={marqueeRef} className="w-full flex absolute top-0 ">
      <marquee className="overflow-hidden  bg-gray-100 shadow-sm p-2 ">
        <div className="marquee-content flex gap-4 items-center ">
          <div className="px-4 py-2 bg-primary-500/70  rounded ">
            News Update:
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed enim
            labore aliquid vel.
          </p>
          <div className="px-4 py-2 ms-7 bg-pink-500/70  rounded ">Reports Update:</div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed enim
            labore aliquid vel.
          </p>
        </div>
      </marquee>
      <button
        onClick={closeMarquee}
        className="bg-gray-100  p-4 cursor-pointer"
      >
        <X size={18} />
      </button>
    </div>
  );
}
