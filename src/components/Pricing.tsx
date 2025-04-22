
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section id="order-now" className="py-16 md:py-24 bg-gradient-to-br from-white to-sonify-light-purple/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Experience Peace and Quiet?</h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Enjoy a quieter space with our innovative noise reduction solution.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Sonify Noise Reducer</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$400</span>
                  <span className="ml-2 text-muted-foreground">USD</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-sonify-purple mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Elegant 8-inch circular design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-sonify-purple mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dual noise-blocking & masking technology</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-sonify-purple mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Smart app control & customization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-sonify-purple mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Easy DIY installation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-sonify-purple mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Smart home integration</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-2 mb-4">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure payment processing</span>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-sonify-purple p-8 md:p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sonify device in white with wood accent</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Installation hardware & power cable</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Quick-start guide</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free companion app</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1-year warranty</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-white mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>
              </div>
              
              <Button size="lg" className="bg-white text-sonify-purple hover:bg-sonify-light-purple transition-colors w-full">
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center border">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sonify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Free Shipping</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center border">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sonify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>30-Day Money Back</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center border">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sonify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>1-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
