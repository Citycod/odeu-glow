import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Users, 
  Zap, 
  TrendingUp,
  Mic,
  Globe,
  FileText,
  Award,
  CheckCircle
} from 'lucide-react';

const SkillsSection = () => {
  const journalismSkills = [
    {
      icon: FileText,
      title: 'Feature Writing',
      description: 'Crafting compelling narratives that engage readers and bring stories to life',
      color: 'from-purple-500 to-pink-500',
      stats: '200+ Features'
    },
    {
      icon: Search,
      title: 'Fact-Checking',
      description: 'Meticulous verification ensuring accuracy and credibility in every published piece',
      color: 'from-green-500 to-emerald-500',
      stats: '99.9% Accuracy'
    },
    {
      icon: Mic,
      title: 'Interview Techniques',
      description: 'Extracting powerful insights through thoughtful questioning and active listening',
      color: 'from-orange-500 to-red-500',
      stats: '300+ Interviews'
    },
    {
      icon: Zap,
      title: 'Breaking News',
      description: 'Rapid response reporting with precision and clarity under tight deadlines',
      color: 'from-yellow-500 to-orange-500',
      stats: '24/7 Coverage'
    },
    {
      icon: TrendingUp,
      title: 'SEO Writing',
      description: 'Optimizing content for search engines while maintaining journalistic integrity',
      color: 'from-indigo-500 to-purple-500',
      stats: '400% Growth'
    },
    {
      icon: Users,
      title: 'Audience Engagement',
      description: 'Building loyal readership through relatable storytelling and community focus',
      color: 'from-cyan-500 to-blue-500',
      stats: '5M+ Readers'
    },
    {
      icon: Globe,
      title: 'Digital Storytelling',
      description: 'Leveraging multimedia and interactive elements to enhance narrative impact',
      color: 'from-pink-500 to-rose-500',
      stats: 'Multi-Platform'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience', icon: CheckCircle },
    { number: '200+', label: 'Articles Published', icon: FileText },
    { number: '15+', label: 'Awards Won', icon: Award },
    { number: '5M+', label: 'Readers Reached', icon: Users }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-2 sm:mb-3">
            <div className="inline-flex items-center space-x-1 bg-blue-100 px-2 sm:px-3 py-1 rounded-full">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                JOURNALISM EXPERTISE
              </span>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
            My Reporting{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed px-2">
            From investigative deep dives to breaking news coverage, I bring a diverse skill set 
            honed through years of delivering impactful journalism.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-12 sm:mb-16 lg:mb-20">
          {journalismSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-20px" }}
              whileHover={{ 
                y: -3,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 h-full border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-blue-200">
                {/* Icon with gradient background */}
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300 shadow`}>
                  <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {skill.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-3">
                  {skill.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-semibold text-blue-600 bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    {skill.stats}
                  </span>
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-xl"
        >
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black mb-2 sm:mb-3">
              Impact by the{' '}
              <span className="text-yellow-300">Numbers</span>
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm lg:text-base max-w-xl mx-auto">
              Quantifying the reach and influence of dedicated journalism
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex justify-center mb-1 sm:mb-2">
                      <div className="p-1 sm:p-1.5 bg-white/20 rounded">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 font-semibold text-[10px] sm:text-xs uppercase tracking-wide leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-6 sm:mt-8 lg:mt-10">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center space-x-1 sm:space-x-2 bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow"
            >
              <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>View My Work</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;