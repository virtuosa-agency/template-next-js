"use client";

import Link from "next/link";
import { MouseEvent, ReactNode } from "react";
import { handleSamePageAnchorClick } from "@/utils/scrollToAnchor";

export type PrimaryButtonProps = {
  text: string;
  navigateTo?: string;
  className?: string;
  target?: string;
  onClick?: () => void;
  variant?: "default" | "inverted";
};

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      className="h-3.5 w-3.5 shrink-0 opacity-45 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100"
      style={{ transitionTimingFunction: ease }}
    >
      <path
        d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ButtonContent({
  text,
  isInverted,
}: {
  text: string;
  isInverted: boolean;
}) {
  return (
    <>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 translate-y-full transition-transform duration-700 group-hover:translate-y-0 group-focus-visible:translate-y-0 ${
          isInverted ? "bg-secondary" : "bg-primary"
        }`}
        style={{ transitionTimingFunction: ease }}
      />
      <span
        className={`relative z-10 inline-flex items-center gap-3 tracking-[0.14em] transition-colors duration-700 ${
          isInverted
            ? "text-secondary group-hover:text-primary group-focus-visible:text-primary"
            : "text-primary group-hover:text-secondary group-focus-visible:text-secondary"
        }`}
        style={{ transitionTimingFunction: ease }}
      >
        <span>{text}</span>
        <ArrowIcon />
      </span>
    </>
  );
}

export const PrimaryButton = ({
  text,
  navigateTo,
  className = "",
  target = "_self",
  onClick,
  variant = "default",
}: PrimaryButtonProps) => {
  const isInverted = variant === "inverted";

  const buttonClasses = [
    "group relative inline-flex items-center justify-center overflow-hidden",
    "rounded-md border border-transparent px-7 py-3.5 text-sm uppercase",
    "transition-[opacity,border-color] duration-700",
    "active:opacity-80",
    "focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2",
    isInverted
      ? "bg-primary hover:border-primary focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-offset-secondary"
      : "bg-secondary hover:border-secondary focus-visible:border-secondary focus-visible:ring-secondary/40 focus-visible:ring-offset-primary",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content: ReactNode = (
    <ButtonContent text={text} isInverted={isInverted} />
  );

  if (navigateTo) {
    return (
      <Link
        href={navigateTo}
        className={buttonClasses}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          handleSamePageAnchorClick(navigateTo, event);
          onClick?.();
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  );
};
