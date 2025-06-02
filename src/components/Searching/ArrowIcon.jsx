import React from "react";

const ArrowIcon = ({ onClick }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[16px] h-[16px] cursor-pointer"
      onClick={onClick}
    >
      <path
        d="M7.84613 2.50781L13.5999 8.00009M13.5999 8.00009L7.84613 13.4924M13.5999 8.00009L2.40002 8.00009"
        stroke="#2388FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;