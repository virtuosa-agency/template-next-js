"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/utils/cn";

export const BreadcrumbHomepage = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "flex w-full flex-row justify-start px-1 pb-4 pt-2 ph:px-6 md:px-12 lg:px-18 xl:px-24",
        className,
      )}
    >
      <div>
        <Link href="/" className="group font-light text-black">
          <div className="flex items-center gap-1">
            <Icon icon="mdi:chevron-left" className="h-5 w-5 text-black" />
            <span className="duration-300">Back to home</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
