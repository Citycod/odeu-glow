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
  CheckCircle,
  ArrowRight
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
    { number: '1000+', label: 'Articles Published', icon: FileText },
    { number: '3+', label: 'Awards Won', icon: Award },
    { number: '5M+', label: 'Readers Reached', icon: Users }
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-full shadow-lg">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-widest">
                JOURNALISM EXPERTISE
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            My Reporting{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            From compelling deep dives to breaking news and leading editorial teams, I bring a diverse skill set 
            honed through years of delivering impactful journalism.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {journalismSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 h-full border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-blue-300 group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:to-cyan-50/50">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg`}>
                  <skill.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-3 lg:mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                  {skill.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4 lg:mb-6 font-medium">
                  {skill.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className="text-sm lg:text-base font-bold text-blue-700 bg-blue-100 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-blue-200">
                    {skill.stats}
                  </span>
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center mb-8 lg:mb-12 relative z-10">
            <h3 className="text-2xl lg:text-4xl xl:text-5xl font-black mb-4 lg:mb-6">
              Impact by the{' '}
              <span className="text-yellow-300 drop-shadow-lg">Numbers</span>
            </h3>
            <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto font-medium">
              Quantifying the reach and influence of dedicated journalism
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border-2 border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105">
                    <div className="flex justify-center mb-3 lg:mb-4">
                      <div className="p-3 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-all duration-300">
                        <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-2 lg:mb-3">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 font-bold text-sm lg:text-base uppercase tracking-wider leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 lg:mt-12 relative z-10">
            <Link 
              to="/portfolio" 
              className="group inline-flex items-center space-x-3 bg-white text-blue-600 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-black text-lg lg:text-xl hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-blue-200"
            >
              <FileText className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>Explore My Portfolio</span>
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;