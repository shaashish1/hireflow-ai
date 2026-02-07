import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
  variant: "outline" | "hero" | "hero-outline";
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try HireFlow AI with basic screening.",
    features: [
      { text: "Single resume upload", included: true },
      { text: "PDF format only", included: true },
      { text: "Basic ranking score", included: true },
      { text: "Email report", included: true },
      { text: "Batch processing", included: false },
      { text: "Advanced AI insights", included: false },
      { text: "JD optimization", included: false },
    ],
    cta: "Get Started Free",
    variant: "outline",
  },
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "For growing teams with regular hiring needs.",
    features: [
      { text: "Multiple resumes (PDF)", included: true },
      { text: "Batch ranking", included: true },
      { text: "Downloadable reports", included: true },
      { text: "Email support", included: true },
      { text: "30-day dashboard history", included: true },
      { text: "Advanced AI insights", included: false },
      { text: "LinkedIn auto posting", included: false },
    ],
    cta: "Start Basic Plan",
    popular: true,
    variant: "hero",
  },
  {
    name: "Premium",
    price: "$79",
    period: "/month",
    description: "Full power for enterprise hiring teams.",
    features: [
      { text: "Multiple resumes (all formats)", included: true },
      { text: "Advanced AI ranking insights", included: true },
      { text: "Skill extraction & matching", included: true },
      { text: "Candidate comparison table", included: true },
      { text: "JD optimization suggestions", included: true },
      { text: "LinkedIn + Twitter posting", included: true },
      { text: "Unlimited history + priority support", included: true },
    ],
    cta: "Go Premium",
    variant: "hero-outline",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-4">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free. Upgrade when you need more power. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-shadow ${
                plan.popular
                  ? "border-primary shadow-brand-lg scale-[1.02]"
                  : "border-border shadow-brand-sm hover:shadow-brand-md"
              } bg-card`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-lg text-foreground">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-display font-extrabold text-4xl text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-2.5">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-accent shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-foreground" : "text-muted-foreground/50"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} size="lg" className="w-full">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
