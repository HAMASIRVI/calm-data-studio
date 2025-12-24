import { useState } from 'react';
import { ExternalLink, Github, BarChart3, TrendingUp, PieChart, LineChart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Customer Segmentation & Sales Analytics Dashboard',
      description:
        'Created a BI dashboard for customer segmentation and sales insights using Power BI, Python, and SQL. Analyzed 10,000+ transactions with RFM analysis to reveal actionable customer segments and trends.',
      details: [
        'Built an interactive Business Intelligence dashboard using Power BI, analyzing 10,000+ customer transactions to identify purchasing patterns and segment customers into 5 distinct groups based on RFM analysis.',
        'Utilized Python (Pandas, NumPy) for data preprocessing and SQL for database queries, improving data retrieval efficiency by 35%.',
        'Generated visualizations that enabled stakeholders to make data-driven decisions, potentially increasing targeted marketing ROI.',
      ],
      tags: ['Python', 'Power BI', 'SQL'],
      icon: BarChart3,
      color: 'primary',
      github: 'https://github.com/HAMASIRVI/Customer-Segmentation-Analysis',
      live: 'https://rfm-analysis-dashboard-live.netlify.app/',
    },
    {
      title: 'Financial Risk Modeling',
      description:
        'Predictive models for credit risk assessment using machine learning algorithms and statistical analysis.',
      details: [],
      tags: ['R', 'Python', 'scikit-learn'],
      icon: TrendingUp,
      color: 'accent',
      github: '',
      live: '',
    },
    {
      title: 'Marketing Campaign Analysis',
      description:
        'A/B testing framework and ROI analysis for multi-channel marketing campaigns across digital platforms.',
      details: [],
      tags: ['Python', 'Power BI', 'Excel'],
      icon: PieChart,
      color: 'primary',
      github: '',
      live: '',
    },
    {
      title: 'Supply Chain Optimization',
      description:
        'Real-time monitoring dashboard for supply chain metrics with demand forecasting capabilities.',
      details: [],
      tags: ['SQL', 'Tableau', 'Python'],
      icon: LineChart,
      color: 'accent',
      github: '',
      live: '',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Featured Projects
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
              A selection of data analysis projects showcasing my approach to solving business problems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {projects.map((project, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={project.title}
                  className={`relative overflow-hidden p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card border border-border transition-transform duration-300 ease-out cursor-pointer transform-gpu will-change-transform h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] ${
                    isHovered
                      ? 'md:scale-[1.03] shadow-2xl z-20 border-primary/50'
                      : 'hover:shadow-md'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(index)}
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div
                      className={`p-2 sm:p-3 rounded-lg sm:rounded-xl transition-transform duration-300 ${
                        isHovered ? 'scale-110' : ''
                      } ${
                        project.color === 'primary'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-accent/10 text-accent'
                      }`}
                    >
                      <project.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div
                      className={`flex gap-1.5 sm:gap-2 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-100 sm:opacity-0'
                      }`}
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 sm:p-2 rounded-lg hover:bg-secondary transition-colors touch-manipulation"
                        >
                          <Github size={16} className="text-muted-foreground sm:w-[18px] sm:h-[18px]" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 sm:p-2 rounded-lg hover:bg-secondary transition-colors touch-manipulation"
                        >
                          <ExternalLink size={16} className="text-muted-foreground sm:w-[18px] sm:h-[18px]" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3
                    className={`text-base sm:text-lg md:text-xl font-semibold mb-2 transition-colors duration-300 ${
                      isHovered ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Overlay details - hidden on mobile for cleaner UX */}
                  {project.details && project.details.length > 0 && (
                    <div
                      className={`pointer-events-none absolute inset-x-0 bottom-0 px-3 sm:px-4 pb-3 sm:pb-4 transition-all duration-300 hidden md:block ${
                        isHovered
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2'
                      }`}
                      aria-hidden={!isHovered}
                    >
                      <div className="rounded-xl sm:rounded-2xl bg-card/95 backdrop-blur border border-border shadow-soft p-3 sm:p-4">
                        <ul className="space-y-2 sm:space-y-3">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-primary shrink-0" />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full transition-colors duration-300 ${
                          isHovered
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary text-secondary-foreground'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
