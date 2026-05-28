/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowDown, Play } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (category?: string) => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const scrollNextSection = () => {
    const nextElem = document.querySelector('#about');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070709]"
    >
      {/* Background Dimmed Image with custom rich filters */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/70 via-[#070709]/85 to-dark-bg z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1920"
          alt="Premium luxury car at night"
          className="w-full h-full object-cover scale-105 animate-pulse-slow opacity-40 select-none pointer-events-none"
        />
      </div>

      {/* Decorative vertical running light accents */}
      <div className="absolute left-10 bottom-24 hidden xl:block z-20">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-gray-600 text-[10px] font-mono tracking-widest uppercase rotate-90 origin-left translate-x-3 mb-10">AHMEDABAD IND</span>
          <div className="w-1 h-12 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-full h-4 bg-brand-orange rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-32 text-center">
        {/* Animated tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border border-brand-orange px-3 py-1 mb-6"
        >
          <span className="text-brand-orange text-[10px] font-bold tracking-[0.3em] uppercase">
            AHMEDABAD'S PREMIER AUTO SETUP
          </span>
        </motion.div>

        {/* Huge aggressive heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-7xl md:text-[80px] leading-[0.85] font-black italic tracking-tighter uppercase mb-6 sm:px-8"
        >
          PRECISION <br className="hidden sm:block" />
          <span className="text-brand-orange relative inline-block">
            PERFORMANCE
          </span> <br className="hidden sm:block" />
          PERFECTION.
        </motion.h1>

        {/* Supportive descriptive block */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-lg mt-8 font-sans leading-relaxed tracking-wide"
        >
          Uncompromising custom automotive styling, premium audio integration, and signature led conversions. 
          Engineered for owners who demand the absolute best.
        </motion.p>

        {/* CTA Button Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href="#products"
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-sm tracking-widest px-8 py-5 uppercase rounded-sm border border-transparent transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>EXPLORE PRODUCTS</span>
            <ChevronRight className="w-4 h-4 fill-current" />
          </a>

          <a
            href="#wholesale"
            className="w-full sm:w-auto border border-white/20 bg-white/5 backdrop-blur-sm text-white font-heading font-bold text-sm tracking-widest px-8 py-5 uppercase rounded-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>TRADE INQUIRIES</span>
            <span className="text-brand-orange font-bold">»</span>
          </a>
        </motion.div>
      </div>

      {/* Bounce-Down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center">
        <motion.button
          onClick={scrollNextSection}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-500 hover:text-white flex flex-col items-center space-y-2 transition-colors focus:outline-none"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">PULL DOWN FOR DETAILS</span>
          <ArrowDown className="w-4 h-4 text-brand-orange" />
        </motion.button>
      </div>
    </section>
  );
}
