import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Wifi, 
  Zap, 
  Monitor, 
  GraduationCap,
  Shield,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: 'Airtime & Data',
      description: 'Instant airtime and data bundle purchases for all networks',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      features: ['All Networks', 'Instant Delivery', 'Best Rates'],
      popular: true
    },
    {
      icon: Zap,
      title: 'Electricity Bills',
      description: 'Pay your electricity bills from all major distribution companies',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      features: ['All DISCOs', 'Instant Payment', 'Receipt Available']
    },
    {
      icon: Monitor,
      title: 'Cable TV',
      description: 'Subscribe to DStv, GOtv, StarTimes and other cable services',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      features: ['All Providers', 'Auto-Renewal', 'Quick Setup']
    },
    {
      icon: Wifi,
      title: 'Internet Bills',
      description: 'Pay for your internet subscriptions from major ISPs',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      features: ['Major ISPs', 'Fast Processing', 'Reliable Service']
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Pay for WAEC, JAMB, NECO and other educational services',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      features: ['All Boards', 'Secure Payment', 'Quick Processing']
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Bank-level security with instant transaction processing',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      features: ['256-bit SSL', 'PCI Compliant', 'Instant Processing']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            All Your Digital Payments in 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> One Place</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From mobile top-ups to utility bills, experience fast, secure, and reliable payment solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative p-6">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
          </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;