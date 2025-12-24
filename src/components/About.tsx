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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image/Avatar Placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Main profile card - Soft glass theme matching site colors */}
                <div className="group w-80 h-auto rounded-3xl bg-gradient-to-br from-card via-secondary/50 to-card backdrop-blur-sm border border-border shadow-soft flex items-center justify-center overflow-hidden relative transition-all duration-500 hover:border-primary/40 hover:shadow-hover">
                  <div className="text-center p-6 relative z-10">
                    <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-3 border-primary/20 shadow-lg ring-2 ring-accent/20 group-hover:ring-primary/40 transition-all duration-500">
                      <img 
                        src={profileImg} 
                        alt="Ganesh Sirvi" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-0.5">Ganesh Sirvi</h3>
                    <p className="text-xs text-muted-foreground mb-2">{calculateAge()} years old</p>
                    <p className="text-sm font-medium text-primary mb-1">Analytics</p>
                    <p className="text-xs text-muted-foreground">Data • Insights • Decision-Making</p>
                  </div>
                  {/* Subtle animated border glow on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
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
