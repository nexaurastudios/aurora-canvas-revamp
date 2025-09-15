import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              NexAura Studios
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:shadow-glow transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-b border-border shadow-card">
            <a
              href="#home"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block mx-3 my-2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg font-medium text-center hover:shadow-glow transition-all duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;