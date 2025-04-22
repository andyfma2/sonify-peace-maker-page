
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-anthropic-slate-dark px-4 py-8">
      {/* Top text section */}
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tighter">
          <span className="text-anthropic-ivory-light">Silence Your </span>
          <span className="text-anthropic-manilla">Noisy Neighbors</span>{' '}
          <span className="text-anthropic-ivory-light">Once and For All</span>
        </h1>
      </div>

      {/* Video section */}
      <div className="relative w-full max-w-6xl mx-auto mb-8">
        <video
          className="w-full h-full object-cover rounded-lg"
          src="/720pWebsite Vid Ratios Fixed.mov"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Bottom text section */}
      <div className="container mx-auto text-center">
        <p className="text-xl md:text-2xl text-anthropic-cloud-light max-w-5xl mx-auto mb-8">
          Sonify creates peace in your space by both blocking and masking noise through walls. 
          Enjoy a quieter home or office without expensive renovations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            className="bg-anthropic-book-cloth hover:bg-anthropic-kraft text-white transition-colors px-8 py-6 text-lg"
            onClick={() => document.getElementById('order-now')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Order Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-anthropic-cloud-light text-anthropic-cloud-light hover:text-white hover:bg-anthropic-cloud-light/20 transition-colors px-8 py-6 text-lg"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How It Works
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base text-anthropic-cloud-light">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-anthropic-manilla" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="ml-2">Patent Pending Technology</span>
          </div>
          <div className="hidden sm:block text-anthropic-cloud-light">|</div>
          <div className="text-anthropic-cloud-light">30-Day Money Back Guarantee</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
