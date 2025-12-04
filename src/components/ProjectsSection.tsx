import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Streamline Landing Page",
    description: "A minimalistic and fast landing page built to practice modern UI principles. Features clean design, smooth animations, and responsive layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "gradient",
    link: "https://streamline-xi.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Here are some of the projects I've been working on
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto relative overflow-hidden">
                    <div className="absolute inset-0 gradient-bg opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-primary-foreground p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                          <span className="text-3xl">🚀</span>
                        </div>
                        <p className="text-lg font-semibold">Streamline</p>
                        <p className="text-sm opacity-80">Landing Page</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="hero" size="lg" asChild>
                        <a href={project.link}>
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
