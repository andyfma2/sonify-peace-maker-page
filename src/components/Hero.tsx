
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-anthropic-slate-dark overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-90"
          src="/Website Vid.mov"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-anthropic-slate-dark/90 to-anthropic-slate-dark/70" />
      </div>
      
      <div className="relative container px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-anthropic-ivory-light mb-6">
            Silence Your <span className="text-anthropic-cloud-light">Noisy Neighbors</span> Once and For All
          </h1>
          <p className="text-xl md:text-2xl text-anthropic-cloud-medium max-w-2xl mx-auto mb-8">
            Sonify creates peace in your space by both blocking and masking noise through walls. Enjoy a quieter home or office without expensive renovations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-anthropic-kraft hover:bg-anthropic-book-cloth text-anthropic-ivory-light transition-colors px-8 py-6"
              onClick={() => document.getElementById('order-now')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Order Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-anthropic-cloud-dark text-anthropic-cloud-light hover:text-anthropic-ivory-light hover:bg-anthropic-cloud-dark/20 transition-colors px-8 py-6"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-anthropic-cloud-medium">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-anthropic-cloud-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="ml-2">Patent Pending Technology</span>
            </div>
            <div className="hidden sm:block text-anthropic-cloud-dark">|</div>
            <div>30-Day Money Back Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
