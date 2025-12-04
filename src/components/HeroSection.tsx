import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1">
            Hi, I'm{" "}
            <span className="gradient-text">Farrux Xudarganov</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-fade-up-delay-2">
            Young Frontend Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-up-delay-3">
            A 14-year-old passionate about creating clean, fast, and user-friendly websites from Uzbekistan.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up-delay-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-12 animate-fade-up-delay-4">
            <a
              href="https://github.com/farruxxudarganov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:farruxxudarganov1@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
