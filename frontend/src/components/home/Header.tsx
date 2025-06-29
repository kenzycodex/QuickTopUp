import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll state for backdrop blur
      setIsScrolled(currentScrollY > 10);
      
      // Header visibility logic - but ALWAYS visible when menu is open
      if (isMenuOpen) {
        setHeaderVisible(true);
      } else {
        if (currentScrollY < 50) {
          // Always show header near top
          setHeaderVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Hide when scrolling down, but only if menu is closed
          setHeaderVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Show when scrolling up
          setHeaderVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
      
      // Close mobile menu on significant scroll
      if (isMenuOpen && Math.abs(currentScrollY - lastScrollY) > 30) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Enhanced smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const headerHeight = headerRef.current?.offsetHeight || 64;
          const elementPosition = element.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu after navigation
          setIsMenuOpen(false);
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          !event.target.closest('[data-mobile-menu-trigger]')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#features', label: 'Features' },
    { href: '#why-choose-us', label: 'Why Us' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    // Always show header when trying to open menu
    if (!isMenuOpen) {
      setHeaderVisible(true);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
          }
          ${headerVisible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" className="text-slate-700 hover:text-primary-600 transition-colors duration-200">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white px-6 transition-all duration-200 hover:shadow-md">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              data-mobile-menu-trigger
              onClick={toggleMenu}
              className="md:hidden relative z-[60] p-2 rounded-lg transition-all duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 transform ${
                    isMenuOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 transform ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}
        `}
      >
        {/* Backdrop */}
        <div 
          className={`
            absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Mobile Menu Panel */}
        <div 
          ref={mobileMenuRef}
          className={`
            absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg
            transform transition-all duration-300 ease-out
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
          `}
        >
          <nav className="px-4 py-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    block px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50 
                    font-medium transition-all duration-200 rounded-lg
                    transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
                  `}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Mobile Auth Buttons */}
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
              <Link to="/login" className="block">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-left hover:bg-slate-100 transition-colors duration-200"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/register" className="block">
                <Button className="w-full bg-primary-500 hover:bg-primary-600 transition-all duration-200 hover:shadow-md">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;