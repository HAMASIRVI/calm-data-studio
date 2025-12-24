import { Button } from '@/components/ui/button';
import { ExternalLink, Github, BarChart3, TrendingUp, PieChart, LineChart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Customer Segmentation & Sales Analytics Dashboard',
      description:
        'Created a BI dashboard for customer segmentation and sales insights using Power BI, Python, and SQL. Analyzed 10,000+ transactions with RFM analysis to reveal actionable customer segments and trends.',
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
      tags: ['SQL', 'Tableau', 'Python'],
      icon: LineChart,
      color: 'accent',
      github: '',
      live: '',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of data analysis projects showcasing my approach to solving business problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      project.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-accent/10 text-accent'
                    }`}
                  >
                    <project.icon size={24} />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Github size={18} className="text-muted-foreground" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <ExternalLink size={18} className="text-muted-foreground" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
