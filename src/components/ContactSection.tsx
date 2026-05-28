/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [requirements, setRequirements] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      console.log('Inquiry submitted successfully:', {
        fullName,
        phoneNumber,
        requirements,
        timestamp: new Date().toISOString()
      });
    }, 850);
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setRequirements('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-dark-bg relative overflow-hidden">
      {/* Visual neon light bars */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-brand-orange/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute left-10 top-10 w-[300px] h-[300px] bg-amber-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-bold">READY TO FIT?</span>
                <span className="w-1.5 h-3 bg-brand-orange" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-black font-heading text-white uppercase tracking-tight">
                GET IN <span className="text-brand-orange">TOUCH</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Ready to upgrade your ride or discuss a bulk trade order? Visit our shop in Ramol or drop us a message. Our technical advisors respond seven days a week.
              </p>
            </div>

            {/* Structured Contact Details Grid */}
            <div className="space-y-8">
              
              {/* Location Card */}
              <div className="flex items-start space-x-5 group">
                <div className="p-3 bg-dark-card border border-white/10 group-hover:border-brand-orange/40 text-brand-orange rounded-sm transition-all duration-300">
                  <MapPin className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-gray-500 font-bold">LOCATION</h4>
                  <p className="text-white text-sm font-semibold uppercase tracking-wide mt-1">Patel Enterprise</p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-0.5">
                    Ramol, Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Call US Card */}
              <div className="flex items-start space-x-5 group">
                <div className="p-3 bg-dark-card border border-white/10 group-hover:border-brand-orange/40 text-brand-orange rounded-sm transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-gray-500 font-bold">CALL US</h4>
                  <p className="text-white text-sm font-semibold uppercase tracking-wide mt-1">Rushan Saiyed</p>
                  <a
                    href="tel:+917096155070"
                    className="text-brand-orange font-mono font-bold text-sm sm:text-base hover:underline block mt-0.5"
                  >
                    +91 70961 55070
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-start space-x-5 group">
                <div className="p-3 bg-dark-card border border-white/10 group-hover:border-green-500/40 text-green-400 rounded-sm transition-all duration-300">
                  {/* WhatsApp SVG path icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-gray-500 font-bold">WHATSAPP</h4>
                  <p className="text-white text-sm font-semibold uppercase tracking-wide mt-1">Instant Support Link</p>
                  <a
                    href="https://wa.me/917096155070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 text-xs sm:text-sm font-mono mt-0.5 block hover:underline"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Inquiry Submission Card Form */}
          <div className="lg:col-span-7">
            <div className="bg-dark-card border border-white/10 p-8 rounded-sm shadow-xl relative overflow-hidden">
              
              {/* Dynamic Overlay success message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-dark-card z-20 flex flex-col items-center justify-center text-center p-6 sm:p-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white uppercase tracking-tight">INQUIRY DISPATCHED</h3>
                    <p className="text-gray-400 text-sm mt-3 max-w-sm leading-relaxed">
                      Your specs were routed to our Ramol showroom desk! Rushan Saiyed will review catalog options and contact you soon.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-8 border border-brand-orange/20 hover:border-brand-orange text-brand-orange hover:text-white font-mono text-xs px-6 py-3 uppercase tracking-widest transition-all duration-300 rounded-sm"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white uppercase tracking-wide">
                  SEND AN INQUIRY
                </h3>
                <div className="h-[2px] w-12 bg-brand-orange mt-2" />
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-2.5 tracking-wider font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-orange rounded-sm px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#9CA3AF] mb-2.5 tracking-wider font-semibold">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-sm border-r border-white/10 pr-3">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        if (val.length <= 10) setPhoneNumber(val);
                      }}
                      placeholder="XXXXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-orange rounded-sm pl-16 pr-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-2.5 tracking-wider font-semibold">
                    Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Looking for LED headlights for..."
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-orange rounded-sm px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-xs tracking-widest py-4.5 uppercase rounded-sm border border-transparent transition-all duration-300 hover:scale-[1.01] flex items-center justify-center space-x-2 shadow-xl cursor-pointer"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-1.5" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Floating persistent green WhatsApp pill button in bottom right */}
      <a
        href="https://wa.me/917096155070?text=Hi%20Patel%20Enterprise%2C%20I%20visited%20your%20website%20and%20wanted%20to%20learn%20more%20about%20your%20automotive%20accessories%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-110 group animate-bounce"
        aria-label="Contact Patel Enterprise on WhatsApp"
      >
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black/90 text-[10px] font-mono tracking-wider font-semibold uppercase text-white px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 border border-green-500/20 transition-all duration-300 pointer-events-none">
          CHAT INSTANTLY
        </span>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      </a>
    </section>
  );
}
