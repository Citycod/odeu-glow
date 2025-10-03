import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Award, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initScrollAnimations } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/uncle.jpeg';

const HeroSection = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const skills = [
    'Digital Storytelling',
    'Feature Writing',
    'Editorial Leadership',
    'SEO Optimization',
    'Sports News',
    'Interview Techniques',
    'Media Ethics',
    'Content Strategy',
    'CopyWriting'
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '1000+', label: 'Stories Published' },
    { number: '3+', label: 'Awards Won' }
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-blue-900">
      {/* High-Voltage Background */}
      <div className="absolute inset-0">
        {/* Animated electric pulses */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 lg:w-60 lg:h-60 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-3/4 left-1/2 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-electric-blue rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-3 sm:space-y-4 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2 sm:space-y-3"
            >
              <div className="flex items-center space-x-1 mb-2 sm:mb-3">
                <Sparkles className="text-cyan-400 w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                <span className="text-cyan-400 font-semibold text-xs sm:text-sm tracking-wide uppercase">
                  AWARD-WINNING JOURNALIST
                </span>
              </div>
              
              {/* Responsive Headline Sizes */}
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    ASUKWO
                  </span>
                </h1>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    ODUO
                  </span>
                </h1>
                
                <div className="flex items-center space-x-1 sm:space-x-2 pt-1 sm:pt-2">
                  <div className="w-4 h-0.5 sm:w-6 sm:h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-white/90 tracking-wide">
                    TECH • INNOVATION • LEADERSHIP 
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2 sm:space-y-3"
            >
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal border-l-2 border-cyan-400 pl-2 sm:pl-3 py-1">
                "I fell in love with journalism and storytelling despite studying Agricultural Economics. 
                I'm a big fan of equity, fairness, and justice in society."
              </p>

              {/* Stats - Responsive Grid */}
              <div className="grid grid-cols-3 gap-1 sm:gap-2 py-1 sm:py-2">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-1 sm:p-2 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="text-sm sm:text-base font-black text-cyan-400">{stat.number}</div>
                    <div className="text-[10px] sm:text-xs text-white/70 font-medium mt-0.5 leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-1 sm:space-y-2"
            >
              <div className="flex items-center space-x-1">
                <PenTool className="w-3 h-3 text-cyan-400" />
                <span className="text-white font-semibold text-xs sm:text-sm">CORE EXPERTISE</span>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="px-2 py-0.5 sm:px-2 sm:py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white font-medium text-[10px] sm:text-xs hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 cursor-default shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons - Responsive Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col xs:flex-row gap-1 sm:gap-2 pt-2 sm:pt-3"
            >
              <Link 
                to="/about" 
                className="group relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-semibold text-xs sm:text-sm text-center overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow"
              >
                <span className="relative z-10 text-white tracking-wide">
                  EXPLORE MY WORK
                </span>
              </Link>
              
              <Link 
                to="/portfolio" 
                className="group px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-semibold text-xs sm:text-sm border border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-center transform hover:scale-105"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300 tracking-wide">
                  READ STORIES
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Hero Image - Hidden on small screens, visible on medium and up */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden sm:block relative lg:order-2"
          >
            <div className="relative group">
              {/* Electric frame effect */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative bg-black rounded-lg overflow-hidden border border-cyan-400/30 transform group-hover:scale-105 transition-all duration-500 max-w-xs mx-auto lg:max-w-none">
                <img
                  src={heroImage}
                  alt="Oduo Junior - Award-Winning Journalist"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-2 right-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-1.5 py-0.5 rounded-full shadow">
                  <div className="flex items-center space-x-1">
                    <Award className="w-2 h-2 text-white" />
                    <span className="text-white font-semibold text-[10px] tracking-wide">JOURNALIST</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-cyan-400/80 font-medium text-[10px] mb-0.5 tracking-wide hidden sm:block">
            SCROLL FOR IMPACT
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-1 rounded-full bg-cyan-400/20 border border-cyan-400/30">
              <ChevronDown className="text-cyan-400 w-3 h-3" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;