import React from 'react';
import { Users, TrendingUp, Award, Globe, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: Users, text: 'Trusted by thousands of satisfied customers' },
    { icon: TrendingUp, text: 'Consistently growing platform with proven results' },
    { icon: Award, text: 'Award-winning customer service and support' },
    { icon: Globe, text: 'Available nationwide with local support' }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Trusted by Thousands of Nigerians
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We've built the most reliable and user-friendly platform for digital payments in Nigeria.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
                <div className="text-slate-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1M+</div>
                <div className="text-slate-600">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-slate-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
                <div className="text-slate-600">User Rating</div>
              </div>
            </div>

            <div className="space-y-4">
              {reasons.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What Our Users Say</h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">AO</span>
                    </div>
                    <div>
                      <div className="font-semibold">Adebayo Olamide</div>
                      <div className="text-primary-200 text-sm">Lagos, Nigeria</div>
                    </div>
                  </div>
                  <p className="text-primary-100">
                    "QuickTopUp has made paying my bills so much easier. The platform is fast, reliable, and the customer service is excellent!"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;