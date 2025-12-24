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
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            {/* Left Column - Profile Card */}
            <div className="flex justify-center order-1 lg:order-1">
              <div className="relative">
                {/* Gradient border wrapper */}
                <div className="group w-56 sm:w-64 md:w-72 h-64 sm:h-72 md:h-80 rounded-[20px] bg-gradient-to-br from-primary via-accent to-primary p-[2px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_hsl(var(--primary)/0.3)] cursor-pointer">
                  {/* Inner card */}
                  <div className="w-full h-full bg-card rounded-[18px] transition-all duration-300 group-hover:scale-[0.98] group-hover:rounded-[16px] flex items-center justify-center">
                    <div className="text-center p-4 sm:p-5 relative z-10">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg ring-2 ring-accent/20 group-hover:ring-primary/50 group-hover:border-primary/50 transition-all duration-300">
                        <img 
                          src={profileImg} 
                          alt="Ganesh Sirvi" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-0.5">Ganesh Sirvi</h3>
                      <p className="text-xs text-muted-foreground mb-1.5">{calculateAge()} years old</p>
                      <p className="text-sm font-medium text-primary mb-0.5">Analytics</p>
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground">Data • Insights • Decision-Making</p>
                    </div>
                  </div>
                </div>

                {/* Decorative floating elements - hidden on mobile for cleaner look */}
                <div className="absolute -top-4 -right-4 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-2xl bg-primary/10 border border-primary/20 animate-float hidden sm:block" />
                <div className="absolute -bottom-6 -left-6 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl bg-accent/10 border border-accent/20 animate-float hidden sm:block" style={{ animationDelay: '-2s' }} />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 sm:space-y-8 order-2 text-center lg:text-left">
              <div>
                <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">About Me</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 sm:mb-6 leading-tight">
                  Passionate about transforming data into insights
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  I'm a data analytics student who enjoys working with real datasets and turning messy information into clear, usable insights. I like understanding how data connects to actual business decisions, not just charts on a screen.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Through hands-on projects and an internship, I've worked with Python, SQL, Excel, and Power BI to clean data, explore patterns, and build dashboards that tell a simple story. I'm especially interested in customer analytics and practical BI use cases.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Right now, I'm focused on learning, building projects, and growing as an entry-level analytics professional.
                </p>
              </div>

              {/* Stats as small inline tiles */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4 justify-center lg:justify-start">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border"
                  >
                    <stat.icon size={14} className="text-primary sm:w-4 sm:h-4" />
                    <span className="font-semibold text-foreground text-xs sm:text-sm">{stat.value}</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</span>
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
