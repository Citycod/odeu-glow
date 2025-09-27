import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'MediaFlow Platform',
      category: 'Product Strategy',
      description: 'Revolutionized content management for media companies with AI-powered workflows that increased publishing efficiency by 300%.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
      metrics: {
        users: '150K+',
        growth: '300%',
        rating: '4.9/5'
      },
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Audience Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Real-time analytics platform that helped media companies understand their audience better, leading to 400% growth.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'D3.js', 'Python', 'MongoDB'],
      metrics: {
        users: '50K+',
        growth: '400%',
        rating: '4.8/5'
      },
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Digital Transformation Suite',
      category: 'Enterprise Solution',
      description: 'Comprehensive digital transformation solution for traditional media companies transitioning to digital-first strategies.',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'Spring Boot', 'AWS', 'Docker'],
      metrics: {
        users: '25K+',
        growth: '250%',
        rating: '4.7/5'
      },
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Content Optimization Engine',
      category: 'AI/ML',
      description: 'Machine learning platform that optimizes content performance and predicts audience engagement patterns.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'React', 'Redis'],
      metrics: {
        users: '75K+',
        growth: '180%',
        rating: '4.6/5'
      },
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Product Strategy', 'Data Visualization', 'Enterprise Solution', 'AI/ML'];

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
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              My <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              A showcase of projects where I've transformed complex challenges into elegant, 
              scalable solutions that drive real business impact.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="skill-pill"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="text-accent w-6 h-6" />
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl font-bold text-foreground/20">{project.id}</div>
                </div>
                
                <div className="mb-4">
                  <span className="text-accent text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-glass rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-glass rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">{project.metrics.users}</div>
                    <div className="text-xs text-foreground/70">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">{project.metrics.growth}</div>
                    <div className="text-xs text-foreground/70">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">{project.metrics.rating}</div>
                    <div className="text-xs text-foreground/70">Rating</div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="flex-1 hero-button text-center">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    View Live
                  </a>
                  <a href={project.githubUrl} className="px-4 py-2 border border-glass-border rounded-lg hover:bg-glass transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8">All Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-foreground/20">{project.id}</div>
                </div>
                
                <div className="mb-3">
                  <span className="text-accent text-sm">{project.category}</span>
                  <h3 className="font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <a href={project.liveUrl} className="text-primary hover:text-primary-glow transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.githubUrl} className="text-foreground/70 hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  <span className="text-accent text-sm font-medium">{project.metrics.growth}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Have a project in mind?
            </h3>
            <p className="text-foreground/70 mb-8">
              Let's discuss how we can bring your vision to life with innovative solutions.
            </p>
            <Link to="/contact" className="hero-button inline-block">
              Start a Project
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;