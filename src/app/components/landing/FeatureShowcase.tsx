"use client";

import React from "react";
import Image from "next/image";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function FeatureShowcase() {
  return (
    <section className="w-full py-24 px-4 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: Visual Card */}
        <div className="flex-1 relative w-full flex justify-center order-2 md:order-1">
          {/* Main Card */}
          <div className="bg-white w-full max-w-sm p-3 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10 transition-transform duration-500 hover:-translate-y-2">
            
            {/* Mock Thumbnail Content */}
            <div className="w-full aspect-video bg-gray-900 rounded-xl mb-3 overflow-hidden relative flex items-center justify-center">
              <PlayCircleOutlineIcon sx={{ color: 'white', fontSize: 64, opacity: 0.8 }} />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                10:04
              </div>
            </div>

            {/* Mock Header/Title area */}
            <div className="flex items-start gap-3 px-1 mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-500 to-red-800 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-sm text-gray-900 leading-tight mb-1">Building a YouTube Downloader App from Scratch</span>
                <span className="text-xs text-gray-500">mimoYT Channel</span>
                <span className="text-xs text-gray-500">1.2M views • 2 days ago</span>
              </div>
            </div>
            
          </div>
          
          {/* Background Decorative Emojis */}
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-xl z-20 border border-gray-100">
            🎬
          </div>
          <div className="absolute top-10 right-0 w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center text-sm z-0 border border-gray-100 hidden md:flex">
            👍
          </div>
        </div>

        {/* Right Side: Text Block */}
        <div className="flex-1 space-y-6 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d2e32] tracking-tight leading-tight">
            YouTube video & audio download
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0 font-medium">
            Extract high-quality MP4 videos or convert them to MP3 audio effortlessly. Experience lightning-fast downloads and the best quality available.
          </p>
          <div className="pt-2">
            <a 
              href="#"
              className="text-[#ff0000] font-bold text-sm hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
