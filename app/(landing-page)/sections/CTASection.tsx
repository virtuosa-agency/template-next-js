"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SectionLayout } from "@/components/layout/SectionLayout";

export const CTASection = () => {
  return (
    <SectionLayout className="mt-120">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-medium text-gray-900 md:text-4xl">
          Need some help?
        </h2>

        <p className="mb-12 text-lg text-gray-600">
          Feel stuck ? Need some help ? We are here to help you.
          <br />
          Contact us to get started.
        </p>

        <div className="flex justify-center">
          <PrimaryButton
            text="Get in touch"
            navigateTo="https://www.virtuosa.fr/"
            target="_blank"
          />
        </div>
      </div>
    </SectionLayout>
  );
};
