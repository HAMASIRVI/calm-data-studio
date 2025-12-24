import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, BarChart3, Users, PieChart, Database, Lightbulb, TrendingUp, Target, Brain } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/HAMASIRVI', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ganesh-sirvi/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Ganeshsirvi600@gmail.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '-3s' }}
        />
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-8">
                Available for Hire
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              <span className="block">Ganesh</span>
              <span className="block">Sirvi</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              I help businesses make data-driven decisions through comprehensive analysis,
              stunning visualizations, and clear storytelling.
            </p>

            <div className="animate-fade-up flex flex-col sm:flex-row items-start gap-6" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">Explore My Work</a>
              </Button>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <div key={link.label} className="group relative">
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary transition-all duration-200"
                      aria-label={link.label}
                    >
                      <link.icon
                        size={22}
                        strokeWidth={2}
                        className="text-foreground group-hover:scale-110 duration-200 group-hover:text-primary transition-all"
                      />
                    </a>
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 origin-center scale-0 px-3 rounded-lg border border-border bg-card py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 whitespace-nowrap">
                      {link.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Analytics Cards */}
          <div className="hidden lg:flex flex-col gap-4 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            {/* Analytics Focus Card */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">Analytics Focus</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground">Data Cleaning & EDA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground">Customer Segmentation (RFM)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart3 size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground">Dashboarding (Power BI)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <PieChart size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground">SQL Querying</span>
                </div>
              </div>
            </div>

            {/* Traffic Overview Card */}
            {/* What I'm Exploring Card */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Lightbulb size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">What I'm Exploring</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Target size={16} className="text-accent" />
                  </div>
                  <span className="text-sm text-foreground">Customer Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <TrendingUp size={16} className="text-accent" />
                  </div>
                  <span className="text-sm text-foreground">Marketing Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Brain size={16} className="text-accent" />
                  </div>
                  <span className="text-sm text-foreground">Predictive Modeling</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 text-center lg:text-left animate-fade-up"
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
    </section>
  );
};

export default Hero;
