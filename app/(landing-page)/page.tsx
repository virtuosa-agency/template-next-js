import { HeroSection } from "./sections/HeroSection";
import { ContactSection } from "./sections/ContactSection";
import { CTASection } from "./sections/CTASection";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-48">
      <HeroSection />
      <ContactSection />
      <CTASection />
    </div>
  );
}
