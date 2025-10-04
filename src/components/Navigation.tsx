import { useState, useEffect } from 'react';
import { Menu, X, FileText, User, Home, Mail, Award, ExternalLink } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 10);
      
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
    { name: 'Home', href: '/', icon: Home, external: false },
    { name: 'About', href: '/about', icon: User, external: false },
    { name: 'Portfolio', href: 'https://www.linkedin.com/in/asukwo-oduo/?originalSubdomain=ng', icon: FileText, external: true },
    { name: 'Contact', href: '/contact', icon: Mail, external: false },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ item, isActive, isScrolled, isMobile = false }) => {
    const Icon = item.icon;
    
    const baseClasses = `flex items-center space-x-2 rounded-lg transition-all duration-300 group relative font-semibold ${
      isMobile 
        ? 'px-4 py-3 text-base border-2'
        : 'px-3 lg:px-4 py-2 text-sm lg:text-base'
    }`;

    const activeClasses = isMobile
      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-transparent shadow-lg'
      : 'text-blue-700 bg-blue-50/90 border border-blue-200 shadow-sm';

    const inactiveClasses = isScrolled
      ? 'text-gray-800 hover:text-blue-700 hover:bg-gray-100/80 border border-transparent hover:border-gray-200'
      : 'text-white/95 hover:text-white hover:bg-white/15 border border-transparent hover:border-white/30';

    const linkContent = (
      <>
        <Icon className={`w-4 h-4 lg:w-5 lg:h-5 transition-all duration-300 ${
          isActive ? 'scale-110' : 'group-hover:scale-110'
        }`} />
        <span className="whitespace-nowrap">{item.name}</span>
        {item.external && (
          <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 opacity-70" />
        )}
        
        {/* Active indicator for desktop */}
        {!isMobile && isActive && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-500 rounded-full"></div>
        )}
      </>
    );

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
          onClick={isMobile ? closeMobileMenu : undefined}
        >
          {linkContent}
        </a>
      );
    }

    return (
      <Link
        to={item.href}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        onClick={isMobile ? closeMobileMenu : undefined}
      >
        {linkContent}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-gray-300/50 py-1'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 group flex-shrink-0"
          onClick={closeMobileMenu}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Award className="w-5 h-5 text-white" />
            </div>
            {/* Floating animation */}
            <div className="absolute -inset-1 bg-blue-500/30 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className={`font-black tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-gray-900 text-lg' : 'text-white text-xl'
            }`}>
              Asukwo Oduo
            </span>
            <span className={`transition-all duration-300 font-medium ${
              isScrolled ? 'text-gray-600 text-sm' : 'text-white/90 text-sm'
            }`}>
              Award-Winning Journalist
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || 
                            (item.href === '/' && location.pathname === '/') ||
                            activeSection === item.name.toLowerCase();
            
            return (
              <NavLink
                key={item.name}
                item={item}
                isActive={isActive}
                isScrolled={isScrolled}
              />
            );
          })}
          
          {/* CTA Button */}
          <Link 
            to="/contact" 
            className={`ml-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-2xl whitespace-nowrap ${
              isScrolled
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
                : 'bg-gradient-to-r from-white/20 to-cyan-500/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 hover:border-white/50'
            }`}
          >
            Let's Connect
          </Link>
        </div>

        {/* Tablet Navigation (simplified) */}
        <div className="hidden md:flex lg:hidden items-center space-x-1">
          {navItems.slice(0, 3).map((item) => {
            const isActive = location.pathname === item.href || 
                            (item.href === '/' && location.pathname === '/') ||
                            activeSection === item.name.toLowerCase();
            
            return (
              <NavLink
                key={item.name}
                item={item}
                isActive={isActive}
                isScrolled={isScrolled}
              />
            );
          })}
          
          <Link 
            to="/contact" 
            className="ml-1 px-4 py-2 rounded-lg font-bold text-white text-sm bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 shadow-lg transition-all duration-300"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
            isScrolled
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm'
              : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-4'
      }`}>
        <div className="bg-white/98 backdrop-blur-2xl border-b border-gray-300/50 mx-3 rounded-b-2xl shadow-2xl">
          <div className="flex flex-col p-3 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href ||
                              (item.href === '/' && location.pathname === '/');
              
              return (
                <NavLink
                  key={item.name}
                  item={item}
                  isActive={isActive}
                  isScrolled={true}
                  isMobile={true}
                />
              );
            })}
            
            {/* Mobile CTA Button */}
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className="mt-2 mx-1 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center rounded-xl font-bold text-lg shadow-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-white/20"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300/30">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 transition-all duration-150 shadow-lg"
          style={{
            width: `${scrollProgress}%`
          }}
        />
      </div>
    </nav>
  );
};

export default Navigation;