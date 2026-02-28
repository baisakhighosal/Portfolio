import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";
const items = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: "Location", value: profile.location },
];
const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <SectionHeading tag="05" title="Get in Touch" />
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {item.href ? (
              <a
                href={item.href}
                className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
              >
                <item.icon className="h-6 w-6 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
                <span className="text-sm text-foreground">{item.value}</span>
              </a>
            ) : (
              <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center">
                <item.icon className="h-6 w-6 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
                <span className="text-sm text-foreground">{item.value}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default ContactSection;
