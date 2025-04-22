
import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-white to-sonify-light-purple/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Smart Features & Easy Installation
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-sonify-purple text-white flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Elegant Design</h3>
                  <p className="text-muted-foreground">8-inch circular design with wood accent that weighs only 8 pounds and blends with any décor.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-sonify-purple text-white flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Easy Installation</h3>
                  <p className="text-muted-foreground">No special tools required. Mount directly to wall with included hardware or use the lightbulb socket option.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-sonify-purple text-white flex items-center justify-center mt-1">
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
                <div className="w-8 h-8 rounded-full bg-sonify-purple text-white flex items-center justify-center mt-1">
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
          
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-sonify-purple/10 rounded-full" style={{ transform: 'scale(1.2)' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-sonify-purple/20 to-white"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/5 h-3/5 rounded-full bg-white shadow-lg border-8 border-white overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#E2D1C3] to-[#FDFCFB] flex items-center justify-center">
                    <div className="w-2/3 h-2/3 rounded-full bg-gradient-to-br from-white to-sonify-purple/20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-sonify-purple">8"</div>
                <div className="text-sm text-muted-foreground">Diameter</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-sonify-purple">8ft</div>
                <div className="text-sm text-muted-foreground">Effective Radius</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-sonify-purple">8dB</div>
                <div className="text-sm text-muted-foreground">Noise Reduction</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-sonify-purple">8lbs</div>
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
