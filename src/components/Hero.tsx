import { Button } from '@/components/ui/button';
import { ArrowDown, BarChart3, TrendingUp, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Floating icons */}
        <div className="absolute top-1/3 left-[15%] text-primary/20 animate-float" style={{ animationDelay: '-1s' }}>
          <BarChart3 size={48} />
        </div>
        <div className="absolute top-1/2 right-[20%] text-accent/20 animate-float" style={{ animationDelay: '-2s' }}>
          <TrendingUp size={40} />
        </div>
        <div className="absolute bottom-1/3 left-[25%] text-primary/15 animate-float" style={{ animationDelay: '-4s' }}>
          <Database size={36} />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Data Analyst & Visualization Expert
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Transforming Data into{' '}
            <span className="text-gradient">Actionable Insights</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            I help businesses make data-driven decisions through comprehensive analysis,
            stunning visualizations, and clear storytelling.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          <div
            className="mt-16 animate-fade-up"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
