/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Percent, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

interface WholesaleBannerProps {
  onOpenQuote: (category?: string) => void;
}

export default function WholesaleBanner({ onOpenQuote }: WholesaleBannerProps) {
  return (
    <section id="wholesale" className="py-24 sm:py-32 bg-dark-bg relative overflow-hidden">
      {/* Background container highlighting industrial wholesale warehouses */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/95 to-dark-bg/75 z-10" />
        <div className="absolute inset-3 z-0 border border-white/5 pointer-events-none" />
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600"
          alt="Modern automotive distribution warehouse"
          className="w-full h-full object-cover opacity-20 filter grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-dark-card border border-white/10 p-8 md:p-16 rounded-sm max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
          {/* Top subtle orange highlight bar */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-orange" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Wholesale description info */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center space-x-2 border border-brand-orange bg-[#FF8C00]/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.3em] font-mono text-brand-orange uppercase">
                <Briefcase className="w-3.5 h-3.5 mr-1" />
                <span>B2B & TRADE PARTNERS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight uppercase leading-tight">
                WHOLESALE <br className="hidden sm:block" />
                DISTRIBUTOR
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Running a garage, dealership, or accessory shop? We supply trade buyers across Gujarat with bulk orders at unbeatable wholesale pricing. Get priority support, vast stock availability, and reliable fulfillment.
              </p>

              {/* Grid bullet features with Orange Checkmark styling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 text-sm font-sans font-medium text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0" />
                  <span>Dedicated B2B Pricing Tiers</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-sans font-medium text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0" />
                  <span>Priority Support & WhatsApp Logistics</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-sans font-medium text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0" />
                  <span>Verified Importer Genuine Product Warranty</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-sans font-medium text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8C00] shrink-0" />
                  <span>Rapid dispatch across Gujarat & Neighboring States</span>
                </div>
              </div>

            </div>

            {/* CTA action cards block - grid column 4 */}
            <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-10 h-full flex flex-col justify-center">
              <div className="space-y-6 bg-transparent">
                <div>
                  <span className="text-gray-500 text-[10px] font-mono uppercase block tracking-wider">ANNUAL TRADE CAPACITY</span>
                  <p className="text-3xl font-extrabold font-heading text-white mt-1">GUJARAT-WIDE</p>
                </div>

                <button
                  onClick={() => onOpenQuote('wholesale')}
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-xs tracking-widest py-5 uppercase rounded-sm border border-transparent transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>INQUIRE B2B VALUE</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                <p className="text-gray-500 text-[11px] font-mono leading-relaxed text-center lg:text-left">
                  * Must provide valid shop name or GST parameters for trade rates activation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
