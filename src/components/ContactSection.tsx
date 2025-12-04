import { Mail, Phone, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Elektron pochta",
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
    label: "Telefon",
    value: "+998 91 429 94 04",
    href: "tel:+998914299404",
  },
  {
    icon: MapPin,
    label: "Manzil",
    value: "Xorazm, Shovot, O'zbekiston",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Bog'lanish
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Keling, birga ishlaymiz
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Savollaringiz bo'lsa yoki shunchaki salom aytmoqchi bo'lsangiz, bemalol murojaat qiling!
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-soft">
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
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:farruxxudarganov1@gmail.com">
                <Mail className="w-5 h-5" />
                Menga xabar yuboring
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
