/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Boxes, ShieldCheck, Tag } from 'lucide-react';
import { statsData, featuresData } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Wrench,
  Boxes,
  ShieldCheck,
  Tag
};

export default function Features() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-dark-bg relative overflow-hidden">
      {/* Background visual geometric lights */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-orange-700/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Stat summaries and descriptions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-[1px] bg-brand-orange" />
                <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">BUILD INTEGRITY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white uppercase tracking-tight leading-tight">
                BUILT FOR THE DRIVEN<span className="text-brand-orange">.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Operating directly out of Ramol, Ahmedabad, we bridge the gap between custom tuner craftsmanship and massive wholesale capacity. Whether you are seeking a complete concert-grade cabin sound staging or modular high-intensity projector lights, our workshop handles each upgrade with mathematical precision.
              </p>
            </div>

            {/* Key stats row */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {statsData.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-brand-orange pl-4 space-y-1">
                  <div className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 2x2 Bento Feature cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuresData.map((feat, index) => {
                const IconComponent = iconMap[feat.iconName] || Wrench;
                return (
                  <motion.div
                    key={feat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white/5 border border-white/10 p-8 rounded-sm hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Tiny neon top accent that lights up on hover */}
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-brand-orange group-hover:w-full transition-all duration-300" />
                    
                    <div>
                      {/* Icon Container with Orange Ring aligned with layout theme */}
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-orange/40 text-brand-orange bg-[#0A0A0A] group-hover:bg-[#121214] mb-6 transition-all duration-300">
                        <IconComponent className="w-4 h-4" />
                      </div>

                      <h3 className="text-lg font-bold font-heading text-white group-hover:text-brand-orange transition-colors duration-300 uppercase tracking-wide">
                        {feat.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-medium tracking-wide text-gray-500 group-hover:text-white transition-colors duration-300">
                      <span>INTEGRITY ASSURED</span>
                      <span className="text-brand-orange font-bold text-base bg-transparent px-2">_</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
