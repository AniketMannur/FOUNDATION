import { ModernHero } from '@/components/ModernHero';
import { AboutSection } from '@/components/AboutSection';
import { ProgramsSection } from '@/components/ProgramsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import { ScrollNavigation } from '@/components/ScrollNavigation';

export default function Home() {
  return (
    <>
      <ModernHero />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CallToAction />
      <ScrollNavigation />
    </>
  );
}
