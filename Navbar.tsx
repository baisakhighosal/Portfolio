
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
const links = ["About", "Experience", "Skills", "Certifications", "Contact"];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 font-mono text-lg font-bold text-primary">
          <Shield className="h-5 w-5" />
          <span>BG</span>
        </button>
        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2 px-6 py-4">
              {links.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)}
                    className="w-full py-2 text-left font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Navbar;
Edited
index.html
Lovable
