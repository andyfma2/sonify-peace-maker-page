
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does Sonify actually work?",
      answer: "Sonify works through a dual approach: First, it uses smart sensors to detect noise patterns and actively reduces sound transmission through walls. Second, it creates customized sound patterns that mask any remaining noise, effectively making your space significantly quieter."
    },
    {
      question: "Will it completely eliminate all noise?",
      answer: "While Sonify significantly reduces noise (by approximately 8 decibels for common disturbing sounds), it doesn't completely eliminate all noise. It works best for typical neighbor noises like TV, music, conversations, and footsteps, creating a much more peaceful environment."
    },
    {
      question: "Is installation difficult?",
      answer: "Not at all! Installation typically takes less than 15 minutes and requires no special tools. You can mount it directly to the wall with the included hardware, or use the lightbulb socket option for even easier setup. The companion app guides you through a simple calibration process."
    },
    {
      question: "How many devices do I need?",
      answer: "One Sonify device is effective within approximately an 8-foot radius. For larger rooms or to target multiple walls, additional units may be beneficial. Multiple devices can be linked together for even better coverage and synchronized noise reduction."
    },
    {
      question: "Does it work in all types of homes?",
      answer: "Sonify works best on drywall surfaces, which are common in most modern homes, apartments, and condos. It can be used on both walls and ceilings. The effectiveness may vary slightly depending on the construction of your building."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "We offer a 30-day money-back guarantee. If Sonify doesn't meet your expectations, you can return it for a full refund. We also provide a 1-year manufacturer warranty against defects."
    },
    {
      question: "Does it use a lot of electricity?",
      answer: "No, Sonify is very energy efficient, using less than 50W of power - about the same as a standard light bulb."
    },
    {
      question: "Can it be controlled with my smart home system?",
      answer: "Yes! Sonify is compatible with Alexa, Google Home, and other popular smart home systems for convenient voice control and automation."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-prose">
            Have questions about Sonify? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 bg-sonify-purple/10 p-6 md:p-8 rounded-xl text-center max-w-3xl mx-auto">
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
