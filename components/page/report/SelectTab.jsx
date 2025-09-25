"use client";

import { useRouter, useSearchParams } from "next/navigation";

const tabOptions = [
  { value: "", label: "Report" },
  { value: "annual-report", label: "Annual  Report" },
  { value: "news-letter", label: "News Letter" },
  { value: "new", label: "Newest First" },
  { value: "rating", label: "Rating" },
];

export default function SelectTabRadio() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "";

  const handleTabChange = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("tab", value);
    } else {
      params.delete("tab");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800">
      {tabOptions.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={`tab-${option.value || "featured"}`}
            name="sort-tab"
            value={option.value}
            checked={currentTab === option.value}
            onChange={handleTabChange}
            className="hidden"
          />

          <label
            htmlFor={`tab-${option.value || "featured"}`}
            className={`
              px-4 py-3 cursor-pointer rounded-md transition-colors duration-200 text-sm whitespace-nowrap
              ${
                currentTab === option.value
                  ? " text-primary-500 shadow-md font-semibold dark:bg-primary-600 border  "
                  : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }
            `}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}
