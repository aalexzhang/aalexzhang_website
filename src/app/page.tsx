import { SiteLayout } from "@/components/SiteLayout";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </SiteLayout>
  );
}
