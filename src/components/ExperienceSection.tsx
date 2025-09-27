import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Calendar, ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      year: '2024 - Present',
      role: 'Senior Product Strategist',
      company: 'TechNova Solutions',
      description: 'Leading product strategy for emerging media technologies, driving innovation in digital storytelling platforms with focus on AI integration and user engagement.',
      achievements: [
        'Increased user retention by 350% through data-driven UX improvements',
        'Led cross-functional team of 12 developers and designers',
        'Launched 3 award-winning digital products'
      ],
      color: 'from-primary to-primary-glow',
    },
    {
      year: '2023 - 2024',
      role: 'Media Innovation Lead',
      company: 'Digital Futures Agency',
      description: 'Spearheaded digital transformation initiatives for traditional media companies, bridging the gap between legacy systems and modern user expectations.',
      achievements: [
        'Delivered 400% audience growth for flagship media client',
        'Implemented analytics framework used by 20+ media startups',
        'Spoke at 8 international media conferences'
      ],
      color: 'from-accent to-accent-glow',
    },
    {
      year: '2022 - 2023',
      role: 'Product Manager',
      company: 'MediaFirst Innovations',
      description: 'Managed end-to-end product development for content management platforms, focusing on scalability and user experience optimization.',
      achievements: [
        'Reduced content publishing time by 60%',
        'Grew platform user base from 10K to 150K',
        'Established product development best practices'
      ],
      color: 'from-primary-dark to-primary',
    },
    {
      year: '2021 - 2022',
      role: 'Digital Strategy Analyst',
      company: 'Growth Analytics Hub',
      description: 'Analyzed user behavior patterns and market trends to inform strategic decisions for media and technology companies.',
      achievements: [
        'Created analytics dashboards for 50+ clients',
        'Identified growth opportunities worth $2M+ in revenue',
        'Published 12 industry research reports'
      ],
      color: 'from-accent-glow to-primary-glow',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-accent font-medium mb-4 block">MY JOURNEY</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional{' '}
            <span className="gradient-text">Evolution</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            Each role has been a stepping stone, building expertise in the intersection 
            of media, technology, and human-centered design.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-dark lg:transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent lg:transform lg:-translate-x-1/2 z-10 shadow-lg"></div>

                {/* Content Card */}
                <div className="ml-12 lg:ml-0 lg:w-1/2 w-full">
                  <div className="glass-card p-6 lg:p-8 group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex items-center text-sm text-accent font-medium">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.year}
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    
                    <div className="text-accent font-semibold mb-4">{exp.company}</div>
                    
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground/90 mb-3 flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-foreground/70 flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16 scroll-reveal"
        >
          <div className="glass-card p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to create something{' '}
              <span className="gradient-text">amazing</span>?
            </h3>
            <p className="text-foreground/70 mb-8">
              Let's collaborate on your next big project and turn your vision into reality.
            </p>
            <Link to="/contact" className="hero-button">
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;