import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/HAMASIRVI', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ganesh-sirvi/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Ganeshsirvi600@gmail.com', label: 'Email' },
  ];

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

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
              Currently seeking data analytics internship opportunities. Feel free to reach out or connect!
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-secondary/50 border-border/50 rounded-full px-6 py-6 ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1 text-left pl-4">{errors.name}</p>}
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-secondary/50 border-border/50 rounded-full px-6 py-6 ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1 text-left pl-4">{errors.email}</p>}
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`bg-secondary/50 border-border/50 rounded-2xl px-6 py-4 resize-none ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && <p className="text-destructive text-sm mt-1 text-left pl-4">{errors.message}</p>}
              </div>

              <Button type="submit" variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8">
                Connect
              </Button>
            </form>

            {/* Social Links with Tooltip Animation */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Or connect with me on social media
              </p>
              <div className="flex justify-center gap-6">
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
                        size={32} 
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
