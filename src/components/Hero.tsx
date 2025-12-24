import { Button } from '@/components/ui/button';
import { ArrowDown, TrendingUp, Users, DollarSign, Github, Linkedin, Mail } from 'lucide-react';

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
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <div key={link.label} className="group relative">
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="block"
                      aria-label={link.label}
                    >
                      <link.icon
                        size={28}
                        strokeWidth={2}
                        className="text-foreground hover:scale-125 duration-200 hover:stroke-primary transition-all"
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
            {/* Live Analytics Card */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">Live Analytics</span>
              </div>
              
              <div className="flex items-center gap-6">
                {/* Circular Progress */}
                <div className="relative">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted/30"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="100"
                      className="text-primary"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-foreground">60%</span>
                    <span className="text-xs text-muted-foreground">Efficiency</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users size={16} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">2.4k</span>
                      <span className="text-xs text-primary ml-1">+12%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <DollarSign size={16} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">$84k</span>
                      <span className="text-xs text-primary ml-1">+5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Overview Card */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Traffic Overview</span>
                <TrendingUp size={16} className="text-primary" />
              </div>
              
              {/* Bar Chart */}
              <div className="flex items-end gap-2 h-20 mb-4">
                {[60, 80, 45, 90, 70, 85, 55, 75].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/20 rounded-t-sm"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Sales Forecast</h3>
                <p className="text-sm text-muted-foreground mb-3">Predictive modeling using random forests on retail data.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">Scikit-learn</span>
                  <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">Pandas</span>
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
