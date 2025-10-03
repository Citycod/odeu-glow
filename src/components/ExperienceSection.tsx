import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Calendar,
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Award,
  Sparkles,
} from "lucide-react";

import pulse from "../assets/pulse.webp";
import batta from "../assets/batta.webp";
import blackdot from "../assets/blackdot.jpeg";

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  logo: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      year: "SEPT 2025 - Present",
      role: "Managing Editor",
      company: "TechPoint Africa",
      description: "Leading editorial operations and team management for one of Nigeria's premier sports media platforms.",
      achievements: [
        "Increased social media engagement by 40%",
        "Managed team of 10+ reporters",
        "Implemented analytics-driven content strategy",
        "Oversaw daily editorial operations",
      ],
      color: "from-blue-600 to-cyan-600",
      icon: Users,
      duration: "1+ year",
      logo: "",
    },
    {
      year: "MAY 2023 - Present",
      role: "Deputy Managing Editor",
      company: "Pulse Sport Nigeria",
      description: "Leading editorial operations and team management for one of Nigeria's premier sports media platforms.",
      achievements: [
        "Increased social media engagement by 40%",
        "Managed team of 10+ reporters",
        "Implemented analytics-driven strategy",
        "Oversaw daily operations",
      ],
      color: "from-red-500 to-orange-500",
      icon: Users,
      duration: "1+ year",
      logo: pulse,
    },
    {
      year: "NOV 2022 - MAY 2023",
      role: "News Desk Editor",
      company: "Battabox",
      description: "Directed news operations and content strategy for digital media platform.",
      achievements: [
        "Grew website from 10k to 37k monthly visitors",
        "Managed content workflow",
        "Developed SEO strategies",
        "Led team of writers",
      ],
      color: "from-purple-500 to-pink-500",
      icon: Target,
      duration: "7 months",
      logo: batta,
    },
    {
      year: "JUNE 2022 - NOV 2022",
      role: "Senior News Writer",
      company: "Blackdot Media",
      description: "Produced high-quality news content and supported social media strategy.",
      achievements: [
        "Wrote 2,000+ engaging articles",
        "Conducted exclusive interviews",
        "Assisted social media strategy",
        "Maintained quality standards",
      ],
      color: "from-green-500 to-emerald-500",
      icon: TrendingUp,
      duration: "6 months",
      logo: blackdot,
    },
    {
      year: "NOV 2021 - JAN 2022",
      role: "Financial Writer",
      company: "Satoshi Media",
      description: "Specialized in cryptocurrency and financial markets reporting.",
      achievements: [
        "Wrote 1,000+ crypto articles",
        "Produced 40k+ words monthly",
        "Published research reports",
        "Built market coverage reputation",
      ],
      color: "from-orange-500 to-orange-500",
      icon: Award,
      duration: "3 months",
      logo: "₿",
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex justify-center mb-2 sm:mb-3">
            <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-2 sm:px-3 py-1 rounded-full shadow">
              <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-white font-bold text-xs uppercase tracking-widest">
                Career Journey
              </span>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-gray-900 mb-2 sm:mb-3 leading-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              Evolution
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From breaking news reporter to editorial leadership—each role has shaped my expertise.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile Timeline Line */}
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-cyan-500/40 to-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
          </div>

          {/* Items */}
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Dot */}
                  <div className="absolute left-3 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border-2 border-blue-500 shadow z-20 flex items-center justify-center transform -translate-x-1/2 mt-1">
                    <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-br ${exp.color}`}></div>
                  </div>

                  {/* Content */}
                  <div className="ml-6 sm:ml-8 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className={`bg-gradient-to-br ${exp.color} rounded-lg p-3 sm:p-4 text-white shadow h-full relative overflow-hidden`}
                    >
                      {/* Logo */}
                      {exp.logo && (exp.logo.endsWith(".webp") || exp.logo.endsWith(".jpeg")) ? (
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain transform rotate-12"
                          />
                        </div>
                      ) : exp.logo ? (
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <div className="text-2xl sm:text-4xl font-bold transform rotate-12">
                            {exp.logo}
                          </div>
                        </div>
                      ) : null}

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-white/90" />
                            <span className="font-bold text-white/90 text-xs sm:text-sm">
                              {exp.year}
                            </span>
                          </div>
                          <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="text-sm sm:text-base font-black leading-tight">
                          {exp.role}
                        </div>
                        <div className="text-cyan-100 font-semibold text-xs sm:text-sm">
                          {exp.company}
                        </div>
                      </div>
                    </motion.div>

                    {/* Details Card */}
                    <motion.div
                      whileHover={{ y: -1 }}
                      className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow mt-2 group backdrop-blur-sm"
                    >
                      {/* Header */}
                      <div className="flex items-start space-x-2 sm:space-x-3 mb-2">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center shadow group-hover:scale-105 transition-transform duration-500 flex-shrink-0`}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate">
                            {exp.role}
                          </h3>
                          <div className="text-blue-600 font-bold text-xs sm:text-sm truncate">
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2 font-medium">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-1 sm:space-y-2">
                        <h4 className="font-black text-gray-900 flex items-center text-xs sm:text-sm">
                          <ArrowRight className="w-3 h-3 mr-1 text-blue-500 transform group-hover:translate-x-0.5 transition-transform duration-300 flex-shrink-0" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-1 p-1 rounded bg-gradient-to-r from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300"
                            >
                              <div
                                className={`w-1 h-1 rounded-full bg-gradient-to-br ${exp.color} mt-1 flex-shrink-0`}
                              ></div>
                              <span className="text-gray-700 font-medium leading-relaxed text-xs">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 rounded-xl p-4 sm:p-6 text-white shadow relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 leading-tight">
                Let's Create Impactful{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mb-3 max-w-md mx-auto leading-relaxed">
                Ready to bring your stories to life with professional journalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 sm:px-4 py-1.5 rounded-md font-black text-xs sm:text-sm hover:from-cyan-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow inline-flex items-center space-x-1 w-full sm:w-auto justify-center"
                >
                  <span>Start Conversation</span>
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                </Link>
                <Link
                  to="/portfolio"
                  className="group border border-white/30 text-white px-3 sm:px-4 py-1.5 rounded-md font-black text-xs sm:text-sm hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-1 w-full sm:w-auto justify-center backdrop-blur-sm"
                >
                  <span>View Portfolio</span>
                  <Sparkles className="w-3 h-3 transform group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;