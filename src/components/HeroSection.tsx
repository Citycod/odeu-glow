import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { initScrollAnimations } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/oduo-junior-hero.jpg';

const HeroSection = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const skills = [
    'Product Strategy',
    'Media Innovation',
    'Data Analysis',
    'Team Leadership',
    'UX Research',
    'Growth Hacking',
    'Content Strategy',
    'Digital Transformation',
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="text-accent w-6 h-6" />
                <span className="text-accent font-medium">Hey there! 👋</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                I'm{' '}
                <span className="gradient-text">Oduo Junior</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-foreground/80 font-light">
                Media Strategist turned{' '}
                <span className="gradient-text font-semibold">
                  Product Innovator
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-foreground/70 leading-relaxed max-w-xl"
            >
              I transform complex media challenges into scalable digital solutions. 
              With a proven track record of growing audiences by 400%+ and bridging 
              the gap between storytelling and technology.
            </motion.p>

            {/* Skills Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="skill-pill"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="hero-button">
                Discover My Story
              </button>
              <button className="px-8 py-4 rounded-lg font-semibold border border-glass-border hover:bg-glass transition-all duration-300">
                View My Work
              </button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass-card p-8 float">
              <img
                src={heroImage}
                alt="Oduo Junior - Product Strategist and Media Innovator"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-70 pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur opacity-50"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-foreground/60 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-primary w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;