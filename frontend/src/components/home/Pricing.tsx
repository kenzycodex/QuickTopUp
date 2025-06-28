import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Airtime & Data purchases',
        'Basic bill payments',
        'Standard support',
        'Transaction history',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '₦500/month',
      description: 'Best for regular users',
      features: [
        'All Basic features',
        'Priority processing',
        'Advanced analytics',
        'API access',
        'Priority support',
        'Bulk transactions',
        'Custom notifications'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: 'Custom',
      description: 'For businesses and enterprises',
      features: [
        'All Premium features',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Advanced reporting',
        'Multi-user management'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600">
            No hidden fees. Pay only for what you use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all ${plan.popular ? 'scale-105 border-2 border-primary-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{plan.price}</div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/register">
                  <Button className={`w-full ${plan.popular ? 'bg-primary-500 hover:bg-primary-600' : 'bg-slate-900 hover:bg-slate-800'}`}>
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;