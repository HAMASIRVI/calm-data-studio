import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in data analytics through internships and real-world projects.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 transition-all duration-500 hover:bg-card/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Data Analyst Intern
                  </h3>
                  <p className="text-lg text-primary font-medium mt-1">
                    Swecha Telangana
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>May 2024 – Jun 2024</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

              {/* Responsibilities */}
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Executed end-to-end data collection and preprocessing for 300+ records, transforming unstructured field data into machine-readable formats using Python and Excel, reducing manual processing time by 40%.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Implemented rigorous data validation protocols and quality assurance checks, achieving 100% data integrity by eliminating duplicates and inconsistencies prior to database ingestion.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Performed exploratory data analysis to identify demographic trends and usage patterns, delivering actionable insights that optimized the organization's outreach strategy and improved targeting efficiency by 25%.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground leading-relaxed">
                    Collaborated with cross-functional teams and key stakeholders to standardize data collection methodologies, creating comprehensive documentation that improved data consistency and stakeholder buy-in across future projects.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
