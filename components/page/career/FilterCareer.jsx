"use client";

import Label from "@/components/common/Label";
import OnCardAction from "@/components/common/OnCardAction";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FilterCareer({ lang }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  function clearSearch(value) {
    const params = new URLSearchParams(searchParams);
    params.delete(value);

    setSearchTerm("");

    router.push(`?${params.toString()}`);
  }

  const handleFiltersSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = new URLSearchParams(searchParams);

    const category = formData.get("category");
    const timeline = formData.get("Timeline");

    if (searchTerm) params.set("search", searchTerm);
    else params.delete("search");

    if (category) params.set("category", category);
    else params.delete("category");

    if (timeline) params.set("timeline", timeline);
    else params.delete("timeline");

    router.push(`/${lang}/career?${params.toString()}`);
  };

  return (
    <>
      <div className="p-4">
        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          onSubmit={handleFiltersSubmit}
        >
          <input type="hidden" name="lang" value={lang} />
          <Label Labelfor="search" label="Search">
            <input
              type="text"
              id="search"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search items..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <span className="fas fa-search absolute left-3 top-3 text-gray-400">
              <Search size={18} />
            </span>
            {searchTerm.length !== 0 && (
              <span
                role="button"
                onClick={() => clearSearch("search")}
                className="fas fa-search absolute right-4 top-3 text-gray-400 cursor-pointer"
              >
                <X size={18} />
              </span>
            )}
          </Label>

          <Label Labelfor="category" label="Category">
            <select
              type="select"
              id="category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">All Categories</option>
              <option value="categorie1">Category 1</option>
              <option value="categorie2">Category 2</option>
            </select>
          </Label>

          <Label Labelfor="Timeline" label="Timeline">
            <select
              type="select"
              name="Timeline"
              id="Timeline"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Timeline</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </Label>

          <div className="flex items-end">
            <OnCardAction text="Apply Filters" />
          </div>
        </form>
      </div>
      <div className=" p-4 ">
        {searchParams.get("category") && (
          <span className=" text-left outline-1 outline-primary-500 py-2 mr-2 px-8 rounded-full relative">
            {searchParams.get("category") || ""}
            <button
              onClick={() => clearSearch("category")}
              className="absolute right-4 top-3 cursor-pointer text-primary-500"
            >
              <X size={16} />
            </button>
          </span>
        )}

        {searchParams.get("timeline") && (
          <span className=" text-left outline-1 outline-primary-500 py-2 px-8 rounded-full relative">
            {searchParams.get("timeline") || ""}
            <button
              onClick={() => clearSearch("timeline")}
              className="absolute right-4 top-3 cursor-pointer text-primary-500"
            >
              <X size={16} />
            </button>
          </span>
        )}
      </div>
    </>
  );
}
