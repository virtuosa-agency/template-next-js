"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/utils/meta/metadata";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import heroImage from "@/assets/images/hero-bw.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease },
  }),
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15"
        aria-hidden
      />

      <div className="relative z-10 flex w-full flex-col px-4 pb-16 pt-32 ph:px-6 md:px-12 md:pb-24 lg:px-18 xl:px-24">
        <div>
          <motion.h1
            className="font-syne text-5xl font-semibold tracking-tight text-primary md:text-7xl lg:text-8xl"
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            className="mt-6 font-syne text-2xl font-medium leading-snug text-primary/95 md:text-3xl lg:text-4xl"
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Crafted presence for brands that value restraint.
          </motion.p>

          <motion.p
            className="mt-5 text-base leading-relaxed text-primary/75 md:text-lg"
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8"
            custom={0.65}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <PrimaryButton
              text="Get in touch"
              navigateTo="/#contact"
              variant="inverted"
            />
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm uppercase tracking-[0.14em] text-primary/70 transition-colors duration-300 hover:text-primary"
            >
              {siteConfig.email}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
