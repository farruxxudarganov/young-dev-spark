import { Code, Dribbble } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const InterestsSection = () => {
  const { t } = useLanguage();

  const interests = [
    {
      name: t.interests.programming,
      icon: Code,
      description: t.interests.programmingDesc,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: t.interests.football,
      icon: Dribbble,
      description: t.interests.footballDesc,
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section id="interests" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t.interests.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.interests.title}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t.interests.description}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.name}
                  className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 text-center"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{interest.name}</h3>
                  <p className="text-muted-foreground">{interest.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
