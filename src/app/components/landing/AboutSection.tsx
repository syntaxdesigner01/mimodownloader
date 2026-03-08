"use client";

import React from "react";
import { Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function AboutSection() {
  return (
    <section className="w-full py-16 px-4 bg-white mb-20">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-2xl font-bold text-[#2d2e32] mb-6 tracking-tight">
          About us
        </h2>
        <p className="text-[#8c8c8c] text-[13px] leading-relaxed mb-8 max-w-2xl mx-auto">
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne feriae quidem se repellere, idque instituit docere sic: omne animal, simul atque integra iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>
        
        <Button
          variant="contained"
          endIcon={<ArrowRightAltIcon />}
          sx={{
            bgcolor: '#8b5cf6',
            color: 'white',
            borderRadius: '8px',
            px: 4,
            py: 1,
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '0.85rem',
            boxShadow: '0 4px 10px 0 rgba(139, 92, 246, 0.3)',
            '&:hover': {
              bgcolor: '#7c3aed',
              boxShadow: '0 4px 10px 0 rgba(139, 92, 246, 0.4)',
            }
          }}
        >
          Learn more
        </Button>
        
      </div>
    </section>
  );
}
