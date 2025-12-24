const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} DataAnalyst. Crafted with care.
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a
              href="#about"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors touch-manipulation py-1"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors touch-manipulation py-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors touch-manipulation py-1"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
