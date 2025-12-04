import { MapPin, Calendar, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get to Know Me
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center shadow-card">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full gradient-bg flex items-center justify-center mb-4 shadow-glow">
                      <span className="text-5xl font-bold text-primary-foreground">FX</span>
                    </div>
                    <p className="text-lg font-semibold">Farrux Xudarganov</p>
                    <p className="text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a 14-year-old beginner frontend developer passionate about creating clean, fast, and user-friendly websites. I enjoy building small projects, learning new technologies, and improving my coding skills every day.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">14 years old</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Khorezm, Shovot, Uzbekistan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Focus</p>
                    <p className="font-medium">Frontend Development</p>
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
