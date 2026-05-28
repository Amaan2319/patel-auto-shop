/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenQuote: (category?: string) => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', target: '#about' },
    { name: 'PRODUCTS', target: '#products' },
    { name: 'WHOLESALE', target: '#wholesale' },
    { name: 'CONTACT', target: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.querySelector(target);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        id="main-navigation"
        className={`fixed left-1/2 top-5 z-50 -translate-x-1/2 w-[min(96vw,1100px)] rounded-full border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.28)] transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/95 backdrop-blur-2xl py-3'
            : 'bg-dark-bg/75 backdrop-blur-xl py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group"
            >
              <span className="text-2xl font-black font-heading tracking-wider text-white">
                PATEL<span className="text-brand-orange">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.target}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className="text-xs font-semibold font-mono tracking-widest text-gray-400 hover:text-white transition-colors duration-200 relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Quote Action & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onOpenQuote()}
                className="hidden sm:inline-flex bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-xs tracking-widest px-6 py-3 uppercase rounded-sm border border-transparent transition-all duration-300 shadow-[0_4px_12px_rgba(255,140,0,0.15)] glow-on-hover hover:scale-[1.02]"
              >
                GET QUOTE
              </button>

              {/* Hamburger Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden text-gray-400 hover:text-white focus:outline-none p-2 rounded-sm bg-dark-card border border-white/10"
                aria-label="Toggle navigation menu"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-dark-card/95 border-b border-white/10 w-full overflow-hidden backdrop-blur-xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.target}
                    onClick={(e) => handleLinkClick(e, link.target)}
                    className="block text-xs font-bold font-mono tracking-widest text-gray-400 hover:text-white py-2 border-b border-white/10"
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-xs tracking-widest py-4 uppercase rounded-sm transition-all duration-300"
                >
                  <span>GET QUOTE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
