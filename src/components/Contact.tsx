import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:hello@dataanalyst.com', label: 'Email' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Have a project in mind or want to discuss how data can transform your business?
              I'd love to hear from you.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin size={18} />
              <span>Available for remote work worldwide</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:hello@dataanalyst.com">
                  <Mail size={18} />
                  Send an Email
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Call
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Or connect with me on social media
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
