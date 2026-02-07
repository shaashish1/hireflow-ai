import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Talent, TechCorp",
    quote: "HireFlow AI cut our resume screening time by 80%. We went from 3 days to 3 hours for a batch of 200 resumes.",
    initials: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "HR Director, ScaleUp Inc",
    quote: "The ranking accuracy is incredible. It surfaces candidates we would have missed manually. Game changer for our team.",
    initials: "MJ",
  },
  {
    name: "Priya Patel",
    role: "Recruiting Lead, InnovateCo",
    quote: "Finally an AI tool that actually works for HR. Simple upload, quick results, and the reports are genuinely useful.",
    initials: "PP",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-4">
            Loved by <span className="text-gradient">HR teams</span> everywhere
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-brand-sm hover:shadow-brand-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
