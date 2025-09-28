import { useState } from "react";
import LanguageSwitcher from "../common/LanguageSwitcher";

export default function Search() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex justify-center align-middle text-center">
      <div
        className={`
          relative
          transition-all duration-1000 ease-in-out
          w-[50px] h-[50px]
          bg-white rounded-[25px] p-1
          border-4 border-white
          ${isExpanded ? "w-[200px] md:w-[300px]" : ""}
          flex items-center mr-1
        `}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search..."
          className={`
            absolute top-0 left-0
            w-full h-[42.5px]
            outline-none border-0 bg-gray-100
            rounded-[20px] px-5
            text-base text-gray-800
            ${isExpanded ? "block" : "hidden"}
          `}
        />
        {isExpanded ? (
          <div
            className={`
              absolute top-0 right-0
              box-border p-[10px]
              w-[42.5px] h-[42.5px]
              rounded-full
              bg-primary-500 text-white
              text-center text-xl
              transition-all duration-1000 ease-in-out
              flex items-center justify-center cursor-pointer
            `}
            onClick={handleToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ) : (
          <div
            className={`
              absolute top-0 right-0
              box-border p-[10px]
              w-[42.5px] h-[42.5px]
              rounded-full
              text-primary-500
              text-center text-xl
              transition-all duration-1000 ease-in-out
              flex items-center justify-center cursor-pointer
            `}
            onClick={handleToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        )}
      </div>
      <LanguageSwitcher />
    </div>
  );
}
