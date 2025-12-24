import { Briefcase, GraduationCap, FolderOpen } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

const About = () => {
  // Calculate age from DOB
  const calculateAge = () => {
    const dob = new Date(2004, 3, 3); // April 3, 2004 (month is 0-indexed)
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  const stats = [
    {
      icon: Briefcase,
      value: '2 Yrs',
      label: 'Projects + Internship',
    },
    {
      icon: GraduationCap,
      value: "Bachelor's",
      label: 'Degree',
    },
    {
      icon: FolderOpen,
      value: '5+',
      label: 'Projects',
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column - Profile Card */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative">
                {/* Gradient border wrapper */}
                <div className="group w-72 h-80 rounded-[20px] bg-gradient-to-br from-primary via-accent to-primary p-[2px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_hsl(var(--primary)/0.3)] cursor-pointer">
                  {/* Inner card */}
                  <div className="w-full h-full bg-card rounded-[18px] transition-all duration-300 group-hover:scale-[0.98] group-hover:rounded-[16px] flex items-center justify-center">
                    <div className="text-center p-5 relative z-10">
                      <div className="w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg ring-2 ring-accent/20 group-hover:ring-primary/50 group-hover:border-primary/50 transition-all duration-300">
                        <img 
                          src={profileImg} 
                          alt="Ganesh Sirvi" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-0.5">Ganesh Sirvi</h3>
                      <p className="text-xs text-muted-foreground mb-1.5">{calculateAge()} years old</p>
                      <p className="text-sm font-medium text-primary mb-0.5">Analytics</p>
                      <p className="text-[11px] text-muted-foreground">Data • Insights • Decision-Making</p>
                    </div>
                  </div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 animate-float" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 animate-float" style={{ animationDelay: '-2s' }} />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">About Me</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 leading-tight">
                  Passionate about transforming data into insights
                </h2>
              </div>

              <div className="space-y-4">
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

              {/* Stats as small inline tiles */}
              <div className="flex flex-wrap gap-3 pt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                  >
                    <stat.icon size={16} className="text-primary" />
                    <span className="font-semibold text-foreground text-sm">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
