import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const contentRef = useIntersectionObserver();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  // GitHub raw video URL
  const videoUrl = 'https://raw.githubusercontent.com/andyfma2/sonify-peace-maker-page/main/public/Sonify%20Intro%20Video%20.mp4';

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleCanPlay = () => {
        try {
          videoElement.play().catch(err => {
            console.log("Auto-play prevented:", err);
          });
        } catch (err) {
          console.error("Video play error:", err);
        }
      };

      const handleError = () => {
        console.error("Video error in Hero");
        setVideoError(true);
      };

      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('error', handleError);
      
      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-champagne-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div ref={contentRef} className="flex flex-col space-y-6 opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Silence Your <span className="text-[#a18567]">Noisy Neighbors</span> Once and For All
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-prose">
              Sonify creates peace in your space by both blocking and masking noise through walls. Enjoy a quieter home or office without expensive renovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-[#a18567] hover:bg-[#8a7359] transition-colors px-8 py-6" 
                onClick={() => document.getElementById('order-now')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#a18567] text-[#a18567] hover:text-white hover:bg-[#a18567] transition-colors px-8 py-6" 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-2">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#a18567]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="ml-2">Patent Pending Technology</span>
              </div>
              <div>|</div>
              <div>30-Day Money Back Guarantee</div>
            </div>
          </div>
          {/* Right: Video */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-md rounded-lg shadow-lg overflow-hidden">
              <AspectRatio ratio={16/9} className="bg-gray-100">
                {videoError ? (
                  <div className="flex flex-col items-center justify-center w-full h-full p-4">
                    <img 
                      src="/placeholder.svg" 
                      alt="Sonify product demonstration"
                      className="w-full h-full object-cover rounded-lg" 
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-gray-100">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      autoPlay
                      loop
                      poster="/placeholder.svg"
                      preload="auto"
                      src={videoUrl}
                      onError={() => setVideoError(true)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
