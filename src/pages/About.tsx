import { motion } from 'framer-motion';
import { ArrowLeft, Target, PenTool, Users, TrendingUp, Award, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/uncle2.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Truth & Accuracy',
      description: 'Every story must be built on verified facts and thorough research. I believe in journalism that stands the test of scrutiny and time.'
    },
    {
      icon: PenTool,
      title: 'Compelling Storytelling',
      description: 'Great journalism isn\'t just about facts—it\'s about presenting them in ways that engage, inform, and inspire readers.'
    },
    {
      icon: Users,
      title: 'Audience First',
      description: 'Understanding reader needs and creating content that serves them is at the core of everything I produce.'
    },
    {
      icon: TrendingUp,
      title: 'Digital Innovation',
      description: 'Embracing new technologies and platforms to reach wider audiences while maintaining journalistic integrity.'
    }
  ];

  const journey = [
    {
      phase: 'The Foundation',
      description: 'Started with Agricultural Economics but discovered my true passion for storytelling and journalism. Learned to apply analytical thinking to narrative construction.'
    },
    {
      phase: 'Breaking Into Media',
      description: 'Began as a financial writer covering cryptocurrency, mastering the art of explaining complex topics to general audiences with clarity and precision.'
    },
    {
      phase: 'Rising Through the Ranks',
      description: 'Progressed from writer to senior positions, taking on editorial responsibilities and learning to mentor junior reporters while maintaining high standards.'
    },
    {
      phase: 'Editorial Leadership',
      description: 'Now leading editorial teams and shaping content strategy, combining years of writing experience with strategic vision to create impactful journalism.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years in Journalism', icon: Award },
    { number: '1000+', label: 'Articles Published', icon: FileText },
    { number: '3+', label: 'Awards & Recognition', icon: TrendingUp },
    { number: '5M+', label: 'Readers Reached', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-2 pb-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-7">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-8 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <PenTool className="w-3 h-3 text-white" />
              </div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                ABOUT ME
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              The Story Behind{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                the Stories
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Asukwo is a digital journalist who has flourished in entertainment, sports, and business reporting in many media firms before venturing into the world of editing and managing teams of writers to bring out the best in them.

With over 6 years of experience in writing and having worked with several content marketing firms like Pulse Nigeria, Battabox, and UK-based AMAKA Studio, he has the expertise to give you the sort of content that converts visitors and viewers on your site to lifelong customers.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                  >
                    <div className="text-2xl font-black text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/portfolio" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center shadow-lg hover:scale-105"
              >
                View My Work
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-center hover:scale-105"
              >
                Let's Connect
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xl">
              <img
                src={heroImage}
                alt="Oduo Junior - Journalist"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span className="font-bold text-sm">Award-Winning Journalist</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              My Journalism{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Principles
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core values guide every story I write and every editorial decision I make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Journey Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              My Career{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From curious writer to editorial leader—how dedication to the craft shaped my career.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200"></div>
            
            <div className="space-y-8">
              {journey.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 z-10 shadow-lg border-2 border-white transform -translate-x-1/2"></div>
                  
                  <div className="ml-12 flex-1">
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {phase.phase}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Touch */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl"
        >
          <h2 className="text-3xl lg:text-4xl font-black mb-6">
            Beyond the{' '}
            <span className="text-yellow-300">
              Newsroom
            </span>
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            When I'm not chasing stories or mentoring junior reporters, you'll find me exploring 
            Lagos's vibrant culture, staying updated on global tech trends, sports . I believe the best stories come from journalists 
            who are deeply connected to their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Let's Tell Stories Together
            </Link>
            <Link 
              to="/portfolio" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
              Read My Work
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;