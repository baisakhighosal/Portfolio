
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-mono text-sm tracking-widest text-primary">
            {"// CYBER SECURITY ANALYST"}
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-glow text-primary">{profile.name.split(" ")[1]}</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            {profile.summary.slice(0, 140)}...
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> {profile.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-primary" /> {profile.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-primary" /> {profile.phone}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-pulse-glow text-primary"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
Edited
index.html
