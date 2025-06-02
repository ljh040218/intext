import * as React from "react";

function HeaderActions() {
  return (
    <div className="flex gap-2 items-center self-end py-2 pr-4">
      <button className="overflow-hidden gap-0.5 self-stretch px-4 py-1 my-auto text-base font-semibold tracking-tight leading-none text-center bg-zinc-500 bg-opacity-10 rounded-[99px] text-neutral-700">
        + 직접 작성
      </button>
      <button className="flex overflow-hidden gap-0.5 justify-center items-center self-stretch px-1 my-auto bg-zinc-500 bg-opacity-10 h-[29px] min-h-7 rounded-[99px] w-[29px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8885a5aff25bf5fb96af9d25acf468ff9fc34481?placeholderIfAbsent=true&apiKey=2e820cafffd64e6ba3cbc3a41124fd94"
          alt="Edit"
          className="object-contain self-stretch my-auto aspect-[1.06] w-[17px]"
        />
      </button>
    </div>
  );
}

export default HeaderActions;
