"use client";

import { usePathname, useRouter } from "next/navigation";

export default function PayBtn() {
  const router = useRouter();
  const pathName = usePathname();

  const locales = pathName.split("/")[1];
  function handleCount() {
    const currentCount = parseInt(
      localStorage.getItem("totalDonation") || "0",
      10
    );

    const newCount = currentCount + 1;

    localStorage.setItem("totalDonation", newCount.toString());

    router.push(`/${locales}`);
  }
  return (
    <button
      onClick={handleCount}
      className="block w-full max-w-xs mx-auto bg-primary-500 hover:bg-primary-700 focus:bg-primary-700 text-white rounded-lg px-3 py-3 font-semibold"
    >
      PAY NOW
    </button>
  );
}
