 
// components/StatsSection.tsx

import React from "react";
import { ShieldCheck, Clock, Headset, Users, Star, Globe, ThumbsUp } from "lucide-react";


const features = [
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Lightning Fast",
    description: "Transactions completed in under 2 seconds with real-time processing",
    label: "< 2 seconds",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Bank-Level Security",
    description: "Your data and money are protected with enterprise-grade security",
    label: "256-bit SSL",
  },
  {
    icon: <Headset className="w-8 h-8 text-white" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help whenever you need us",
    label: "24/7 Available",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Why Choose Us Section */}
      <section className=" text-center p-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Why Choose QuickTopUp?</h2>
        <p className="text-gray-500 mb-10">Experience the fastest, most reliable payment platform in Nigeria</p>
        <div className="flex md:flex-col flex-row justify-center md:gap-64 max-w-4xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <div className="bg-blue-600 w-16 h-16 mx-auto rounded-xl flex items-center justify-center shadow-md mb-4">
                {feature.icon}
              </div>
              <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                {feature.label}
              </div>
              <div className="text-center">
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="flex flex-row space-x-2 inline text-sm text-gray-500 w-full text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
