import { Code, Dribbble } from "lucide-react";

const interests = [
  {
    name: "Dasturlash",
    icon: Code,
    description: "Yangi texnologiyalarni o'rganish va loyihalar yaratish",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Futbol",
    icon: Dribbble,
    description: "Futbol o'ynash va sevimli jamoalarni tomosha qilish",
    color: "from-green-400 to-emerald-500",
  },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Qiziqishlarim
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nimalar bilan qiziqaman
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Bo'sh vaqtimda shular bilan shug'ullanaman
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.name}
                  className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
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
