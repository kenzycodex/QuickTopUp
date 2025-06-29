import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Features from '@/components/home/Features';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Pricing from '@/components/home/Pricing';
import Newsletter from '@/components/home/Newsletter';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import { Menu, X } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          // Account for fixed header height
          const headerHeight = 64; // 16 * 4 = 64px (h-16)
          const elementPosition = (element as HTMLElement).offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
        setIsMenuOpen(false);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      {/* Add proper spacing for fixed header */}
      <div className="pt-12 sm:pt-6">
        <Hero />
        <Services />
        <Features />
        <WhyChooseUs />
        <Pricing />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;