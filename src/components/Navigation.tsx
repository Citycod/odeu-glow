import { useState, useEffect } from 'react';
import { Menu, X, FileText, User, Home, Mail, Award } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update scroll progress
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = (scrollTop / (docHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Portfolio', href: 'https://www.linkedin.com/in/asukwo-oduo/?originalSubdomain=ng', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 py-1 sm:py-2'
          : 'bg-transparent py-2 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link 
          to="/" 
          className="flex items-center space-x-1 sm:space-x-2 group flex-shrink-0"
          onClick={closeMobileMenu}
        >
          <div className="relative">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded flex items-center justify-center shadow-lg">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-gray-900 text-sm sm:text-base' : 'text-white text-base sm:text-lg'
            }`}>
              Asukwo Oduo
            </span>
            <span className={`text-[10px] sm:text-xs transition-all duration-300 hidden xs:block ${
              isScrolled ? 'text-gray-600' : 'text-white/80'
            }`}>
              Journalist
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-0 lg:space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href || 
                            (item.href === '/' && location.pathname === '/') ||
                            activeSection === item.name.toLowerCase();
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-2 lg:px-3 py-1 rounded-md transition-all duration-300 group relative ${
                  isActive
                    ? 'text-blue-600 bg-blue-50/80 shadow-sm'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/80'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`} />
                <span className="font-medium text-xs sm:text-sm whitespace-nowrap">{item.name}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                )}
              </Link>
            );
          })}
          
          {/* CTA Button */}
          <Link 
            to="/contact" 
            className={`ml-1 lg:ml-2 px-2 lg:px-4 py-1 rounded-md font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow whitespace-nowrap ${
              isScrolled
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600'
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
            }`}
          >
            Let's Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-1 rounded transition-all duration-300 ${
            isScrolled
              ? 'text-gray-700 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen 
          ? 'max-h-80 opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-2'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 mx-2 sm:mx-3 rounded-b-lg shadow-xl">
          <div className="flex flex-col p-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 group ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border border-blue-100'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${
                    isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500'
                  }`} />
                  <span className="font-medium text-sm">{item.name}</span>
                </Link>
              );
            })}
            
            {/* Mobile CTA Button */}
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className="mt-1 mx-1 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center rounded-md font-semibold text-sm shadow hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
          style={{
            width: `${scrollProgress}%`
          }}
        />
      </div>
    </nav>
  );
};

export default Navigation;