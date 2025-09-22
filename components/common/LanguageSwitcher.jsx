"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = lang => {
    const segments = pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/");

    startTransition(() => {
      router.push(newPath);
    });
  };

  const currentLang = pathname.split("/")[1];

  return (
    <div className="flex items-center space-x-2 text-sm">
      <button
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === "en" ? "bg-black text-white" : "hover:bg-gray-100"
        }`}
        onClick={() => changeLanguage("en")}
        disabled={isPending}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === "bn" ? "bg-black text-white" : "hover:bg-gray-100"
        }`}
        onClick={() => changeLanguage("bn")}
        disabled={isPending}
      >
        বাং
      </button>
    </div>
  );
}
