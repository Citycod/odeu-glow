import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import { initScrollAnimations } from '@/hooks/useScrollAnimation';

const Index = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/70 text-sm">
            © 2024 Oduo Junior. Crafted with passion and purpose.
          </div>
          <div className="text-foreground/70 text-sm mt-4 md:mt-0">
            Transforming ideas into digital reality
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
