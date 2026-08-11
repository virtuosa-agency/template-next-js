"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BlackLogo from "@/assets/images/logos/virtuosa-black-logo.png";
import { navigation, NavigationItem } from "@/data/navigation";
import { siteConfig } from "@/utils/meta/metadata";
import { handleSamePageAnchorClick } from "@/utils/scrollToAnchor";

const ease = [0.22, 1, 0.36, 1] as const;

const legalLinks = [
  { name: "Cookie Management", href: "/cookies" },
  { name: "Legal Notice", href: "/legal-notice" },
] as const;

const linkClassName =
  "text-sm uppercase tracking-[0.14em] text-secondary/55 transition-colors duration-500 hover:text-secondary";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-8 pt-24 ph:px-6 md:px-12 lg:px-18 xl:px-24">
      <motion.div
        className="w-full pt-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="flex flex-col gap-14 md:gap-16">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <Link href="/" className="inline-flex w-fit">
              <Image
                src={BlackLogo}
                alt={siteConfig.name}
                width={120}
                height={40}
                className="h-9 w-auto object-contain opacity-90 transition-opacity duration-500 hover:opacity-100"
              />
            </Link>

            <nav
              aria-label="Footer"
              className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-3"
            >
              {navigation.map((item: NavigationItem) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkClassName}
                  onClick={(event) =>
                    handleSamePageAnchorClick(item.href, event)
                  }
                >
                  {item.name}
                </Link>
              ))}
              <a href={`mailto:${siteConfig.email}`} className={linkClassName}>
                {siteConfig.email}
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-6 border-t border-secondary/10 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs tracking-[0.12em] text-secondary/40 transition-colors duration-500 hover:text-secondary/70"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <p className="text-xs tracking-[0.08em] text-secondary/40">
              © {currentYear} Your Company. All rights reserved.
              <span className="mx-2 text-secondary/20" aria-hidden>
                ·
              </span>
              Developed by{" "}
              <Link
                href="https://www.virtuosa.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/55 transition-colors duration-500 hover:text-secondary"
              >
                Virtuosa
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
