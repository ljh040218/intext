import * as React from "react";

function SearchInput() {
  return (
    <div className="mt-8 w-full text-gray-500 whitespace-nowrap min-h-10">
      <div className="flex overflow-hidden w-full rounded border border-solid bg-neutral-100 border-[color:var(--Gray-200,#EAECF0)] min-h-10">
        <div className="flex flex-1 shrink gap-3 items-center px-4 py-2 basis-0 min-w-60 size-full">
          <div className="z-10 self-stretch my-auto w-3 text-xs font-black text-center text-gray-500">
            search
          </div>
          <input
            type="text"
            placeholder="검색"
            className="flex-1 shrink self-stretch my-auto text-base leading-relaxed text-gray-500 basis-0 min-w-60 bg-transparent border-none outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
