/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { productCategories } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedCategory }: QuoteModalProps) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [category, setCategory] = useState('');
  const [requirements, setRequirements] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFullName('');
      setPhoneNumber('');
      setCategory(preselectedCategory || '');
      
      if (preselectedCategory) {
        const catObj = productCategories.find(c => c.id === preselectedCategory);
        setRequirements(catObj ? `Hi Patel Enterprise, I am looking to upgrade my car with your "${catObj.title}" setup...` : '');
      } else {
        setRequirements('');
      }
    }
  }, [isOpen, preselectedCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;

    setLoading(true);
    // Simulate real database receipt before hookup
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      
      // Fire local event or console log for future hookup
      console.log('Quote Request Saved (Ready for Firebase Auth + Firestore Sync):', {
        fullName,
        phoneNumber,
        category,
        requirements,
        timestamp: new Date().toISOString()
      });
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="quote-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden bg-dark-card border border-white/10 rounded-sm shadow-2xl z-10"
          >
            {/* Accent Orange Top Line */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-orange to-amber-500" />

            <div className="p-6 md:p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-mono text-brand-orange uppercase tracking-wider font-semibold">GET A CUSTOM INSTANT QUOTE</span>
                    <h3 className="text-2xl font-bold font-heading text-white mt-1">START YOUR BUILD.</h3>
                    <p className="text-gray-400 text-sm mt-2">
                      Tell our workshop what custom setups you want to fit. We'll respond with package options.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-2 tracking-wide font-semibold">
                        Full Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-orange rounded-sm px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-2 tracking-wide font-semibold">
                        Phone Number <span className="text-brand-orange">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-mono text-sm border-r border-white/10 pr-3">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => {
                            // Only allow numbers, maximum 10 digits
                            const val = e.target.value.replace(/\D/g, '');
                            if (val.length <= 10) setPhoneNumber(val);
                          }}
                          placeholder="XXXXX XXXXX"
                          className="w-full bg-white/5 border border-white/10 focus:border-brand-orange rounded-sm pl-16 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-2 tracking-wide font-semibold">
                        Setup Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                          const matching = productCategories.find(c => c.id === e.target.value);
                          if (matching) {
                            setRequirements(`Hi Patel Enterprise, I am looking to upgrade my car with your "${matching.title}" setup...`);
                          }
                        }}
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-orange rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300"
                      >
                        <option value="" className="bg-[#0A0A0A]">General Inquiries / Custom Work</option>
                        {productCategories.map((cat) => (
                          <option key={cat.id} value={cat.id} className="bg-[#0A0A0A]">
                            {cat.title}
                          </option>
                        ))}
                        <option value="wholesale" className="bg-[#0A0A0A]">Bulk Wholesale program</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-2 tracking-wide font-semibold">
                        Your Car Model & Upgrades Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        placeholder="e.g. Creta 2024 - Looking for premium sound damping and matrix sequence headlights."
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-orange rounded-sm px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-bold text-sm tracking-widest py-4 uppercase rounded-sm transition-all duration-300 mt-2 flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>SEND INQUIRY WIRE</span>
                          <span className="text-black/70">•</span>
                          <Sparkles className="w-4 h-4 fill-current text-black" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">INQUIRY RECEIVED</h3>
                  <p className="text-gray-400 text-sm mt-3 px-2">
                    Thank you <strong className="text-white">{fullName}</strong>. Rushan Saiyed and our Ahmedabad workshop will contact you shortly on <strong className="text-white">+91 {phoneNumber}</strong> with options.
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/917096155070?text=Hi%20Patel%20Enterprise%2C%20I%20just%20submitted%20a%20quote%20request%20for%20a%20setup%21%20My%20name%20is%20${encodeURIComponent(fullName)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 border border-green-500/30 hover:border-green-500 bg-green-500/10 text-green-400 hover:text-white px-4 py-3 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-300"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                      </svg>
                      <span>Ping on WhatsApp</span>
                    </a>

                    <button
                      onClick={onClose}
                      className="flex-1 border border-white/20 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-4 py-3 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-300"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
