import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              NexAura Studios
            </h3>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              We are a creative agency dedicated to bringing your vision to life through 
              innovative design, strategic thinking, and exceptional execution.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-background">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/80 hover:text-background transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-background transition-colors duration-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-background">Contact</h4>
            <ul className="space-y-3">
              <li className="text-background/80">
                hello@nexaurastudios.com
              </li>
              <li className="text-background/80">
                +1 (555) 123-4567
              </li>
              <li className="text-background/80">
                San Francisco, CA
              </li>
            </ul>
            
            <div className="mt-6">
              <a
                href="#contact"
                className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 inline-block"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 NexAura Studios. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors duration-300">
              Terms of Service
            </a>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;