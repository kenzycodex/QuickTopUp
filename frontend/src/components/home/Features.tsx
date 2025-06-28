import React from 'react';
import { Clock, Shield, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Transactions completed in under 2 seconds with real-time processing',
      stats: '< 2 seconds'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your data and money are protected with enterprise-grade security',
      stats: '256-bit SSL'
    },
    {
      icon: Star,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help whenever you need us',
      stats: '24/7 Available'
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose QuickTopUp?
          </h2>
          <p className="text-xl text-slate-600">
            Experience the fastest, most reliable payment platform in Nigeria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <div className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                {feature.stats}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;