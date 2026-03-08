"use client";

import React from "react";
import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Footer() {
  return (
    <footer className="w-full bg-white/40 text-white ">
      <div className="max-w-7xl mx-auto py-4">
       

        {/* Bottom Section */}
        <div className="mt-8 flex  justify-center items-center">
          <div className="flex flex-col gap-8 md:gap-10">
           
            <p className="text-[#a1a1aa] text-[14px]">
              &copy; {new Date().getFullYear()}, mimoYT. All rights reserved.
            </p>
          </div>

       
        </div>
      </div>
    </footer>
  );
}
