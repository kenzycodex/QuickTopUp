import React from 'react';
import { LucideIcon } from 'lucide-react';
import {CheckCircle} from 'lucide-react';

type Props ={
    Icon:LucideIcon;
    title:string;
    description:string;
    features:string[];
    bgColor: string;
};
const DigitalPayment = ({Icon,title,description,features,bgColor}:Props) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-5 mx-6 text-start hover:shadow-lg transition">
            <Icon className={`w-10 h-10 p-2 rounded-xl ${bgColor} text-white`}/>
            <h2 className="font-bold text-xl text-slate-900">{title}</h2>
            <p className="text-md text-slate-600">{description}</p>

            <div className="flex flex-col items-start gap-2 mt-2">

           {features.map((item,index) =>(
               <div key={index} className="flex justify-center items-center md:flex">
                  <CheckCircle className="text-green-500 w-4 h-4"/> <span className="pl-2 text-md text-slate-500">{item}</span>
               </div>
           ))}
            </div>
        </div>
    )
}

export default DigitalPayment
