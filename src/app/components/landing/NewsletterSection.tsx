"use client";

import React from "react";
import { Button } from "@mui/material";

export default function NewsletterSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-2xl mx-auto text-center">
        
        <h2 className="text-2xl font-bold mb-2 tracking-tight text-[#2d2e32]">
          Get Our Newsletter
        </h2>
        <p className="text-[13px] text-gray-500 mb-8 font-medium">
          Recive lastest news, update every week.
        </p>

        <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto shadow-sm bg-white rounded-xl overflow-hidden border border-gray-100 p-1">
          <input
             className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-gray-700 text-sm placeholder-gray-400"
             placeholder="yout@gmail.com"
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: '#ff6b6b',
              color: 'white',
              borderRadius: '8px',
              px: 4,
              py: 1,
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '0.85rem',
              minWidth: '100px',
              boxShadow: '0 4px 10px 0 rgba(255, 107, 107, 0.3)',
              '&:hover': {
                bgcolor: '#ff5252',
                boxShadow: '0 4px 10px 0 rgba(255, 107, 107, 0.4)',
              }
            }}
          >
            Send Now
          </Button>
        </div>

      </div>
    </section>
  );
}
