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
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-blue-900 min-h-screen">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated electric pulses */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 lg:w-60 lg:h-60 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-3/4 left-1/2 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-electric-blue rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Grid overlay for better text contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Sparkles className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                <span className="text-cyan-400 font-bold text-sm sm:text-base tracking-widest uppercase">
                  AWARD-WINNING JOURNALIST
                </span>
              </div>
              
              {/* Enhanced Headline */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                    ASUKWO
                  </span>
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                    ODUO
                  </span>
                </h1>
                
                <div className="flex items-center space-x-2 sm:space-x-3 pt-2 sm:pt-3">
                  <div className="w-6 h-1 sm:w-8 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-wide drop-shadow-lg">
                    TECH • INNOVATION • LEADERSHIP 
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-medium italic border-l-4 border-cyan-400 pl-4 sm:pl-6 py-2">
                  "I fell in love with journalism and storytelling despite studying Agricultural Economics. 
                  I'm a big fan of equity, fairness, and justice in society."
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2 sm:py-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 hover:bg-white/15 transition-all duration-300 shadow-lg"
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-cyan-400 drop-shadow-lg">{stat.number}</div>
                    <div className="text-xs sm:text-sm lg:text-base text-white/90 font-semibold mt-1 sm:mt-2 leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex items-center space-x-2">
                <PenTool className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-bold text-lg sm:text-xl">CORE EXPERTISE</span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/40 text-white font-semibold text-sm sm:text-base hover:from-cyan-500/40 hover:to-blue-500/40 hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 cursor-default shadow-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              <Link 
                to="/about" 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-center overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-white tracking-wide drop-shadow-lg">
                  EXPLORE MY WORK
                </span>
              </Link>
              
              <Link 
                to="/portfolio" 
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-center transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300 tracking-wide drop-shadow-lg">
                  READ STORIES
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Hero Image - Now visible on all screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative group max-w-sm mx-auto lg:max-w-none">
              {/* Enhanced electric frame effect */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative bg-black rounded-xl overflow-hidden border-2 border-cyan-400/40 transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Oduo Junior - Award-Winning Journalist"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                />
                
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Enhanced Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-full shadow-2xl">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-white" />
                    <span className="text-white font-bold text-sm tracking-widest">JOURNALIST</span>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-60 animate-bounce"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full blur-xl opacity-60 animate-bounce delay-1000"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-cyan-400 font-semibold text-sm mb-2 tracking-widest drop-shadow-lg">
            SCROLL FOR IMPACT
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full bg-cyan-400/30 border-2 border-cyan-400/50 backdrop-blur-sm"
          >
            <ChevronDown className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;