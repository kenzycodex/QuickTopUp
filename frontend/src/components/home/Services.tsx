import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Smartphone, 
  Wifi, 
  Zap, 
  Monitor, 
  GraduationCap,
  Shield,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Airtime & Data',
      description: 'Instant airtime and data bundle purchases for all networks',
      color: 'from-primary-500 to-primary-600',
      features: ['All Networks', 'Instant Delivery', 'Best Rates']
    },
    {
      icon: Zap,
      title: 'Electricity Bills',
      description: 'Pay your electricity bills from all major distribution companies',
      color: 'from-amber-500 to-orange-600',
      features: ['All DISCOs', 'Instant Payment', 'Receipt Available']
    },
    {
      icon: Monitor,
      title: 'Cable TV',
      description: 'Subscribe to DStv, GOtv, StarTimes and other cable services',
      color: 'from-purple-500 to-purple-600',
      features: ['All Providers', 'Auto-Renewal', 'Quick Setup']
    },
    {
      icon: Wifi,
      title: 'Internet Bills',
      description: 'Pay for your internet subscriptions from major ISPs',
      color: 'from-blue-500 to-blue-600',
      features: ['Major ISPs', 'Fast Processing', 'Reliable Service']
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Pay for WAEC, JAMB, NECO and other educational services',
      color: 'from-green-500 to-green-600',
      features: ['All Boards', 'Secure Payment', 'Quick Processing']
    },
    {
      icon: Shield,
      title: 'Secure & Fast',
      description: 'Bank-level security with instant transaction processing',
      color: 'from-red-500 to-red-600',
      features: ['256-bit SSL', 'PCI Compliant', 'Instant Processing']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            All Your Digital Payments in One Place
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From mobile top-ups to utility bills, we've got you covered with fast, 
            secure, and reliable payment solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;