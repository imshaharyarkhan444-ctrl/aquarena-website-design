import { useState, useEffect } from 'react';
import { Menu, X, Waves } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Waves className={`w-8 h-8 transition-colors ${isScrolled ? 'text-brand-500' : 'text-white group-hover:text-brand-200'}`} />
          <span className={`font-accent text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-sand-900' : 'text-white'}`}>
            Aquarena
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-400 ${
                isScrolled ? 'text-sand-600' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#menu"
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              isScrolled 
                ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-md hover:shadow-lg' 
                : 'bg-white text-brand-600 hover:bg-brand-50'
            }`}
          >
            View Menu
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-sand-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-sand-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-sand-100 py-4 flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sand-600 font-medium py-2 border-b border-sand-50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-5 py-3 rounded-xl bg-brand-500 text-white text-center font-medium shadow-md"
          >
            View Menu
          </a>
        </div>
      )}
    </nav>
  );
}
