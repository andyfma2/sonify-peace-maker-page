
import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const HowItWorks = () => {
  const headerRef = useIntersectionObserver();
  const cardsRef = useIntersectionObserver();
  const demoRef = useIntersectionObserver();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Use a placeholder image instead of trying to load the video that's failing
  const placeholderImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6";

  useEffect(() => {
    // We'll use a simpler approach focusing on fallback
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleCanPlay = () => {
        setVideoLoaded(true);
        try {
          videoElement.play().catch(err => {
            console.log("Auto-play prevented:", err);
            // Auto-play might be prevented by browser policy
          });
        } catch (err) {
          console.error("Video play error:", err);
        }
      };
      
      const handleError = () => {
        console.error("Video failed to load in HowItWorks");
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
                <div className="w-full h-full relative rounded-lg overflow-hidden bg-gray-100" style={{ maxHeight: 320 }}>
                  {videoError || !videoRef.current ? (
                    <div className="flex items-center justify-center w-full h-full p-4">
                      <img 
                        src={placeholderImage}
                        alt="Sonify performance demonstration"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ) : (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      loop
                      poster={placeholderImage}
                      preload="metadata"
                      onError={() => setVideoError(true)}
                    >
                      <source src="/Lifestyle%20Video%20Short.mp4" type="video/mp4" />
                      <source src="Lifestyle%20Video%20Short.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
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
