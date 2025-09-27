"use client";

import { Grid2x2, TextAlignJustify } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GridAndListSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("view") || "";

  const handleTabChange = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("view", value);
    } else {
      params.delete("view");
    }

    router.push(`?${params.toString()}`);
  };
  return (
    <div className=" flex gap-3">
      <div>
        <input
          type="radio"
          id="grid"
          name="grid"
          value="grid"
          checked={currentTab === "grid"}
          onChange={() => handleTabChange("grid")}
          className="hidden"
        />

        <label
          htmlFor="grid"
          className={`
               cursor-pointer rounded-md transition-colors duration-200 text-sm whitespace-nowrap
              ${
                currentTab === "grid"
                  ? " text-primary-500 shadow-md font-semibold dark:bg-primary-600"
                  : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }
            `}
        >
          <Grid2x2 />
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="list"
          name="list"
          value="list"
          checked={currentTab === "list"}
          onChange={() => handleTabChange("list")}
          className="hidden"
        />

        <label
          htmlFor="list"
          className={`
            cursor-pointer rounded-md transition-colors duration-200 text-sm whitespace-nowrap
              ${
                currentTab === "list"
                  ? " text-primary-500 shadow-md font-semibold dark:bg-primary-600  "
                  : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }
            `}
        >
          <TextAlignJustify />
        </label>
      </div>
    </div>
  );
}
