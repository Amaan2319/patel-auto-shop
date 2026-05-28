/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Mail, ShieldCheck, FileText } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="footer" className="bg-dark-bg border-t border-white/10 relative pt-16 pb-12 overflow-hidden">
      
      {/* Decorative linear trace matching high-end car bumper lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand/Summary column - spans 5 */}
          <div className="md:col-span-5 space-y-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTop();
              }}
              className="inline-block text-2xl font-black font-heading tracking-widest text-white"
            >
              PATEL<span className="text-brand-orange">.</span>
            </a>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Ahmedabad's premier destination for high-end car accessories, custom lighting, and premium audio setups. Engineering unparalleled aesthetic presence since 2018. Delivering across retail and wholesale trade tiers.
            </p>
          </div>

          {/* Quick links column - spans 3 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase font-semibold">QUICK LINKS</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTop();
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleLinkClick(e, '#products')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#wholesale"
                  onClick={(e) => handleLinkClick(e, '#wholesale')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Wholesale Program
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column - spans 4 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase font-semibold">CONTACT</h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="space-y-0.5">
                <p className="text-white font-semibold uppercase tracking-wide">Rushan Saiyed</p>
                <a
                  href="tel:+917096155070"
                  className="text-brand-orange font-mono font-bold hover:underline"
                >
                  +91 70961 55070
                </a>
              </div>
              <p className="leading-relaxed leading-normal">
                Ramol, Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line with sub links */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <p>© 2026 Patel Enterprise. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5 text-brand-orange" />
              <span>Privacy Policy</span>
            </span>
            <span className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
              <span>Terms of Service</span>
            </span>

            {/* Float back to top */}
            <button
              onClick={handleScrollTop}
              className="p-2 bg-dark-card border border-white/10 hover:border-brand-orange hover:text-white transition-all text-gray-400 rounded-sm"
              aria-label="Scroll back top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
