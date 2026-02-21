import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-16 sm:-right-32 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-16 sm:-left-32 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">Professional Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Hands-on experience in data analytics through internships and real-world projects.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:bg-card/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 md:hover:-translate-y-2">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    AI Research Intern – Multilingual Language Model Development
                  </h3>
                  <p className="text-base sm:text-lg text-primary font-medium mt-1">
                    Swecha Telangana
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span>May 2024 – Jun 2024</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4 sm:mb-6" />

              {/* Responsibilities */}
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Collected and curated multilingual textual datasets (Telugu and other regional languages) to support training of a Large Language Model (LLM).
                  </p>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Structured, cleaned, and standardized story-based linguistic data for model training and evaluation.
                  </p>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Contributed to the development of a native-language AI model capable of generating responses in regional Indian languages.
                  </p>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Ensured linguistic accuracy, contextual consistency, and proper formatting of dataset inputs.
                  </p>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Collaborated with cross-functional AI research teams to improve dataset quality and language representation.
                  </p>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Assisted in organizing large-scale text corpora for supervised learning workflows.
                  </p>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 rounded-full bg-primary" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Supported regional language preservation through AI-driven NLP initiatives.
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
