/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TheArsenal from './components/TheArsenal';
import WholesaleBanner from './components/WholesaleBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState<string | undefined>(undefined);

  const handleOpenQuote = (category?: string) => {
    setPreselectedCategory(category);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setPreselectedCategory(undefined);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col font-sans selection:bg-brand-orange selection:text-black">
      {/* Absolute top grid mesh texture overlay across entire app */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-grid-pattern z-50" />

      {/* Hero Global Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Core Elements */}
      <main id="main-content" className="flex-grow">
        
        {/* Above-the-fold Landing Hero */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Feature Specs Grid Section ("Built for the Driven") */}
        <Features />

        {/* Product Custom Showcase ("The Arsenal") */}
        <TheArsenal onOpenQuote={handleOpenQuote} />

        {/* B2B Wholesale Banner Program */}
        <WholesaleBanner onOpenQuote={handleOpenQuote} />

        {/* Contact Intake Form & GPS Section */}
        <ContactSection />

      </main>

      {/* Physical Footer */}
      <Footer />

      {/* Instant Dynamic Build Configurator Dialog */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedCategory={preselectedCategory}
      />
    </div>
  );
}
