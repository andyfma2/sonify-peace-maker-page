
import React from 'react';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Detect',
      description: 'Smart sensors detect specific noise patterns coming through your wall'
    },
    {
      number: '02',
      title: 'Block',
      description: 'Our device works directly with your wall to reduce sound transfer'
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
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Sonify Works</h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Our innovative approach uses a dual-method technology to both block and mask unwanted noise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="flex justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="10 8 16 12 10 16 10 8" />
                      </svg>
                    </div>
                    <p>Product demo video</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">See the Difference</h3>
                <p className="text-gray-600 mb-6">
                  Sonify reduces noise by approximately 8 decibels for common disturbing sounds and improves perceived quietness by around 50%. The device is effective within a typical radius of 3-4 feet, and multiple units can be linked for larger spaces.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-sonify-purple"></div>
                    <p>Reduces noise by ~8 decibels</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-sonify-purple"></div>
                    <p>Improves perceived quietness by ~50%</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-sonify-purple"></div>
                    <p>Effective within 3-4 feet radius</p>
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
