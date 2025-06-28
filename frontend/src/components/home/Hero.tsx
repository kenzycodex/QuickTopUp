import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Wifi, 
  Zap, 
  Monitor, 
  Star,
  ArrowRight
} from 'lucide-react';

const Hero = () => {
  return (
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
  );
};

export default Hero;