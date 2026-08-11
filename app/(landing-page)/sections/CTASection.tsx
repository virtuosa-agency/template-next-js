import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SectionLayout } from "@/components/layout/SectionLayout";

export const CTASection = () => {
  return (
    <SectionLayout className="text-center">
      <p className="mb-6 text-3xl font-medium text-gray-900 md:text-4xl">
        Need some help?
      </p>

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
    </SectionLayout>
  );
};
