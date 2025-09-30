"use client";
import { useEffect, useState } from "react";

export default function Counter({ targetNumber, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    if (end === 0) return;

    const increment = Math.ceil(end / (duration / 16));

    const step = () => {
      start += increment;
      if (start >= end) {
      } else {
        setCount(start);
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [targetNumber, duration]);

  return (
    <div className="font-semibold text-xs md:text-3xl tracking-tight">
      {count}
    </div>
  );
}
