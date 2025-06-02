import * as React from "react";

function PromptCard({ title = "대충 제목", description = "어쩌고 저쩌고" }) {
  return (
    <article className="flex flex-col gap-4 justify-center p-6 mt-3.5 text-sm font-medium bg-white rounded-lg border border-solid border-[color:var(--Cards-Borders-BR-Color-2,#E3E6EA)] min-h-[121px]">
      <div className="gap-1.5 w-full">
        <h3 className="text-base leading-tight text-slate-800">
          {title}
        </h3>
        <p className="mt-1.5 text-slate-500">
          {description}
        </p>
        <div className="flex flex-col items-start pt-2 mt-1.5 w-full leading-tight text-center text-blue-500">
          <a href="#" className="flex gap-1.5 justify-center items-center">
            <span className="self-stretch my-auto text-blue-500">
              Read more
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17ad151d415809cf5d4e13b6a5eb3af64775d40d?placeholderIfAbsent=true&apiKey=2e820cafffd64e6ba3cbc3a41124fd94"
              alt="Arrow"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default PromptCard;
