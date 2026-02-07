import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does HireFlow AI screen resumes?",
    answer:
      "Our AI analyzes each resume against your job description, extracting skills, experience, education, and keywords. It then assigns a match score and ranks all candidates by overall fit.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "The Free and Basic plans support PDF resumes. The Premium plan supports PDF, DOC, and DOCX formats, including mixed format batches.",
  },
  {
    question: "How fast are the results?",
    answer:
      "Most screening reports are delivered within 5–15 minutes via email, depending on the number of resumes. You'll also see status updates in your dashboard.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All uploaded files are encrypted in transit and at rest. We never share your data with third parties, and files are automatically deleted after processing unless you choose to keep them.",
  },
  {
    question: "Can I try HireFlow AI for free?",
    answer:
      "Absolutely! Our Free plan lets you screen a single resume with basic ranking. We also offer a 1-day free trial with 2 screening attempts so you can experience the full power.",
  },
  {
    question: "What's coming next?",
    answer:
      "We're building a complete HR automation suite — AI interview questions, candidate shortlisting dashboards, salary benchmarks, offer letter generators, and much more. Stay tuned!",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 gradient-surface">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-4">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-brand-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
