import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/portfolio";
const CertificationsSection = () => (
  <section id="certifications" className="bg-card/50 py-24">
    <div className="mx-auto max-w-4xl px-6">
      <SectionHeading tag="04" title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{cert.name}</h3>
              <p className="font-mono text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default CertificationsSection;
