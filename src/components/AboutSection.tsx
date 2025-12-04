import { MapPin, Calendar, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t.about.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.about.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center shadow-card">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full gradient-bg flex items-center justify-center mb-4 shadow-glow animate-pulse-glow">
                      <span className="text-5xl font-bold text-primary-foreground">FX</span>
                    </div>
                    <p className="text-lg font-semibold">Farrux Xudarganov</p>
                    <p className="text-muted-foreground">{t.about.role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t.about.age}</p>
                    <p className="font-medium">{t.about.ageValue}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t.about.location}</p>
                    <p className="font-medium">{t.about.locationValue}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t.about.focus}</p>
                    <p className="font-medium">{t.about.focusValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
