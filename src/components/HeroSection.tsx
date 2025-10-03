import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles,  Award, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initScrollAnimations } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/uncle.jpeg';

const HeroSection = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const skills = [
    'Investigative Reporting',
    'Feature Writing',
    'Digital Storytelling',
    'Editorial Leadership',
    'SEO Optimization',
    'Sport News',
    'Interview Techniques',
    'Media Ethics',
    'Content Strategy'
  ];

  const stats = [
    { number: '5+', label: 'Years in Journalism' },
    { number: '200+', label: 'Stories Published' },
    { number: '15+', label: 'Awards & Recognition' }
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-blue-900">
      {/* High-Voltage Background */}
      <div className="absolute inset-0">
        {/* Animated electric pulses */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-electric-blue rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-circuit-pattern bg-cover"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Reduced Font Sizes */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Sparkles className="text-cyan-400 w-5 h-5 animate-pulse" />
                </div>
                <span className="text-cyan-400 font-semibold text-sm tracking-wide uppercase">
                  AWARD-WINNING JOURNALIST
                </span>
              </div>
              
              {/* Reduced Headline Sizes */}
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                 ASUKWO
                  </span>
                </h1>
                <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                     ODUO
                  </span>
                </h1>
                
                <div className="flex items-center space-x-3 pt-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  <h2 className="text-lg lg:text-xl font-semibold text-white/90 tracking-wide">
                    TECH • INNOVATION • SPORT 
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-base text-white/80 leading-relaxed font-normal border-l-3 border-cyan-400 pl-4 py-1">
                "I fell in love with journalism and storytelling despite studying Agricultural Economics. 
                I'm a big fan of equity, fairness, and justice in society, 
                and contributing my quota to make people happy gives me so much joy."
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 py-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="text-lg font-black text-cyan-400">{stat.number}</div>
                    <div className="text-xs text-white/70 font-medium mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <PenTool className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-semibold text-base">CORE EXPERTISE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white font-medium text-xs hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 cursor-default shadow-lg shadow-cyan-500/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <Link 
                to="/about" 
                className="group relative px-6 py-3 rounded-lg font-semibold text-base text-center overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/25"
              >
                <span className="relative z-10 text-white tracking-wide">
                  EXPLORE MY WORK
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/portfolio" 
                className="group px-6 py-3 rounded-lg font-semibold text-base border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-center transform hover:scale-105"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300 tracking-wide">
                  READ MY STORIES
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              {/* Electric frame effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative bg-black rounded-lg overflow-hidden border-2 border-cyan-400/30 transform group-hover:scale-105 transition-all duration-500">
                <img
                  src={heroImage}
                  alt="Oduo Junior - Award-Winning Journalist"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 rounded-full shadow-xl">
                  <div className="flex items-center space-x-1">
                    <Award className="w-3 h-3 text-white" />
                    <span className="text-white font-semibold text-xs tracking-wide">JOURNALIST</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-cyan-400 rounded-full blur-lg opacity-40 animate-bounce"></div>
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-blue-500 rounded-full blur-lg opacity-40 animate-bounce delay-1000"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-cyan-400/80 font-medium text-xs mb-1 tracking-wide">
            SCROLL FOR IMPACT
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-1.5 rounded-full bg-cyan-400/20 border border-cyan-400/30">
              <ChevronDown className="text-cyan-400 w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Add these styles to your global CSS */}
      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        
        .font-rajdhani {
          font-family: 'Rajdhani', sans-serif;
        }
        
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2303a9f4' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default HeroSection;