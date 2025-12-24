import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: '5+ Years',
      description: 'Professional Experience',
    },
    {
      icon: GraduationCap,
      title: "Master's Degree",
      description: 'Data Science & Analytics',
    },
    {
      icon: Award,
      title: '50+ Projects',
      description: 'Successfully Delivered',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm a passionate data analyst with a keen eye for patterns
                and a love for turning complex datasets into compelling stories.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in data analytics began with a curiosity about how
                numbers can reveal hidden truths about businesses and user behavior.
                Today, I specialize in helping organizations leverage their data
                to make informed decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not diving into datasets, you'll find me exploring new
                visualization techniques, contributing to open-source projects,
                or sharing insights through technical writing.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card-gradient border border-border hover:shadow-soft transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="p-3 rounded-lg bg-secondary">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
