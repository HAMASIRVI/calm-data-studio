import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/HAMASIRVI', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ganesh-sirvi/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Ganeshsirvi600@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Let's Work Together
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-xl mx-auto px-4">
              Currently seeking data analytics internship opportunities. Feel free to reach out or connect!
            </p>
          </div>

          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card border border-border">
            {/* Contact Form */}
            <form 
              method="POST" 
              data-netlify="true" 
              name="contact"
              className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-secondary/50 border-border/50 rounded-full px-4 sm:px-6 py-5 sm:py-6 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-secondary/50 border-border/50 rounded-full px-4 sm:px-6 py-5 sm:py-6 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={4}
                  className="bg-secondary/50 border-border/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 resize-none text-sm sm:text-base min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-5 sm:py-6 bg-teal-500 hover:bg-teal-600 text-white border-none transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base touch-manipulation"
              >
                Connect
              </Button>
            </form>

            {/* Social Links with Tooltip Animation */}
            <div className="pt-6 sm:pt-8 border-t border-border">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                Or connect with me on social media
              </p>
              <div className="flex justify-center gap-5 sm:gap-6">
                {socialLinks.map((link) => (
                  <div key={link.label} className="group relative">
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="block touch-manipulation p-2"
                      aria-label={link.label}
                    >
                      <link.icon 
                        size={28} 
                        strokeWidth={2}
                        className="text-foreground hover:scale-125 duration-200 hover:stroke-primary transition-all sm:w-8 sm:h-8" 
                      />
                    </a>
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 origin-center scale-0 px-3 rounded-lg border border-border bg-card py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 whitespace-nowrap hidden sm:block">
                      {link.label}
                    </span>
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

export default Contact;
