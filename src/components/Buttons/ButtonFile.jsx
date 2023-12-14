import React from "react";
import clsx from "clsx";

export const ButtonFile = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <div
        className={clsx(
          /* ----- default -----*/
          "p-3 rounded-full",
          "flex items-center",
          "bg-gray-200 fill-[#334155]",
          "shadow-md",

          /* ----- Transition -----*/
          "transition duration-300",

          /* ----- hover -----*/
          "hover:scale-110",

          /* ----- dark mode -----*/
          "dark:bg-[#334155]",
          "dark:fill-white",
          "dark:shadow-md"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 384 512"
          opacity="1"
        >
          <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
        </svg>
      </div>
    </button>
  );
};
