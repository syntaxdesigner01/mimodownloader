"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

interface HeroSectionProps {
  mode?: "mp4" | "mp3";
}

export default function HeroSection({ mode = "mp4" }: HeroSectionProps) {
  return (
    <section className="relative w-full pt-20 pb-16 px-4 overflow-hidden min-h-[70vh] flex flex-col items-center justify-center">
      {/* Background soft mesh gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[400px] bg-[#fff0f5] rounded-[100%] blur-3xl opacity-80" />
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#f0f5ff] rounded-[100%] blur-3xl opacity-80" />
      </div>

      {/* Floating 3D emojis */}
      <motion.div className="absolute top-32 left-1/4 text-4xl drop-shadow-lg" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>🎵</motion.div>
      <motion.div className="absolute top-48 right-1/4 text-4xl drop-shadow-md" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>▶️</motion.div>
      <motion.div className="absolute bottom-20 left-1/3 text-4xl drop-shadow-lg" animate={{ y: [0, -20, 0], rotate: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>🎧</motion.div>
      <motion.div className="absolute bottom-32 right-1/3 text-4xl drop-shadow-xl" animate={{ y: [0, 15, 0], rotate: [10, -10, 10] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>📹</motion.div>

      <div className="relative max-w-3xl mx-auto text-center z-10 w-full">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-[#2d2e32] tracking-tight leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Paste YouTube URL here! <span className="inline-block">😻</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-600 mb-10 max-w-xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Paste the URL of the YouTube video, <br />Short, or playlist you want to download {mode === "mp4" ? "as MP4" : "and convert to MP3"}.
        </motion.p>

        <motion.div 
          className="max-w-2xl mx-auto bg-white p-2 rounded-2xl mb-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center w-full">
             <div className="pl-4 text-gray-300">
               <LinkIcon fontSize="small" />
             </div>
             <input
                className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-gray-700 placeholder-gray-300"
                placeholder="Paste link here!"
             />
             <Button
                variant="contained"
                sx={{
                  bgcolor: '#ff0000',
                  color: 'white',
                  borderRadius: '12px',
                  minWidth: '130px',
                  padding: '12px 24px',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  boxShadow: 'none',
                  '&:hover': {
                    bgcolor: '#cc0000',
                    boxShadow: 'none',
                  }
                }}
              >
                Download {mode.toUpperCase()}
              </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-sm text-gray-400 font-medium flex items-center justify-center gap-1 cursor-pointer hover:text-gray-500">
            More Options <span className="text-xs">∨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
