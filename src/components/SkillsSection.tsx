import { motion } from 'framer-motion';
import { 
  Users, 
  BarChart3, 
  Lightbulb, 
  Target, 
  Zap, 
  TrendingUp,
  Brain,
  Globe 
} from 'lucide-react';

const SkillsSection = () => {
  const superpowers = [
    {
      icon: Users,
      title: 'Audience Whisperer',
      description: 'I decode audience behavior patterns to create compelling user experiences',
      color: 'from-primary to-primary-glow',
    },
    {
      icon: BarChart3,
      title: 'Data Detective',
      description: 'Transform complex data into actionable insights that drive growth',
      color: 'from-accent to-accent-glow',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Catalyst',
      description: 'Bridge the gap between creative storytelling and scalable technology',
      color: 'from-primary-dark to-primary',
    },
    {
      icon: Target,
      title: 'Strategy Architect',
      description: 'Design comprehensive product strategies that align with business goals',
      color: 'from-accent-glow to-primary-glow',
    },
    {
      icon: Zap,
      title: 'Growth Hacker',
      description: 'Implement data-driven tactics that deliver exponential growth',
      color: 'from-primary to-accent',
    },
    {
      icon: TrendingUp,
      title: 'Media Innovator',
      description: 'Revolutionize traditional media with cutting-edge digital solutions',
      color: 'from-accent to-primary-dark',
    },
    {
      icon: Brain,
      title: 'UX Enthusiast',
      description: 'Craft intuitive user experiences that make complex information accessible',
      color: 'from-primary-glow to-accent-glow',
    },
    {
      icon: Globe,
      title: 'Digital Transformer',
      description: 'Lead digital transformation initiatives that modernize legacy systems',
      color: 'from-primary-dark to-accent',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-accent font-medium mb-4 block">✨ MY SUPERPOWERS</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I Bring to the{' '}
            <span className="gradient-text">Table</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            Each superpower represents years of hands-on experience turning challenges 
            into opportunities and ideas into impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {superpowers.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 scroll-reveal">
          <div className="glass-card p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-center mb-12">
              Impact by the <span className="gradient-text">Numbers</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">400%</div>
                <div className="text-foreground/70">Audience Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">50+</div>
                <div className="text-foreground/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">3M+</div>
                <div className="text-foreground/70">Users Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;