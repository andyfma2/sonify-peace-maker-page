import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const HowItWorks = () => {
  const headerRef = useIntersectionObserver();
  const cardsRef = useIntersectionObserver();
  const demoRef = useIntersectionObserver();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  // GitHub raw video URL (Lifestyle Video Short)
  const videoUrl = 'https://raw.githubusercontent.com/andyfma2/sonify-peace-maker-page/main/public/Lifestyle%20Video%20Short.mp4';

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
        console.error("Video error in HowItWorks");
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-dark">How Sonify Works</h2>
          <p className="text-lg text-slate-medium max-w-prose">
            Our innovative approach uses a dual-method technology to both block and mask unwanted noise.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-sonify-purple transition-colors duration-300 h-full bg-slate-dark text-white">
              <CardHeader className="pb-2">
                <div className="text-3xl font-bold text-sonify-purple mb-2">{step.number}</div>
                <CardTitle className="text-xl text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={demoRef} className="mt-16 bg-white rounded-xl shadow-md overflow-hidden opacity-0">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="w-full h-full relative rounded-lg overflow-hidden bg-gray-100" style={{ maxHeight: 320 }}>
                  {videoError ? (
                    <div className="flex items-center justify-center w-full h-full p-4">
                      <img 
                        src="/placeholder.svg" 
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
                      autoPlay
                      loop
                      poster="/placeholder.svg"
                      preload="auto"
                      src={videoUrl}
                      onError={() => setVideoError(true)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-slate-dark">Sound Reduction Performance</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm font-semibold text-slate-dark">Footsteps (Upstairs)</div>
                      <div className="text-sm font-semibold text-slate-dark">80%</div>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm font-semibold text-slate-dark">TV Noise (Adjacent)</div>
                      <div className="text-sm font-semibold text-slate-dark">70%</div>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm font-semibold text-slate-dark">Parties</div>
                      <div className="text-sm font-semibold text-slate-dark">65%</div>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-sm font-semibold text-slate-dark">Babies Crying</div>
                      <div className="text-sm font-semibold text-slate-dark">55%</div>
                    </div>
                    <Progress value={55} className="h-2" />
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
