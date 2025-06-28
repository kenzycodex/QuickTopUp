import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  return (
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
            © 2024 QuickTopUp. All rights reserved. | Made with ❤️ in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;