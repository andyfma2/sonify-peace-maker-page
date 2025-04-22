
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const HowItWorks = () => {
  const headerRef = useIntersectionObserver();
  const cardsRef = useIntersectionObserver();
  const demoRef = useIntersectionObserver();
  const videoElementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (!videoElement) return;

    // Function to attempt playing the video
    const attemptPlay = () => {
      if (videoElement.paused) {
        console.log("Attempting to play HowItWorks video");
        // Setting muted attribute again programmatically (crucial for Safari)
        videoElement.muted = true;
        
        // Use low volume as backup if muted doesn't work
        videoElement.volume = 0.01;
        
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("HowItWorks video autoplay failed:", error);
          });
        }
      }
    };

    // Try multiple approaches to ensure video plays
    
    // 1. Initial attempt
    attemptPlay();
    
    // 2. Try again after a delay
    setTimeout(attemptPlay, 1000);
    
    // 3. Try when demo section becomes visible with a more robust approach
    const demoObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        attemptPlay();
        // Try multiple times after becoming visible
        setTimeout(attemptPlay, 500);
        setTimeout(attemptPlay, 1500);
      }
    }, { threshold: 0.1 });

    if (demoRef.current) {
      demoObserver.observe(demoRef.current);
    }
    
    // 4. Try on user interaction (fallback)
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
    
    return () => {
      userInteractionEvents.forEach(event => {
        document.removeEventListener(event, playOnUserInteraction);
      });
      if (demoRef.current) demoObserver.unobserve(demoRef.current);
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Detect',
      description: 'Smart sensors detect specific noise patterns coming through your walls or ceiling'
    },
    {
      number: '02',
      title: 'Block',
      description: 'Our device works directly with your wall or ceiling surface to reduce sound transfer'
    },
    {
      number: '03',
      title: 'Mask',
      description: 'It creates the perfect sound blend to mask any remaining noise'
    },
    {
      number: '04',
      title: 'Enjoy',
      description: 'The combined approach creates a significantly quieter space'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div ref={headerRef} className="flex flex-col items-center text-center space-y-4 mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Sonify Works</h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Our innovative approach uses a dual-method technology to both block and mask unwanted noise.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-sonify-purple transition-colors duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="text-3xl font-bold text-sonify-purple mb-2">{step.number}</div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={demoRef} className="mt-16 bg-white rounded-xl shadow-md overflow-hidden opacity-0">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <video
                  ref={videoElementRef}
                  className="w-full h-full rounded-lg shadow-lg object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/lovable-uploads/b3a03a33-aeee-4e80-9f55-79910c632c63.png"
                >
                  <source src="/Lifestyle Vid Sonify.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Sound Reduction Performance</h3>
                <div className="space-y-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm font-semibold">Footsteps (Upstairs)</div>
                      <div className="text-sm font-semibold">80%</div>
                    </div>
                    <div className="overflow-hidden h-2 bg-gray-200 rounded">
                      <div className="w-4/5 h-full bg-champagne-600 rounded"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm font-semibold">TV Noise (Adjacent)</div>
                      <div className="text-sm font-semibold">70%</div>
                    </div>
                    <div className="overflow-hidden h-2 bg-gray-200 rounded">
                      <div className="w-[70%] h-full bg-champagne-600 rounded"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm font-semibold">Parties</div>
                      <div className="text-sm font-semibold">65%</div>
                    </div>
                    <div className="overflow-hidden h-2 bg-gray-200 rounded">
                      <div className="w-[65%] h-full bg-champagne-600 rounded"></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm font-semibold">Babies Crying</div>
                      <div className="text-sm font-semibold">55%</div>
                    </div>
                    <div className="overflow-hidden h-2 bg-gray-200 rounded">
                      <div className="w-[55%] h-full bg-champagne-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
