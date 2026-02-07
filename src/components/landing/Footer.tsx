import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Resume Screening", "Candidate Ranking", "JD Generator", "Pricing"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "API Reference", "Help Center", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* CTA Banner */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Ready to hire <span className="text-gradient">smarter</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of HR teams who screen resumes in minutes, not days.
            </p>
            <Button variant="hero" size="xl">
              Start Free Screening
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Links */}
      <div className="border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xs">H</span>
                </div>
                <span className="font-display font-bold text-lg text-foreground">HireFlow AI</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered resume screening and candidate ranking for modern HR teams.
              </p>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-display font-semibold text-sm text-foreground mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HireFlow AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
