import { Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Farrux Xudarganov. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/farruxxudarganov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:farruxxudarganov1@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+998942994004"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
