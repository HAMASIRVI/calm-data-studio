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
      name: 'MS Excel',
      subSkills: [],
    },
    {
      name: 'Power BI',
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
                className="group p-5 rounded-xl bg-card border-2 border-border hover:border-primary/60 hover:shadow-hover transition-all duration-300 min-h-[120px] flex flex-col justify-start"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
