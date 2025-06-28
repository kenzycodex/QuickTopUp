import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  Wifi,
  Zap,
  Monitor,
  Star,
  ArrowRight,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Play,
} from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Animated counter for stats
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '50,000+', label: 'Happy Users', icon: Users },
    { value: '99.9%', label: 'Success Rate', icon: CheckCircle },
    { value: '<2s', label: 'Lightning Fast', icon: Clock },
  ];

  const services = [
    {
      name: 'Airtime',
      icon: Smartphone,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-100',
      textColor: 'text-emerald-600',
      delay: '0ms',
    },
    {
      name: 'Data',
      icon: Wifi,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-100',
      textColor: 'text-blue-600',
      delay: '100ms',
    },
    {
      name: 'Electricity',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-100',
      textColor: 'text-yellow-600',
      delay: '200ms',
    },
    {
      name: 'Cable TV',
      icon: Monitor,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-100',
      textColor: 'text-purple-600',
      delay: '300ms',
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold">Trusted by 50,000+ users</span>
              <Shield className="h-4 w-4 text-primary-600 group-hover:rotate-12 transition-transform" />
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                <span className="block">Instant</span>
                <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block animate-gradient">
                  Top-ups &
                </span>
                <span className="block">Bill Payments</span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                Experience the future of digital payments in Nigeria. Lightning-fast transactions,
                bulletproof security, and unmatched convenience - all in one powerful platform.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/register" className="group">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Start Free Today
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="px-10 py-6 text-lg font-semibold border-2 border-slate-300 rounded-2xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 group"
              >
                <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`text-center transform transition-all duration-500 ${
                      currentStat === index ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon
                        className={`h-6 w-6 mr-2 ${
                          currentStat === index ? 'text-primary-600' : 'text-slate-400'
                        } transition-colors duration-300`}
                      />
                      <div
                        className={`text-3xl lg:text-4xl font-bold ${
                          currentStat === index ? 'text-primary-600' : 'text-slate-900'
                        } transition-colors duration-300`}
                      >
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Hero Image & Service Cards */}
          <div
            className={`relative space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Main Hero Image Container */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] shadow-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="African professional using mobile payment app"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />

                {/* Floating Payment Success Notification */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Payment Successful!
                      </div>
                      <div className="text-xs text-slate-600">₦2,000 airtime sent</div>
                    </div>
                  </div>
                </div>

                {/* Floating Transaction Speed Badge */}
                <div className="absolute top-6 right-6 bg-primary-500/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-pulse">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-semibold">&lt;2s</span>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-400/30 to-blue-600/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Service Cards Below Image */}
            <div className="grid grid-cols-2 gap-6">
              {/* Airtime & Data Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 rounded-tl-[2rem] rounded-br-[2rem] text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-sm font-medium text-emerald-700 mb-1">Mobile Services</p>
                <div className="text-2xl font-bold text-slate-900">
                  Airtime<span className="text-emerald-600"> & Data</span>
                </div>
              </div>

              {/* Bills & Utilities Card */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-tr-[2rem] rounded-bl-[2rem] text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-sm font-medium text-blue-700 mb-1">Utility Bills</p>
                <div className="text-2xl font-bold text-slate-900">
                  Power<span className="text-blue-600"> & TV</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons Row */}
            <div className="grid grid-cols-4 gap-3 pt-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.name}
                    to="/register"
                    className={`bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:scale-110 border border-slate-100`}
                    style={{ animationDelay: service.delay }}
                  >
                    <div
                      className={`bg-gradient-to-br ${service.color} p-2 rounded-lg mx-auto mb-2 w-fit group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-xs font-medium text-slate-700">{service.name}</div>
                  </Link>
                );
              })}
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -left-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-float">
              <Shield className="h-6 w-6 text-green-500" />
            </div>
            <div className="absolute bottom-1/4 -right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-float delay-1000">
              <Users className="h-6 w-6 text-primary-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
