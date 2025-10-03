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

// ✅ Correct imports for TypeScript (relative path)
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
  logo: string; // we import as string paths
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
        {
      year: "SEPT 2025 - Present",
      role: " Managing Editor",
      company: "TechPoint Africa",
      description:
        "Leading editorial operations and team management for one of Nigeria's premier sports media platforms. Responsible for coordinating reporters, providing editorial direction, mentorship, and driving content strategy.",
      achievements: [
        "Increased social media engagement by 40% through strategic content planning",
        "Managed and mentored team of 10+ reporters and junior journalists",
        "Implemented analytics-driven content strategy that boosted readership",
        "Oversaw daily editorial operations and content distribution",
      ],
      color: "from-blue-600 to-cyan-600",
      icon: Users,
      duration: "1+ year",
      logo: "", // ✅ use imported image
    },
    {
      year: "MAY 2023 - Present",
      role: "Deputy Managing Editor",
      company: "Pulse Sport Nigeria",
      description:
        "Leading editorial operations and team management for one of Nigeria's premier sports media platforms. Responsible for coordinating reporters, providing editorial direction, mentorship, and driving content strategy.",
      achievements: [
        "Increased social media engagement by 40% through strategic content planning",
        "Managed and mentored team of 10+ reporters and junior journalists",
        "Implemented analytics-driven content strategy that boosted readership",
        "Oversaw daily editorial operations and content distribution",
      ],
      color: "from-red-500 to-orange-500",
      icon: Users,
      duration: "1+ year",
      logo: pulse, // ✅ use imported image
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
      logo: batta, // ✅ use imported image
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
      logo: blackdot, // ✅ use imported image
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
      logo: "₿", // still a symbol
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
      className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full shadow-lg">
              <Building2 className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-widest">
                Career Journey
              </span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              Evolution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-cyan-500/40 to-blue-500/20 lg:transform lg:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
          </div>

          {/* Items */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants as any}
                  className="relative flex flex-col lg:flex-row items-start lg:items-stretch"
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-xl lg:transform lg:-translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.color}`}
                    ></div>
                  </div>

                  {/* Date Card */}
                  <div
                    className={`lg:w-5/12 ${
                      index % 2 === 0
                        ? "lg:pr-8"
                        : "lg:pl-8 lg:order-2"
                    } w-full mb-4 lg:mb-0`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`bg-gradient-to-br ${exp.color} rounded-2xl p-6 text-white shadow-2xl h-full flex flex-col justify-center relative overflow-hidden`}
                    >
                      {/* Logo */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        {exp.logo.endsWith(".webp") ? (
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-32 h-32 object-contain transform rotate-12 scale-150"
                          />
                        ) : (
                          <div className="text-8xl font-bold transform rotate-12 scale-150">
                            {exp.logo}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5 text-white/90" />
                            <span className="font-bold text-white/90 text-lg">
                              {exp.year}
                            </span>
                          </div>
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="text-2xl font-black leading-tight">
                          {exp.role}
                        </div>
                        <div className="text-cyan-100 font-semibold text-lg mt-1">
                          {exp.company}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Details Card */}
                  <div
                    className={`lg:w-5/12 ${
                      index % 2 === 0
                        ? "lg:pl-8"
                        : "lg:pr-8 lg:order-1"
                    } w-full ml-12 lg:ml-0`}
                  >
                    <motion.div
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm bg-white/95 h-full"
                    >
                      {/* Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="text-blue-600 font-bold text-base">
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-4">
                        <h4 className="font-black text-gray-900 flex items-center text-lg">
                          <ArrowRight className="w-5 h-5 mr-3 text-blue-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                          Key Impact & Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.color} mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-gray-700 font-medium leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

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
          className="text-center mt-24"
        >
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 rounded-3xl p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                  Let's Create Impactful{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Stories
                  </span>
                </h3>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Ready to bring your stories to life with professional
                  journalism that engages, informs, and inspires your audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:from-cyan-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center space-x-3"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3 backdrop-blur-sm"
                  >
                    <span>View My Portfolio</span>
                    <Sparkles className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
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
