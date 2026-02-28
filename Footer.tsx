import { Shield } from "lucide-react";
const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-6 text-center">
      <Shield className="h-5 w-5 text-primary" />
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Baisakhi Ghosal. All rights reserved.
      </p>
    </div>
  </footer>
);
export default Footer;
