"use client";

import React, { useState } from "react";
import Header from "../../components/landing/Header";
import HeroSection from "../../components/landing/HeroSection";
import TrustFeatures from "../../components/landing/TrustFeatures";
import FeatureShowcase from "../../components/landing/FeatureShowcase";
import HowItWorks from "../../components/landing/HowItWorks";
import FAQSection from "../../components/landing/FAQSection";
import NewsletterSection from "../../components/landing/NewsletterSection";
import Footer from "../../components/landing/Footer";

export type DownloadFormat = "mp4" | "mp3";

export default function Home() {
  const [downloadFormat, setDownloadFormat] = useState<DownloadFormat>("mp4");

  return (
    <main className="w-full min-h-screen flex flex-col items-center overflow-x-hidden relative">
      <Header currentMode={downloadFormat} onModeChange={setDownloadFormat} />
      <HeroSection mode={downloadFormat} />
      <TrustFeatures />
      <FeatureShowcase />
      <HowItWorks />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}