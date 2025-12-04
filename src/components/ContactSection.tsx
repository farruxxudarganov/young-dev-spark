import { Mail, Phone, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "farruxxudarganov1@gmail.com",
      href: "mailto:farruxxudarganov1@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/farruxxudarganov",
      href: "https://github.com/farruxxudarganov",
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+998 91 429 94 04",
      href: "tel:+998914299404",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Xorazm, Shovot, O'zbekiston",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t.contact.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t.contact.description}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-medium break-all">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
              
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild className="animate-pulse-glow">
              <a href="mailto:farruxxudarganov1@gmail.com">
                <Mail className="w-5 h-5" />
                {t.contact.sendMessage}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
