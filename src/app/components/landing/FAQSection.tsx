"use client";

import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Is mimoYT Free to use?",
    answer: "Yes, It's a completely free YouTube downloader. You are not required to pay to download videos and audio from YouTube."
  },

  {
    question: "mimoYT supports which video/audio formats?",
    answer: "Our YouTube Video Downloader offers a different type of video quality such as 360p, 720p, 1080p, 2K, and up to 4k resolution, and audio quality like 64kbps, 128kbps, 192kbps, 256kbps, and 320kbps."
  },
  {
    question: "Is it safe to use mimoYT for downloading YouTube Videos?",
    answer: "It is safe and secure to download videos and audio files with mimoYT. If users download content, they should always take precautions and comply with copyright laws."
  },
 
  {
    question: "Does mimoYT support subtitles and captions for YouTube videos?",
    answer: "In some YouTube videos may include embedded subtitles so using mimoYT, you can only download videos and audio from YouTube without including subtitles."
  }
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="w-full py-24 px-4 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-[#ff0000] font-bold text-xs mb-6 uppercase tracking-wider">
          Support
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-center">
          Frequently asked questions
        </h2>
        
        <p className="text-gray-600 text-[15px] text-center mb-12 max-w-2xl leading-relaxed">
          <strong>mimoYT</strong> is the leading YouTube video downloader that allows you to quickly download audio and video from YouTube free of cost. Also, users can easily convert YouTube to MP4, and MP3 files in the highest quality. You can save YouTube videos in 1080p, 2K, 4K, and up to 8K quality.
        </p>

        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <Accordion 
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              disableGutters 
              elevation={0}
              sx={{
                bgcolor: 'white',
                border: expanded === index ? '1px solid rgba(255, 0, 0, 0.3)' : '1px solid #f3f4f6',
                borderRadius: '16px !important',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: expanded === index ? '0 10px 30px -10px rgba(255,0,0,0.1)' : '0 4px 6px -1px rgba(0,0,0,0.02)',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${expanded === index ? 'bg-[#ff0000] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <ExpandMoreIcon sx={{ fontSize: '1.2rem' }} />
                  </div>
                }
                sx={{ px: 3, py: 1.5 }}
              >
                <Typography sx={{ fontWeight: '600', color: expanded === index ? '#111827' : '#374151', fontSize: '1.05rem', transition: 'color 0.3s ease' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 4, pt: 0 }}>
                <Typography sx={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, pr: { sm: 4 } }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
