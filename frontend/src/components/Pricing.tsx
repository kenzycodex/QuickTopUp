import React from 'react';
import { CheckCircle } from 'lucide-react';

type Props = {
  title: string;
  subTitle: string;
  description: string;
  features: string[];
  btnColor?: string;
  label?: string;
  border?: string;
};

const Pricing = ({
  title,
  subTitle,
  description,
  features,
  btnColor,
  label,
  border,
}: Props) => {
  return (
    <div
      className={`relative bg-white shadow-md hover:shadow-lg transition p-6 rounded-md flex flex-col mx-6 gap-5 w-full mt-6 lg:w-auto text-center ${border || "border"}`}>
      {/* 🔷 Top "Most Popular" Label */}
      {label && (
        <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-full shadow-md">
          {label}
        </span>
      )}

      <h2 className="text-black font-bold text-xl pt-2">{title}</h2>
      <h1 className="text-blue-600 text-3xl font-bold">{subTitle}</h1>
      <p className="text-slate-600">{description}</p>

      <div className="flex flex-col items-start gap-2 mt-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center md:flex"
          >
            <CheckCircle className="text-green-500 w-4 h-4" />
            <span className="pl-2 text-left">{item}</span>
          </div>
        ))}
      </div>

      <a href="/">
        <button
          className={`w-full py-2 rounded-md text-white mt-4 ${btnColor || "bg-black"}`}
        >
          Get Started
        </button>
      </a>
    </div>
  );
};

export default Pricing;
