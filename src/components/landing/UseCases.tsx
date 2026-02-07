import {
  FileSearch,
  Brain,
  BarChart3,
  MessageSquare,
  UserCheck,
  Globe,
  Briefcase,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: FileSearch,
    title: "Resume Screening & Ranking",
    description: "Automatically screen hundreds of resumes and rank candidates by fit.",
    available: true,
  },
  {
    icon: Globe,
    title: "JD Creation & Job Posting",
    description: "Generate optimized JDs and post to LinkedIn & Twitter instantly.",
    available: true,
  },
  {
    icon: Brain,
    title: "AI Interview Questions",
    description: "Generate role-specific behavioral and technical interview questions.",
    available: false,
  },
  {
    icon: UserCheck,
    title: "Candidate Shortlisting",
    description: "Automated shortlisting dashboard with AI-powered recommendations.",
    available: false,
  },
  {
    icon: BarChart3,
    title: "Skill Gap Analysis",
    description: "Identify skill gaps and training needs across your candidate pool.",
    available: false,
  },
  {
    icon: TrendingUp,
    title: "Salary Benchmarks",
    description: "Data-driven salary insights to make competitive offers.",
    available: false,
  },
  {
    icon: MessageSquare,
    title: "Interview Feedback Analyzer",
    description: "Aggregate and analyze interview feedback with AI summaries.",
    available: false,
  },
  {
    icon: Briefcase,
    title: "Offer Letter Generator",
    description: "Create professional offer letters with customizable templates.",
    available: false,
  },
  {
    icon: Users,
    title: "Talent Pool CRM",
    description: "Build and manage your talent pipeline with smart segmentation.",
    available: false,
  },
  {
    icon: ShieldCheck,
    title: "D&I Hiring Analytics",
    description: "Track diversity metrics and ensure inclusive hiring practices.",
    available: false,
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 md:py-32 gradient-surface">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">HR Automation Suite</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-4">
            One platform, <span className="text-gradient">endless possibilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            HireFlow AI is building the complete HR automation toolkit. Start with screening, grow into everything.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative bg-card rounded-xl p-5 border border-border shadow-brand-sm hover:shadow-brand-md transition-all group ${
                !item.available ? "opacity-70" : ""
              }`}
            >
              {!item.available && (
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  Coming Soon
                </span>
              )}
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                  item.available ? "bg-primary/10" : "bg-muted"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${item.available ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
