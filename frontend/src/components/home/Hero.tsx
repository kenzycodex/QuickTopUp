import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Wifi,
  Zap,
  Monitor,
  Star,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  Play,
} from 'lucide-react';

const Button = ({ children, size, variant, className, ...props }) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const sizeClasses = size === 'lg' ? 'px-8 py-3 text-lg' : 'px-4 py-2 text-sm';
  const variantClasses =
    variant === 'outline'
      ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
      : 'bg-primary text-primary-foreground hover:bg-primary/90';

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center min-h-screen py-12 sm:py-16 lg:py-20">
          {/* Left Content */}
          <div
            className={`flex flex-col justify-center space-y-6 lg:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            {/* Trust Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-white/90 to-blue-100/90 backdrop-blur-md border border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-105">

                {/* Stars */}
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>

                {/* Text */}
                <span className="text-sm font-medium text-slate-800 tracking-tight">
                  Trusted by <span className="font-semibold text-blue-700">50,000+</span> users
                </span>

                {/* Shield Icon */}
                <Shield className="h-4 w-4 text-blue-600 group-hover:rotate-12 transition-transform" />
              </div>
            </div>


            {/* Main Heading */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                <span className="block mb-2">Instant</span>
                <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block animate-gradient mb-2">
                  Top-ups &
                </span>
                <span className="block">Bill Payments</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience the future of digital payments in Nigeria. Lightning-fast transactions,
                bulletproof security, and unmatched convenience - all in one powerful platform.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a href="/register" className="group w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="default"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-3">
                    Start Free Today
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </a>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold border-2 border-slate-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
              >
                <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 lg:pt-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.name}
                    className={`bg-gradient-to-br ${service.bgColor} p-3 sm:p-4 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group border border-white/50`}
                    style={{ animationDelay: service.delay }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className={`bg-gradient-to-br ${service.color} p-2.5 sm:p-3 rounded-xl group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                    </div>
                    <div className={`text-sm sm:text-base font-bold ${service.textColor}`}>
                      {service.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Hero Image & Service Cards */}
          <div
            className={`relative space-y-4 sm:space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            {/* Main Hero Image Container */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-3xl sm:rounded-t-[3rem] shadow-2xl bg-white">
                <div className="aspect-[6/5] sm:aspect-[4/4] lg:aspect-[6/5]">
                  <img
                    src="/home/hero-blue.png"
                    alt="African professional using mobile payment app"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating Payment Success Notification */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 truncate">
                        Payment Successful!
                      </div>
                      <div className="text-xs text-slate-600">₦2,000 airtime sent</div>
                    </div>
                  </div>
                </div>

                {/* Floating Transaction Speed Badge */}
                <div className="absolute top-4 right-4 bg-blue-500/90 backdrop-blur-sm rounded-xl p-2.5 shadow-lg animate-pulse">
                  <div className="flex items-center gap-1.5 text-white">
                    <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="text-sm font-semibold">&lt;2s</span>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Service Cards Below Image */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Airtime & Data Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-tr-[3rem] rounded-bl-[3rem] p-4 sm:p-5 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group cursor-pointer border border-emerald-100">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-xs font-medium text-emerald-700 mb-1">
                  Mobile Services
                </p>
                <div className="text-lg sm:text-xl font-bold text-slate-900">
                  Airtime<span className="text-emerald-600"> & Data</span>
                </div>
              </div>

              {/* Bills & Utilities Card */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-tl-[3rem] rounded-br-[3rem] p-4 sm:p-5 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group cursor-pointer border border-blue-100">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-xs font-medium text-blue-700 mb-1">Utility Bills</p>
                <div className="text-lg sm:text-xl font-bold text-slate-900">
                  Power<span className="text-blue-600"> & TV</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -left-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg animate-float">
              <Shield className="h-5 w-5 text-green-500" />
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg animate-float delay-1000">
              <CheckCircle className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
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