import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Award, Globe, Star, ChevronLeft, ChevronRight, CheckCircle, Shield, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const reasons = [
    { icon: Shield, text: 'Bank-grade security with 256-bit encryption', color: 'from-emerald-500 to-teal-500' },
    { icon: Zap, text: 'Lightning-fast transactions in under 30 seconds', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, text: 'Award-winning 24/7 customer support', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, text: 'Nationwide coverage with local expertise', color: 'from-orange-500 to-red-500' },
  ];

  const testimonials = [
    {
      name: 'Adebayo Olamide',
      location: 'Lagos, Nigeria',
      avatar: 'AO',
      text: 'QuickTopUp transformed how I handle my finances. Lightning-fast transactions and incredible security give me peace of mind.',
      rating: 5,
      role: 'Business Owner'
    },
    {
      name: 'Chioma Nwosu',
      location: 'Abuja, Nigeria',
      avatar: 'CN',
      text: 'The seamless bill payment experience is unmatched. I save hours every month with their automated features.',
      rating: 5,
      role: 'Software Engineer'
    },
    {
      name: 'Ibrahim Yakubu',
      location: 'Kano, Nigeria',
      avatar: 'IY',
      text: 'Customer service is phenomenal. They resolved my issue in minutes, not hours. Truly impressive platform.',
      rating: 5,
      role: 'Entrepreneur'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              Trusted Platform
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Thousands</span> Choose QuickTopUp
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Join Nigeria's most trusted fintech platform. Experience seamless digital transactions with enterprise-grade security and lightning-fast processing.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Active Users', value: '50K+', icon: Users },
                { label: 'Transactions', value: '1M+', icon: TrendingUp },
                { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
                { label: 'User Rating', value: '4.8★', icon: Star },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`group relative p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <stat.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Enhanced Reasons */}
            <div className="space-y-2">
              {reasons.map((item, index) => (
                <div 
                  key={index} 
                  className={`group flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 ${isVisible ? 'animate-fade-in-left' : ''}`}
                  style={{ animationDelay: `${(index + 4) * 200}ms` }}
                >
                  <div className={`relative w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-slate-700 font-medium text-base group-hover:text-slate-900 transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Modern Testimonial Slider */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-0.5 animate-gradient-xy">
                <div className="h-full w-full bg-white rounded-3xl" />
              </div>
              
              {/* Main Testimonial Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Customer Stories</h3>
                    <div className="flex gap-2">
                      <button 
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4 text-slate-600" />
                      </button>
                      <button 
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 text-slate-600" />
                      </button>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative h-64 overflow-hidden">
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-all duration-500 ${
                          index === currentTestimonial 
                            ? 'opacity-100 translate-x-0' 
                            : index < currentTestimonial 
                              ? 'opacity-0 -translate-x-full' 
                              : 'opacity-0 translate-x-full'
                        }`}
                      >
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">{testimonial.name}</div>
                              <div className="text-slate-500 text-sm">{testimonial.role}</div>
                              <div className="text-slate-400 text-xs">{testimonial.location}</div>
                            </div>
                          </div>
                          
                          <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <div className="text-xs text-slate-400">Verified Review</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Indicators */}
                  <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTestimonial 
                            ? 'bg-blue-600 w-6' 
                            : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;