
import React from "react";
import { Award, Users, Globe, TrendingUp } from "lucide-react";







const stats = [
  { label: "Active Users", value: "50K+" },
  { label: "Transactions", value: "1M+" },
  { label: "Success Rate", value: "99.9%" },
  { label: "User Rating", value: "4.8★" },
];

const perks = [
  { icon: <Users className="w-5 h-5 text-blue-600" />, text: "Trusted by thousands of satisfied customers" },
  { icon: <TrendingUp className="w-5 h-5 text-blue-600" />, text: "Consistently growing platform with proven results" },
  { icon: <Award className="w-5 h-5 text-blue-600" />, text: "Award-winning customer service and support" },
  { icon: <Globe className="w-5 h-5 text-blue-600" />, text: "Available nationwide with local support" },
];






const Testimonial: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Stats and Testimonial Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Stats and Perks */}
          <div>
            <h3 className="text-3xl font-bold mb-2 sm:text-4xl font-bold text-slate-900 mb-4">Trusted by Thousands of Nigerians</h3>
            <p className="text-gray-500 mb-6 max-w-md">
              We’ve built the most reliable and user-friendly platform for digital payments in Nigeria.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10 ">
              {stats.map((stat, i) => (
                <div key={i} className="grid grid-cols-1 text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-800 flex justify-center items-center gap-1">{stat.value}</p>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="bg-blue-100 flex items-center justify-center w-12 h-12  items-center rounded-xl">{perk.icon}</div>
                  <p className="text-slate-700">{perk.text}</p>
                </li>
              ))}
            </ul>
        </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-600 text-white p-6 sm:p-8 rounded-3xl shadow-lg">
            <h4 className="font-semibold text-20px mb-4">What Our Users Say</h4>
            <div className="bg-blue-500 p-4 rounded-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                  AO
                </div>
                <div>
                  <p className="text-sm font-medium">Adebayo Olamide</p>
                  <p className="text-xs">Lagos, Nigeria</p>
                </div>
              </div>
              <p className="text-sm mb-2">"QuickTopUp has made paying my bills so much easier. The platform is fast, reliable, and the customer service is excellent!"</p>
              <p className="text-yellow-300 text-sm">★★★★★</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
