"use client";

import React from "react";
import Link from "next/link";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

interface HeaderProps {
  currentMode?: "mp4" | "mp3";
  onModeChange?: (mode: "mp4" | "mp3") => void;
}

export default function Header({ currentMode = "mp4", onModeChange }: HeaderProps) {
  return (
    <header className="w-full relative z-50 pt-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group decoration-transparent">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff0000] to-[#cc0000] shadow-lg shadow-red-500/30 transform group-hover:scale-105 transition-all duration-300">
              <PlayArrowRoundedIcon sx={{ color: 'white', fontSize: '28px' }} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-gray-900 group-hover:text-[#ff0000] transition-colors duration-300">
              mimo<span className="text-[#ff0000] group-hover:text-gray-900 transition-colors duration-300">YT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center cursor-pointer">
            <div 
              onClick={() => onModeChange && onModeChange("mp4")}
              className={`${currentMode === "mp4" ? "text-gray-900 border-b-2 border-[#ff0000] font-bold" : "text-gray-500 hover:text-[#ff0000] font-medium"} pb-1 transition-colors`}
            >
              YouTube To MP4
            </div>
            <div 
              onClick={() => onModeChange && onModeChange("mp3")}
              className={`${currentMode === "mp3" ? "text-gray-900 border-b-2 border-[#ff0000] font-bold" : "text-gray-500 hover:text-[#ff0000] font-medium"} pb-1 transition-colors`}
            >
              YouTube To MP3
            </div>
            {/* <Link href="#" className="text-gray-500 hover:text-brand-purple font-medium transition-colors">
              Chrome Extention
            </Link>
            <Link href="#" className="text-gray-500 hover:text-brand-purple font-medium transition-colors">
              About
            </Link>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#8b5cf6',
                borderRadius: '8px',
                px: 3,
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#7c3aed', boxShadow: 'none' },
              }}
            >
              Learn more
            </Button> */}
          </nav>

          {/* Mobile menu button (placeholder) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-brand-purple focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
