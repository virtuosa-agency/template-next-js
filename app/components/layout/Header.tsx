"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { navigation, NavigationItem } from "@/data/navigation";
import WhiteLogo from "@/assets/images/logos/virtuosa-white-logo.png";
import BlackLogo from "@/assets/images/logos/virtuosa-black-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { handleSamePageAnchorClick } from "@/utils/scrollToAnchor";

interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shouldShowBackground, setShouldShowBackground] = useState(false);
  const lastScrollY = useRef(0);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));

    const handleScroll = () => {
      if (!mobileMenuOpen) {
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < lastScrollY.current;
        const isNearTop = currentScrollY < 50;

        setIsVisible(isScrollingUp || isNearTop);

        if (isScrollingUp && !isNearTop) {
          setShouldShowBackground(true);
        } else if (isNearTop) {
          setShouldShowBackground(false);
        }

        lastScrollY.current = currentScrollY;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  if (!mounted) {
    return null;
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const contentVariants = {
    closed: { y: 20, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileMenuListVariants = {
    open: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
    closed: {},
  };

  const mobileMenuItemVariants = {
    closed: { y: 10, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const isOverHero = isHomePage && !shouldShowBackground && !mobileMenuOpen;

  return (
    <>
      <header
        role="banner"
        className={`fixed left-0 right-0 top-0 z-40 flex w-full items-center transition-transform duration-300 ease-out will-change-transform ${className} ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          mobileMenuOpen
            ? "h-16 bg-transparent px-6 md:px-8 lg:px-16"
            : shouldShowBackground
              ? "h-16 bg-primary px-6 md:px-8 lg:px-16"
              : "h-16 bg-transparent px-6 md:px-8 lg:px-16"
        }`}
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="z-50">
              <Image
                src={isOverHero ? WhiteLogo : BlackLogo}
                alt="Logo"
                className="h-36 w-36 object-contain"
              />
            </Link>
          </div>

          {/* Navigation sur desktop */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navigation.map((item: NavigationItem) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm uppercase tracking-wide transition-colors duration-300 ${
                    isOverHero
                      ? "text-primary/90 hover:text-primary"
                      : "text-secondary hover:text-secondary/75"
                  }`}
                  onClick={(event) =>
                    handleSamePageAnchorClick(item.href, event)
                  }
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <PrimaryButton
              text="Contact"
              navigateTo="/#contact"
              variant={isOverHero ? "inverted" : "default"}
              className="!px-5 !py-2.5 !text-xs"
            />
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={toggleMenu}
            className="z-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-8 transition-all duration-300 ${
                    isOverHero ? "bg-primary" : "bg-secondary"
                  }`}
                />
                <span
                  className={`block h-0.5 w-8 transition-all duration-300 ${
                    isOverHero ? "bg-primary" : "bg-secondary"
                  }`}
                />
                <span
                  className={`block h-0.5 w-8 transition-all duration-300 ${
                    isOverHero ? "bg-primary" : "bg-secondary"
                  }`}
                />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-primary lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            onTouchMove={(e) => e.preventDefault()}
            style={{ touchAction: "none" }}
          >
            <motion.div
              className="flex h-full flex-col items-center justify-center overflow-hidden px-4"
              variants={contentVariants}
            >
              <motion.div
                className="flex w-full flex-col items-center space-y-8 text-center"
                variants={mobileMenuListVariants}
                initial="closed"
                animate="open"
              >
                {navigation.map((item: NavigationItem) => (
                  <motion.div key={item.name} variants={mobileMenuItemVariants}>
                    <Link
                      href={item.href}
                      className="block text-xl font-light uppercase transition-colors duration-300"
                      onClick={(event) => {
                        handleSamePageAnchorClick(item.href, event);
                        toggleMenu();
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={mobileMenuItemVariants}
                  className="flex w-full justify-center"
                >
                  <PrimaryButton
                    text="Contact"
                    navigateTo="/#contact"
                    className="!text-lg font-light"
                    onClick={toggleMenu}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
