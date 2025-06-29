import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Shield, 
  Users, 
  CheckCircle, 
  Smartphone,
  CreditCard,
  HeadphonesIcon,
  Zap,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="features" className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Feature - Hero Style */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="h-4 w-4" />
                  Fast & Simple
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Quick Top-ups, 
                  <span className="text-blue-600"> Zero Stress</span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Buy airtime, data, and pay bills in just a few taps. No long queues, no network issues, no hassle.
                </p>

                {/* Simple Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-xl border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">Fast</div>
                    <div className="text-sm text-slate-600">Quick Processing</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-blue-100">
                    <div className="text-2xl font-bold text-green-600">Safe</div>
                    <div className="text-sm text-slate-600">Secure Payments</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Works with all major networks in Nigeria</span>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 max-w-sm mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Smartphone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Quick Airtime</div>
                      <div className="text-sm text-slate-600">All Networks</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm font-medium">MTN</span>
                      <span className="text-sm text-green-600">Available</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm font-medium">Airtel</span>
                      <span className="text-sm text-green-600">Available</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm font-medium">Glo</span>
                      <span className="text-sm text-green-600">Available</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg text-sm font-medium">
                    Buy Now
                  </button>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium animate-bounce">
                  ✓ Instant
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Horizontal Layout */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Why Choose Our Platform?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're focused on making VTU services simple, reliable, and affordable for everyone
            </p>
          </div>

          {/* Features Row */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Quick Processing</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most transactions complete within minutes. No more waiting around for your airtime or data.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Safe & Secure</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your payment information is protected with standard security measures we all trust.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HeadphonesIcon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">We're Here to Help</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Got questions? Need help? Reach out to us and we'll sort you out quickly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;