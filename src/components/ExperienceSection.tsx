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
      description:
        "Crafting editorial strategy and providing oversight in one of Africa's foremost tech publications. Responsible for mentoring reporters, editorial direction and driving growth. ",
      achievements: [
        "Manage and mentor team of 5+ reporters and junior journalists",
        "Implement analytics-driven content strategy that boosts readership",
        "Oversee daily editorial operations and content distribution",
      ],
      color: "from-blue-600 to-cyan-600",
      icon: Users,
      duration: "active",
      logo: "",
    },
    {
      year: "MAY 2023 - SEPT 2025",
      role: "Deputy Managing Editor",
      company: "Pulse Sport Nigeria",
      description:
        "Leading editorial operations and team management for one of Nigeria's premier sports media platforms. Played a crucial role in leading operations and providing editorial direction, mentorship, and driving content strategy.",
      achievements: [
        "Increased social media engagement by 40% through strategic content planning",
        "Managed and mentored team of 10+ reporters and junior journalists",
        "Increased page views by over 700% within the first two years",
        "Oversaw daily editorial operations and content distribution",
      ],
      color: "from-red-500 to-orange-500",
      icon: Users,
      duration: "2+ year",
      logo: pulse,
    },
    {
      year: "NOV 2022 - MAY 2023",
      role: "News Desk Editor",
      company: "Battabox",
      description:
        "Directed news operations and content strategy for digital media platform. Conducted exclusive interviews, managed editorial team, and implemented SEO strategies.",
      achievements: [
        "Grew Battabox.com from under 10k to over 37k monthly visitors within 2 months",
        "Managed content workflow using WordPress and Trello CMS",
        "Developed and executed successful SEO and backlink strategies",
        "Led team of writers while maintaining editorial standards",
      ],
      color: "from-purple-500 to-pink-500",
      icon: Target,
      duration: "7 months",
      logo: "",
    },
    {
      year: "JUNE 2022 - NOV 2022",
      role: "Senior News Writer / Assistant Social Media Manager",
      company: "Blackdot Media",
      description:
        "Produced high-quality news content and supported social media strategy. Conducted exclusive interviews and contributed to audience growth initiatives.",
      achievements: [
        "Wrote over 2,000 engaging articles with strong reader response",
        "Conducted exclusive interviews with prominent figures",
        "Assisted in social media strategy that increased platform engagement",
        "Maintained daily news output while ensuring quality standards",
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
      description:
        "Specialized in cryptocurrency and financial markets reporting. Produced daily news articles, price analysis, and comprehensive research reports.",
      achievements: [
        "Wrote 1,000+ clear and accurate crypto news articles",
        "Produced 40,000+ words monthly of business and trading analysis",
        "Published 12 in-depth industry research reports",
        "Built reputation for reliable financial market coverage",
      ],
      color: "from-orange-500 to-orange-500",
      icon: Award,
      duration: "3 months",
      logo: "₿",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest">
                Career Journey
              </span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              Evolution
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            From breaking news reporter to editorial leadership—each role has
            shaped my expertise in digital journalism, team management, and
            audience growth strategies.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-cyan-500/40 to-blue-500/20 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
          </div>

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-cyan-500/40 to-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
          </div>

          {/* Items */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants as any}
                  className="relative flex flex-col lg:flex-row items-start lg:items-stretch"
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-6 lg:left-1/2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-white border-2 sm:border-3 lg:border-4 border-blue-500 shadow-lg lg:shadow-xl lg:transform lg:-translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br ${exp.color}`}
                    ></div>
                  </div>

                  {/* Date Card */}
                  <div
                    className={`lg:w-5/12 ${
                      index % 2 === 0 ? "lg:pr-6 xl:pr-8" : "lg:pl-6 xl:pl-8 lg:order-2"
                    } w-full mb-4 lg:mb-0 ml-6 sm:ml-8 lg:ml-0`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`bg-gradient-to-br ${exp.color} rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-white shadow-lg sm:shadow-xl lg:shadow-2xl h-full flex flex-col justify-center relative overflow-hidden`}
                    >
                      {/* Logo */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        {exp.logo && (exp.logo.endsWith(".webp") || exp.logo.endsWith(".jpeg")) ? (
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 object-contain transform rotate-12 scale-110 sm:scale-125 lg:scale-150"
                          />
                        ) : exp.logo ? (
                          <div className="text-3xl sm:text-4xl lg:text-8xl font-bold transform rotate-12 scale-110 sm:scale-125 lg:scale-150">
                            {exp.logo}
                          </div>
                        ) : null}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3 lg:mb-3 gap-1 sm:gap-0">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white/90" />
                            <span className="font-bold text-white/90 text-xs sm:text-sm lg:text-lg">
                              {exp.year}
                            </span>
                          </div>
                          <span className="bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm self-start sm:self-auto">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="text-sm sm:text-base lg:text-2xl font-black leading-tight">
                          {exp.role}
                        </div>
                        <div className="text-cyan-100 font-semibold text-xs sm:text-sm lg:text-lg mt-0.5 lg:mt-1">
                          {exp.company}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Details Card */}
                  <div
                    className={`lg:w-5/12 ${
                      index % 2 === 0 ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8 lg:order-1"
                    } w-full ml-6 sm:ml-8 lg:ml-0`}
                  >
                    <motion.div
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-8 border border-gray-200/80 shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm bg-white/95 h-full"
                    >
                      {/* Header */}
                      <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4 lg:mb-6">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg lg:text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate">
                            {exp.role}
                          </h3>
                          <div className="text-blue-600 font-bold text-xs sm:text-sm lg:text-base truncate">
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-xs sm:text-sm lg:text-lg leading-relaxed mb-3 sm:mb-4 lg:mb-8 font-medium">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                        <h4 className="font-black text-gray-900 flex items-center text-sm sm:text-base lg:text-lg">
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2 lg:mr-3 text-blue-500 transform group-hover:translate-x-0.5 lg:group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                          Key Impact & Achievements
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-2 p-1.5 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300"
                            >
                              <div
                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br ${exp.color} mt-1 flex-shrink-0`}
                              ></div>
                              <span className="text-gray-700 font-medium leading-relaxed text-xs sm:text-sm lg:text-base">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block lg:w-2/12"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="relative">
            <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12 xl:p-16 text-white shadow-xl sm:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  Let's Create Impactful{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Stories
                  </span>
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm lg:text-xl mb-4 sm:mb-6 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Ready to bring your stories to life with professional
                  journalism that engages, informs, and inspires your audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-6 justify-center items-center">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-black text-sm sm:text-base lg:text-lg hover:from-cyan-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-xl lg:shadow-2xl inline-flex items-center space-x-1 sm:space-x-2 lg:space-x-3 w-full sm:w-auto justify-center"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-0.5 lg:group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="group border border-white/30 sm:border-2 text-white px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-black text-sm sm:text-base lg:text-lg hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-1 sm:space-x-2 lg:space-x-3 w-full sm:w-auto justify-center backdrop-blur-sm"
                  >
                    <span>View My Portfolio</span>
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transform group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
