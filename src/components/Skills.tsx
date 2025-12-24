const Skills = () => {
  const skills = [
    {
      name: 'Python',
      isHighlighted: true,
      subSkills: ['Pandas', 'Scikit-learn', 'Matplotlib', 'Numpy'],
    },
    {
      name: 'SQL',
      subSkills: [],
    },
    {
      name: 'MS Excel',
      subSkills: [],
    },
    {
      name: 'Power BI',
      subSkills: [],
    },
    {
      name: 'EDA',
      subtitle: 'Exploratory Data Analysis',
      subSkills: [],
    },
    {
      name: 'ETL',
      subtitle: 'Extract Transform Load',
      subSkills: [],
    },
    {
      name: 'HTML',
      subSkills: [],
    },
    {
      name: 'CSS',
      subSkills: [],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-primary rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
                My Analytics Stack
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-[14px] bg-gradient-to-br from-primary via-accent to-primary p-[2px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_hsl(var(--primary)/0.3)] cursor-pointer min-h-[120px]"
              >
                <div className="w-full h-full bg-card rounded-[12px] transition-all duration-300 group-hover:scale-[0.98] group-hover:rounded-[10px] p-5 flex flex-col justify-start">
                  <h3 className={`text-lg font-semibold mb-2 ${skill.isHighlighted ? 'text-primary' : 'text-foreground'}`}>
                    {skill.name}
                  </h3>
                  {skill.subtitle && (
                    <p className="text-xs text-muted-foreground mb-2">{skill.subtitle}</p>
                  )}
                  {skill.subSkills && skill.subSkills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {skill.subSkills.map((subSkill) => (
                        <span
                          key={subSkill}
                          className="text-xs px-2 py-1 rounded-full bg-secondary border border-border text-muted-foreground"
                        >
                          {subSkill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
