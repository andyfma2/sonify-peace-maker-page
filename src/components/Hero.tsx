
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Hero = () => {
  const contentRef = useIntersectionObserver();
  const videoRef = useIntersectionObserver();
  const videoElementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (!videoElement) return;

    // Function to attempt playing the video
    const attemptPlay = () => {
      if (videoElement.paused) {
        console.log("Attempting to play hero video");
        // Setting muted attribute again programmatically (crucial for Safari)
        videoElement.muted = true;
        
        // Use low volume as backup if muted doesn't work
        videoElement.volume = 0.01;
        
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Hero video autoplay failed:", error);
          });
        }
      }
    };

    // Try multiple approaches to ensure video plays
    
    // 1. Initial attempt
    attemptPlay();
    
    // 2. Try again after a delay
    setTimeout(attemptPlay, 1000);
    
    // 3. Try on user interaction (fallback)
    const userInteractionEvents = ['click', 'touchstart', 'keydown', 'scroll'];
    
    const playOnUserInteraction = () => {
      attemptPlay();
      // Only need one successful interaction
      userInteractionEvents.forEach(event => {
        document.removeEventListener(event, playOnUserInteraction);
      });
    };
    
    userInteractionEvents.forEach(event => {
      document.addEventListener(event, playOnUserInteraction, { once: true });
    });
    
    // 4. Try when video becomes visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        attemptPlay();
      }
    }, { threshold: 0.1 });
    
    observer.observe(videoElement);
    
    return () => {
      userInteractionEvents.forEach(event => {
        document.removeEventListener(event, playOnUserInteraction);
      });
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-champagne-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={contentRef} className="flex flex-col space-y-6 opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Silence Your <span className="text-sonify-purple">Noisy Neighbors</span> Once and For All
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-prose">
              Sonify creates peace in your space by both blocking and masking noise through walls. Enjoy a quieter home or office without expensive renovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-sonify-purple hover:bg-sonify-accent-purple transition-colors px-8 py-6" onClick={() => document.getElementById('order-now')?.scrollIntoView({ behavior: 'smooth' })}>
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-sonify-purple text-sonify-purple hover:text-white hover:bg-sonify-purple transition-colors px-8 py-6" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                See How It Works
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-2">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-champagne-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="ml-2">Patent Pending Technology</span>
              </div>
              <div>|</div>
              <div>30-Day Money Back Guarantee</div>
            </div>
          </div>
          <div ref={videoRef} className="relative aspect-video w-full opacity-0">
            <video
              ref={videoElementRef}
              className="w-full h-full rounded-lg shadow-lg object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/lovable-uploads/164ec7e6-9781-413e-9eaf-873bfafc4af6.png"
            >
              <source src="/Attempt 4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
