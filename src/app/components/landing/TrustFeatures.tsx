"use client";

import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const features = [
  {
    icon: <FavoriteIcon sx={{ fontSize: 32, color: '#f59e0b' }} />,
    title: "Easy Peasy",
    description: "See how you stack up against comparable companies in similar stages.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32, color: '#9ca3af' }} />,
    title: "Supper Fast",
    description: "Benchmark the health of your monetization and pricing strategy.",
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 32, color: '#f59e0b' }} />,
    title: "well Secure",
    description: "Audit where revenue leakage exists and where you can increase retention.",
  }
];

export default function TrustFeatures() {
  return (
    <section className="w-full py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-400 font-medium mb-12">Use it its Easy, Fast and Secure</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-700 to-black shadow-xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm max-w-[220px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
