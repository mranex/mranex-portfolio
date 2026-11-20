import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ClinicalCredentialsSection } from "@/components/ClinicalCredentialsSection";
import { OutreachSection } from "@/components/OutreachSection";
import { EngineeringSection } from "@/components/EngineeringSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <HeroSection />
        <ResearchSection />
        <ClinicalCredentialsSection />
        <OutreachSection />
        <EngineeringSection />
        <CapabilitiesSection />
      </main>
      <ContactFooter />
    </div>
  );
}
