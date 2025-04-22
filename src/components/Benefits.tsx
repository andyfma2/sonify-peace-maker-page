
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sleep, Music, Wifi } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: 'Enhanced Sleep',
      description: 'Proven to improve sleep duration by 1.5 hours per night with smart wearable integration that protects your deep sleep phases',
      icon: <Sleep className="h-10 w-10 text-champagne-600" />,
      stats: [
        { label: 'Sleep Improvement', value: '1.5hrs' },
        { label: 'Deep Sleep Protection', value: '100%' }
      ]
    },
    {
      title: 'Smart Features',
      description: 'Beyond noise reduction: High-fidelity music playback, smart wake-up with gentle light and sound, and wearable integration',
      icon: <Music className="h-10 w-10 text-champagne-600" />,
      stats: [
        { label: 'Smart Wake-up', value: 'LED + Sound' },
        { label: 'Music Quality', value: 'Hi-Fi' }
      ]
    },
    {
      title: 'Easy Installation',
      description: 'Install in minutes with the included lightbulb socket adapter - no complex wiring needed',
      icon: <Wifi className="h-10 w-10 text-champagne-600" />,
      stats: [
        { label: 'Install Time', value: '5min' },
        { label: 'No Tools Needed', value: '✓' }
      ]
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Benefits</h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Experience advanced features that go beyond traditional noise reduction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="bg-champagne-50 p-3 rounded-lg">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-6">{benefit.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {benefit.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-champagne-600">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
