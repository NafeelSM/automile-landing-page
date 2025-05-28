import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProjectScopeSection from "@/components/project-scope-section";
import AppPreviewSection from "@/components/app-preview-section";
import TechnologyStackSection from "@/components/technology-stack-section";
import MilestonesSection from "@/components/milestones-section";
import DownloadsSection from "@/components/downloads-section";
import AboutUsSection from "@/components/about-us-section";
import AchievementsSection from "@/components/achievements-section";
import ContactUsSection from "@/components/contact-us-section";
import FinalCtaSection from "@/components/final-cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAE7FB] to-[#F2DDDC]">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectScopeSection />
        <AppPreviewSection />
        <TechnologyStackSection />
        <MilestonesSection />
        <DownloadsSection />
        <AboutUsSection />
        {/* <AchievementsSection /> */}
        <ContactUsSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}
