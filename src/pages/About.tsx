import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Coffee, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/oduo-junior-hero.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Human-Centered Design',
      description: 'Every solution starts with understanding real human needs and creating experiences that genuinely improve lives.'
    },
    {
      icon: Target,
      title: 'Impact-Driven Results',
      description: 'I measure success not just by metrics, but by the meaningful change we create for users and businesses.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation with Purpose',
      description: 'Technology should solve real problems. I bridge the gap between cutting-edge possibilities and practical solutions.'
    },
    {
      icon: Coffee,
      title: 'Collaborative Excellence',
      description: 'The best products come from diverse teams working together. I believe in lifting everyone up while we build.'
    }
  ];

  const journey = [
    {
      phase: 'The Curious Beginning',
      description: 'Started as a law student who realized I preferred creating solutions over arguing cases. My first taste of product thinking came from organizing student events and seeing how small changes could dramatically improve experiences.'
    },
    {
      phase: 'The Data Discovery',
      description: 'Dove deep into analytics and user research, discovering my superpower: translating complex data into human stories that drive decision-making. This is where I learned that numbers tell stories, but context gives them meaning.'
    },
    {
      phase: 'The Media Revolution',
      description: 'Joined the media industry during its digital transformation. Helped traditional publishers adapt to digital-first strategies, growing audiences by 400% through obsessive attention to user behavior and engagement patterns.'
    },
    {
      phase: 'The Product Evolution',
      description: 'Transitioned into full product strategy, combining my media expertise with technical product development. Now I help companies build solutions that are both innovative and deeply user-centered.'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300 mb-8"
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              The Story Behind the{' '}
              <span className="gradient-text">Strategy</span>
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              I'm Oduo Junior, a product strategist who believes that the best solutions 
              come from understanding both the human story and the technical possibilities. 
              My journey from law student to product leader has been anything but linear—and 
              that's exactly what makes it powerful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="hero-button text-center">
                View My Work
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-lg font-semibold border border-glass-border hover:bg-glass transition-all duration-300 text-center">
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
            <div className="glass-card p-8">
              <img
                src={heroImage}
                alt="Oduo Junior"
                className="w-full h-auto rounded-lg"
              />
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Drives <span className="gradient-text">Me</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              These core values shape every decision I make and every solution I create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              From law student to product strategist—how unexpected turns led to meaningful impact.
            </p>
          </motion.div>

          <div className="space-y-8">
            {journey.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-bold mb-3 gradient-text">
                      {phase.phase}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Personal Touch */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-8 lg:p-12 text-center"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Beyond the <span className="gradient-text">Professional</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            When I'm not strategizing product roadmaps, you'll find me exploring Lagos's vibrant 
            tech scene, mentoring aspiring product managers, or experimenting with new ways to 
            make technology more accessible to everyone. I believe the best products come from 
            leaders who understand life beyond the screen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="hero-button">
              Let's Build Something Together
            </Link>
            <Link to="/portfolio" className="px-8 py-4 rounded-lg font-semibold border border-glass-border hover:bg-glass transition-all duration-300">
              See My Impact
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;