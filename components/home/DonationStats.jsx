"use client";

import { useEffect, useState } from "react";

export default function DonationStats() {
  const [totalDonation, setTotalDonation] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("totalDonation");
    if (stored) {
      setTotalDonation(parseInt(stored, 10));
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 h-24 md:h-28 text-white rounded-xl shadow-md p-4 md:p-6 max-w-[240px] bg-primary-700  ">
      <div className="font-semibold text-sm md:text-lg">Total Donation</div>
      <div className="font-semibold text-xs md:text-3xl tracking-tight">
        {totalDonation}+
      </div>
    </div>
  );
}
