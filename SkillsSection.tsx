import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";
const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <SectionHeading tag="03" title="Technical Skills" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
          >
            <h3 className="mb-3 font-mono text-sm font-semibold text-primary">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default SkillsSection;
