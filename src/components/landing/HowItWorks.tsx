import { Upload, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Upload,
    title: "Upload Resumes & JD",
    description: "Drop your resumes and job description. We support PDF, DOC, and DOCX formats.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Cpu,
    title: "AI Screens & Ranks",
    description: "Our AI analyzes skills, experience, and keywords to rank every candidate instantly.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Mail,
    title: "Get Your Report",
    description: "Receive a detailed ranking report via email with actionable hiring insights.",
    color: "bg-secondary text-foreground",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 gradient-surface">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-4">
            From upload to insight in <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No complex setup. No training required. Just upload and let AI do the heavy lifting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-border" />
              )}

              <div className="bg-card rounded-2xl p-8 shadow-brand-sm hover:shadow-brand-md transition-shadow border border-border relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-muted-foreground">Step {index + 1}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
