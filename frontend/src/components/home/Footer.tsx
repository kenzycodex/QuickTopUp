import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 relative text-slate-200 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            <div>
              <Logo variant="light" />
              <p className="text-slate-400 text-sm leading-relaxed mt-4">
                Nigeria's leading VTU platform for airtime, data, and bill payments. Fast, secure, and reliable service you can trust.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-slate-400">+234 800 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-400">support@quicktopup.ng</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map(({ Icon, href, label }, index) => (
                <a 
                  key={index} 
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center group transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Icon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg relative">
              Services
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <div className="space-y-3">
              {[
                "Airtime & Data",
                "Electricity Bills", 
                "Cable TV",
                "Internet Bills",
                "Education Payments"
              ].map((service, index) => (
                <a 
                  key={index}
                  href="#services" 
                  className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg relative">
              Company
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <div className="space-y-3">
              {[
                { text: "About Us", href: "#why-choose-us" },
                { text: "Contact", href: "#contact" },
                { text: "Support", href: "/support", isLink: true },
                { text: "Careers", href: "#" },
                { text: "Blog", href: "#" }
              ].map((item, index) => (
                item.isLink ? (
                  <Link 
                    key={index}
                    to={item.href}
                    className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <a 
                    key={index}
                    href={item.href}
                    className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                  >
                    {item.text}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg relative">
              Legal
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <div className="space-y-3">
              {[
                { text: "Privacy Policy", href: "/privacy", isLink: true },
                { text: "Terms of Service", href: "/terms", isLink: true },
                { text: "Security", href: "#" },
                { text: "Compliance", href: "#" },
                { text: "Cookie Policy", href: "#" }
              ].map((item, index) => (
                item.isLink ? (
                  <Link 
                    key={index}
                    to={item.href}
                    className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <a 
                    key={index}
                    href={item.href}
                    className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                  >
                    {item.text}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 lg:mt-16 p-6 lg:p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="lg:max-w-md">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-slate-400 text-sm">Get the latest updates on new features and exclusive offers.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/80 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
            <p className="text-slate-400 text-sm">
              © 2025 QuickTopUp. All rights reserved.
            </p>
            <div className="flex items-center justify-center sm:justify-end gap-2 text-sm">
              <span className="text-slate-400">Made with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span className="text-slate-400">by TechCraft.co</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;