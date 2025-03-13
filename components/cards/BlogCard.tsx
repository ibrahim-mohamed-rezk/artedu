"use client";

import Link from "next/link";

interface Blog {
  image: string;
  title: string;
  id: number;
  created_at: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  const date = new Date(blog?.created_at);
  return (
    <div className="w-full max-w-[279px] h-auto min-h-[275px] p-2 bg-[#8c9ec5]/10 rounded-xl flex flex-col justify-end items-end gap-3 overflow-hidden">
      <Link href={`/blogs/${blog?.id}`} className="w-full">
        <img
          className="w-full h-auto max-h-[185px] rounded-xl shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2]"
          src={blog?.image}
          alt={blog?.title}
        />
        <div className="w-full mt-2">
          <div className="relative">
            <h2 className="text-right text-black text-sm font-bold font-['SST Arabic'] leading-tight mb-2">
              {blog?.title}
            </h2>
            <div className="absolute top-0 right-0">
              <div className="w-2.5 h-[11px] bg-[#e55604] rounded-sm border border-black relative">
                <svg className="absolute left-[1px] top-[2px]" width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 2.5L5 2.5" stroke="white" strokeWidth="0.25" strokeLinecap="round" />
                  <path d="M9 1.5L5 1.5" stroke="white" strokeWidth="0.25" strokeLinecap="round" />
                  <path d="M9 3.5L1 3.5" stroke="white" strokeWidth="0.25" strokeLinecap="round" />
                  <path d="M9 5.5L1 5.5" stroke="white" strokeWidth="0.25" strokeLinecap="round" />
                  <path d="M9 6.5L1 6.5" stroke="white" strokeWidth="0.25" strokeLinecap="round" />
                  <path d="M9 4.5L1 4.5" stroke="white" strokeWidth="0.25" strokeLinecap="round" />
                  <path d="M17 0.5L13 0.5" stroke="white" strokeWidth="0.25" strokeLinecap="round" />
                  <path d="M4 0.5V2.5C4 2.77614 3.77614 3 3.5 3H1.5C1.22386 3 1 2.77614 1 2.5V0.5C1 0.223858 1.22386 0 1.5 0H3.5C3.77614 0 4 0.223858 4 0.5Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center mt-2">
            <div className="flex items-center gap-1">
              <span className="text-right text-[#8c9ec5] text-[10px] font-bold font-['SST Arabic'] leading-tight">
                {date.getDate()} {date.toLocaleString("default", { month: "short" })} {date.getFullYear()}
              </span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1449_1276)">
                  <path d="M7.91667 0.833333H7.5V0.416667C7.5 0.30616 7.4561 0.200179 7.37796 0.122039C7.29982 0.0438987 7.19384 0 7.08333 0C6.97283 0 6.86685 0.0438987 6.7887 0.122039C6.71057 0.200179 6.66667 0.30616 6.66667 0.416667V0.833333H3.33333V0.416667C3.33333 0.30616 3.28943 0.200179 3.21129 0.122039C3.13315 0.0438987 3.02717 0 2.91667 0C2.80616 0 2.70018 0.0438987 2.62204 0.122039C2.5439 0.200179 2.5 0.30616 2.5 0.416667V0.833333H2.08333C1.531 0.833995 1.00148 1.0537 0.610925 1.44426C0.220367 1.83482 0.000661607 2.36434 0 2.91667L0 7.91667C0.000661607 8.469 0.220367 8.99852 0.610925 9.38908C1.00148 9.77963 1.531 9.99934 2.08333 10H7.91667C8.469 9.99934 8.99852 9.77963 9.38908 9.38908C9.77963 8.99852 9.99934 8.469 10 7.91667V2.91667C9.99934 2.36434 9.77963 1.83482 9.38908 1.44426C8.99852 1.0537 8.469 0.833995 7.91667 0.833333ZM0.833333 2.91667C0.833333 2.58515 0.965029 2.2672 1.19945 2.03278C1.43387 1.79836 1.75181 1.66667 2.08333 1.66667H7.91667C8.24819 1.66667 8.56613 1.79836 8.80055 2.03278C9.03497 2.2672 9.16667 2.58515 9.16667 2.91667V3.33333H0.833333V2.91667ZM7.91667 9.16667H2.08333C1.75181 9.16667 1.43387 9.03497 1.19945 8.80055C0.965029 8.56613 0.833333 8.24819 0.833333 7.91667V4.16667H9.16667V7.91667C9.16667 8.24819 9.03497 8.56613 8.80055 8.80055C8.56613 9.03497 8.24819 9.16667 7.91667 9.16667Z" fill="#8C9EC5" />
                  <path d="M5 6.875C5.34518 6.875 5.625 6.59518 5.625 6.25C5.625 5.90482 5.34518 5.625 5 5.625C4.65482 5.625 4.375 5.90482 4.375 6.25C4.375 6.59518 4.65482 6.875 5 6.875Z" fill="#8C9EC5" />
                  <path d="M2.91602 6.875C3.26119 6.875 3.54102 6.59518 3.54102 6.25C3.54102 5.90482 3.26119 5.625 2.91602 5.625C2.57084 5.625 2.29102 5.90482 2.29102 6.25C2.29102 6.59518 2.57084 6.875 2.91602 6.875Z" fill="#8C9EC5" />
                  <path d="M7.08398 6.875C7.42916 6.875 7.70898 6.59518 7.70898 6.25C7.70898 5.90482 7.42916 5.625 7.08398 5.625C6.73881 5.625 6.45898 5.90482 6.45898 6.25C6.45898 6.59518 6.73881 6.875 7.08398 6.875Z" fill="#8C9EC5" />
                </g>
                <defs>
                  <clipPath id="clip0_1449_1276">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
