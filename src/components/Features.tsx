import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Features = () => {
  const contentRef = useIntersectionObserver();
  const imageRef = useIntersectionObserver();

  return (
    <section id="features" className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Smart Features & Premium Design
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Minimal Design</h3>
                  <p className="text-muted-foreground">10-inch circular design in sleek matte black with an ambient light ring.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Easy Installation</h3>
                  <p className="text-muted-foreground">Mount on any wall or ceiling with included hardware or use the lightbulb socket adapter.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Smart Scanning</h3>
                  <p className="text-muted-foreground">Automatically adjusts to incoming noise patterns for optimal performance in any situation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Smart Home Integration</h3>
                  <p className="text-muted-foreground">Compatible with Alexa, Google Home, and other smart home systems for seamless control.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="relative opacity-0">
            <div className="w-full aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-black/5 rounded-full" style={{ transform: 'scale(1.2)' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/b3a03a33-aeee-4e80-9f55-79910c632c63.png" 
                    alt="Sonify Sound device" 
                    className="w-full h-full object-contain scale-90"
                    style={{
                      clipPath: 'circle(50% at center)'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-black">10"</div>
                <div className="text-sm text-muted-foreground">Diameter</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-black">8ft</div>
                <div className="text-sm text-muted-foreground">Effective Radius</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-black">8dB</div>
                <div className="text-sm text-muted-foreground">Noise Reduction</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-black">7.5lbs</div>
                <div className="text-sm text-muted-foreground">Weight</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
