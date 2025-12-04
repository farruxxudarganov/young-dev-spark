import { useLanguage } from "@/contexts/LanguageContext";

const SkillsSection = () => {
  const { t } = useLanguage();

  const skills = [
    {
      name: "HTML",
      icon: "🌐",
      level: 90,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "CSS",
      icon: "🎨",
      level: 85,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      level: 75,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: t.skills.responsiveDesign,
      icon: "📱",
      level: 80,
      color: "from-green-400 to-green-600",
    },
    {
      name: "Git & GitHub",
      icon: "🔧",
      level: 70,
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t.skills.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.skills.title}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t.skills.description}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.level}%</p>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-glow`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
