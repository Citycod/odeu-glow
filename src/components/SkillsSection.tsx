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
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                JOURNALISM EXPERTISE
              </span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            My Reporting{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From investigative deep dives to breaking news coverage, I bring a diverse skill set 
            honed through years of delivering impactful journalism that informs and engages.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl p-6 h-full border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {skill.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {skill.stats}
                  </span>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black mb-4">
              Impact by the{' '}
              <span className="text-yellow-300">Numbers</span>
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Quantifying the reach and influence of dedicated journalism
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 font-semibold text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FileText className="w-5 h-5" />
              <span>View My Work</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;