import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";
const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <SectionHeading tag="01" title="About Me" />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg leading-relaxed text-muted-foreground"
      >
        {profile.summary}
      </motion.p>
    </div>
  </section>
);
