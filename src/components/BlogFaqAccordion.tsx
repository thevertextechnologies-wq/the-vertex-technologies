import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

type BlogFaqAccordionProps = {
  faqs: FaqItem[];
};

export default function BlogFaqAccordion({ faqs }: BlogFaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="mt-6 w-full rounded-2xl border border-border bg-card px-5 md:px-6">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border">
          <AccordionTrigger className="py-5 text-left font-display text-base font-semibold leading-snug text-foreground hover:no-underline md:text-lg">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/80">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
