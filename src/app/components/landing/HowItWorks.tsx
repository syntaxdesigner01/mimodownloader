"use client";

import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LoginIcon from '@mui/icons-material/Login';
import DownloadIcon from '@mui/icons-material/Download';

const steps = [
  {
    title: "Copy",
    description: "Copy the YouTube video, short, or playlist link which you want to download.",
    icon: <ContentCopyIcon sx={{ fontSize: 24, color: 'white' }} />,
    color: "bg-[#ff0000]"
  },
  {
    title: "Paste",
    description: "Paste the YouTube link into the input box and wait a moment for it to process.",
    icon: <LoginIcon sx={{ fontSize: 24, color: 'white' }} />,
    color: "bg-[#2d2e32]"
  },
  {
    title: "Download",
    description: "Select your preferred format (MP3/MP4) and quality, then download will start.",
    icon: <DownloadIcon sx={{ fontSize: 24, color: 'white' }} />,
    color: "bg-[#ff0000]"
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16 px-4 bg-white mt-8 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2d2e32] mb-16 tracking-tight">
          How it works?
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 px-4 w-full">
          
          {/* Desktop Connecting dashed Line */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[0px] z-0 opacity-40 border-t-2 border-dashed border-gray-300 pointer-events-none" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1 relative z-10 w-full group">
              <div className={`w-14 h-14 mb-5 rounded-2xl ${step.color} shadow-lg flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-center text-[11px] max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
