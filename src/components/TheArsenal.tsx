/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ArrowUpRight, Sparkles, SlidersHorizontal, Layers, Check } from 'lucide-react';
import { productCategories } from '../data';
import { ProductCategory } from '../types';

interface TheArsenalProps {
  onOpenQuote: (category?: string) => void;
}

export default function TheArsenal({ onOpenQuote }: TheArsenalProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  return (
    <section id="products" className="py-24 sm:py-32 bg-dark-bg relative border-t border-b border-white/10">
      {/* Visual top subtle glow line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/45 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono tracking-widest text-[#FF8C00] uppercase font-bold">TUNER EXPERTISE</span>
              <span className="w-1 h-3 bg-brand-orange" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight uppercase leading-tight">
              THE <span className="text-brand-orange">ARSENAL</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl font-sans font-normal tracking-wide">
              Everything your car needs to stand out, sound better, and drive safer. Built under rigid inspection.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="self-start md:self-auto inline-flex items-center space-x-3 text-xs tracking-widest font-bold font-mono border border-white/20 hover:border-brand-orange text-gray-300 hover:text-white px-6 py-4 transition-all duration-300 uppercase shrink-0"
          >
            <span>VIEW FULL CATALOG</span>
            <span className="text-brand-orange">→</span>
          </button>
        </div>

        {/* 6 Grid Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[380px] bg-dark-card border border-white/10 overflow-hidden rounded-sm flex flex-col justify-end p-6 cursor-pointer"
              onClick={() => setSelectedCategory(cat)}
            >
              {/* Background Image with Hover Scale */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/55 z-10 transition-all duration-300" />
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none brightness-75 group-hover:brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Top hover indicator */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange p-2 rounded-sm text-xs flex items-center space-x-1.5 font-mono">
                <span>PLUG INTEGRITY</span>
                <Eye className="w-3 h-3" />
              </div>

              {/* Text content elements */}
              <div className="relative z-20 space-y-2">
                <div className="text-[10px] font-mono text-brand-orange tracking-widest uppercase font-bold">
                  {cat.id.replace('-', ' ')}
                </div>
                <h3 className="text-2xl font-extrabold font-heading text-white tracking-wide uppercase">
                  {cat.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 leading-relaxed max-w-sm">
                  {cat.description}
                </p>

                {/* Arrow trigger effect */}
                <div className="pt-2 flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-[#FF8C00] group-hover:text-white transition-colors duration-200">
                  <span>DISCOVER SPECS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Specs Drawer Modal */}
        <AnimatePresence>
          {selectedCategory && (
            <div id="specs-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCategory(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-dark-card border border-white/10 rounded-sm max-w-lg w-full overflow-hidden shadow-2xl z-10"
              >
                {/* Brand glowing line */}
                <div className="h-[3px] w-full bg-brand-orange" />

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Category Card Preview */}
                  <div className="relative h-44 rounded-sm overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-black/40 to-transparent z-10" />
                    <img
                      src={selectedCategory.imageUrl}
                      alt={selectedCategory.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="text-[9px] font-mono tracking-widest text-brand-orange uppercase font-bold">ARSENAL RIG</span>
                      <h4 className="text-xl font-extrabold text-white font-heading tracking-wide uppercase">{selectedCategory.title}</h4>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold">PREMIUM CAPABILITIES</p>
                    <p className="text-gray-300 text-sm leading-relaxed font-sans font-normal">
                      {selectedCategory.subtitle} Our workshop specializes in installing these high-fidelity setups using clean harness loops without splicing any factory cables.
                    </p>
                  </div>

                  {/* Bullet Spec Lines */}
                  {selectedCategory.features && (
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-mono tracking-wider text-gray-500 block uppercase font-semibold">FEATURES INCLUDED IN BUILD:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedCategory.features.map((feat, index) => (
                          <div key={index} className="flex items-start space-x-2 bg-white/5 border border-white/10 px-3 py-2.5 rounded-sm">
                            <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-300 font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        const catId = selectedCategory.id;
                        setSelectedCategory(null);
                        onOpenQuote(catId);
                      }}
                      className="flex-1 bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-xs tracking-widest py-4 uppercase rounded-sm transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>CONFIGURE THIS BUILD</span>
                      <Sparkles className="w-3.5 h-3.5 text-black" />
                    </button>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="border border-white/20 hover:bg-white/5 text-gray-400 hover:text-white font-mono text-xs py-4 px-6 rounded-sm uppercase tracking-wider transition-all duration-300"
                    >
                      Close Specs
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
