import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";
const ExperienceSection = () => (
  <section id="experience" className="bg-card/50 py-24">
    <div className="mx-auto max-w-4xl px-6">
      <SectionHeading tag="02" title="Experience" />
      <div className="relative space-y-12 border-l border-border pl-8">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background">
              <Briefcase className="h-3 w-3 text-primary" />
            </div>
            <div className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="font-mono text-sm text-primary">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default ExperienceSection;
