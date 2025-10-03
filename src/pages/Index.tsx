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
            © 2025  Asukwo Oduo.
          </div>
          <div className="text-foreground/70 text-sm mt-4 md:mt-0">
           <h3>MADE BY <a href="https://uplix.vercel.app" className='text-blue-500'>UPLIX</a></h3> 
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
