
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';
import WhyChooseUs from '../components/whychooseus';
import Testimonial from '../components/Testimonial';
import { 
  Smartphone, 
  Wifi, 
  Zap, 
  Monitor, 
  Star,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GraduationCap,
  Shield,
} from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      Icon: Smartphone,
      title: "Airtime & Data",
      description: "Instant airtime and data bundle purchases for all networks",
      features: [
        "All Networks",
        "Instant delivery",
        "Best Rates"
      ],
      bgColor: "bg-blue-700",
    },
    {
      Icon: Zap,
      title: "Electric Bills",
      description: "Pay your bills from all major distribution companies.",
      features: [
        "All DISCOs",
        "Instant Payment",
        "Reciept Available"
      ],
      bgColor: "bg-yellow-500",
    },
    {
      Icon: Monitor,
      title: "Cable TV",
      description: "Subscribe to  DSTV, GOTV, Startimes and other cable services.",
      features: [
        "All Provider",
        "Auto-Renewal",
        "Quick Setup"
      ],
      bgColor: "bg-purple-700",
    },
    {
      Icon:Wifi,
      title: "Internet Bills",
      description: "Pay For your Internet subscriptions from major ISPs",
      features: [
        "Major ISPs",
        "Fast Processing",
        "Reliable Service"
      ],bgColor: "bg-blue-400",
    },
    {
      Icon: GraduationCap,
      title:"Education",
      description: "Pay for WEAC,JAMB,NECO and other educational services",
      features: [
        "All Boards",
        "Secure Payment",
        "Quick Processing"
      ],
      bgColor: "bg-green-500",
    },
    {
    Icon: Shield,
    title:"Secure & Fast",
    description:"Bank-level security with instant transaction processing",
    features:[
      "256-bit SSL",
      "PCL ComPliant",
      "Instant Processing"
    ],
    bgColor: "bg-red-500",
    },
  ];
  

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#features', label: 'Features' },
    { href: '#why-choose-us', label: 'Why Us' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" className="text-slate-700 hover:text-primary-600">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white px-6">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-slate-600 hover:text-primary-600 font-medium transition-colors px-3 py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-3 border-t border-slate-200">
                  <Link to="/login">
                    <Button variant="ghost" className="w-full justify-start">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="w-full bg-primary-500 hover:bg-primary-600">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 fill-current" />
                  Trusted by 50,000+ users
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Instant Top-ups & 
                  <span className="text-primary-500 block">Bill Payments</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Pay for airtime, data, electricity, cable TV, and more with lightning-fast transactions. 
                  Your one-stop platform for all digital payments in Nigeria.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg group">
                    Start Now - It's Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-slate-300">
                    Sign In
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">&lt;2s</div>
                  <div className="text-sm text-slate-600">Transaction Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative lg:animate-slide-up">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Quick Actions</h3>
                  <p className="text-slate-600">Choose a service to get started</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Link to="/register" className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl text-center hover:shadow-md transition-all cursor-pointer group">
                    <Smartphone className="h-6 w-6 text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-medium text-slate-900">Airtime</div>
                  </Link>
                  <Link to="/register" className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center hover:shadow-md transition-all cursor-pointer group">
                    <Wifi className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-medium text-slate-900">Data</div>
                  </Link>
                  <Link to="/register" className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl text-center hover:shadow-md transition-all cursor-pointer group">
                    <Zap className="h-6 w-6 text-yellow-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-medium text-slate-900">Electricity</div>
                  </Link>
                  <Link to="/register" className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center hover:shadow-md transition-all cursor-pointer group">
                    <Monitor className="h-6 w-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-medium text-slate-900">Cable TV</div>
                  </Link>
                </div>
                
                <Link to="/register">
                  <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                    Get Started Now
                  </Button>
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-3xl blur-3xl transform rotate-6 -z-10"></div>
            </div>
          </div>
        </div>
      </section>


    <WhyChooseUs />
    <Testimonial />
  


      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo variant="light" />
              <p className="text-slate-400">
                Nigeria's leading VTU platform for airtime, data, and bill payments. Fast, secure, and reliable.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a key={index} href="#" className="w-10 h-10 bg-slate-800 hover:bg-primary-500 rounded-lg flex items-center justify-center group transition-colors">
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <a href="#services" className="block hover:text-primary-400 transition-colors">Airtime & Data</a>
                <a href="#services" className="block hover:text-primary-400 transition-colors">Electricity Bills</a>
                <a href="#services" className="block hover:text-primary-400 transition-colors">Cable TV</a>
                <a href="#services" className="block hover:text-primary-400 transition-colors">Internet Bills</a>
                <a href="#services" className="block hover:text-primary-400 transition-colors">Education</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#why-choose-us" className="block hover:text-primary-400 transition-colors">About Us</a>
                <a href="#contact" className="block hover:text-primary-400 transition-colors">Contact</a>
                <Link to="/support" className="block hover:text-primary-400 transition-colors">Support</Link>
                <a href="#" className="block hover:text-primary-400 transition-colors">Careers</a>
                <a href="#" className="block hover:text-primary-400 transition-colors">Blog</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy" className="block hover:text-primary-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="block hover:text-primary-400 transition-colors">Terms of Service</Link>
                <a href="#" className="block hover:text-primary-400 transition-colors">Security</a>
                <a href="#" className="block hover:text-primary-400 transition-colors">Compliance</a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 QuickTopUp. All rights reserved. | Dveloped by TechCraft.co
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
