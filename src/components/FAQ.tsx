import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const FAQ = () => {
  const headerRef = useIntersectionObserver();
  const faqRef = useIntersectionObserver();
  const supportRef = useIntersectionObserver();

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div ref={headerRef} className="flex flex-col items-center text-center space-y-4 mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Have questions about Sonify? We've got answers.
          </p>
        </div>

        <div ref={faqRef} className="max-w-3xl mx-auto opacity-0">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div ref={supportRef} className="mt-12 bg-sonify-purple/10 p-6 md:p-8 rounded-xl text-center max-w-3xl mx-auto opacity-0">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">Our customer support team is ready to assist you with any other questions you might have.</p>
          <a href="mailto:support@sonify.com" className="inline-flex items-center text-sonify-purple hover:text-sonify-accent-purple font-medium">
            Contact Support
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
