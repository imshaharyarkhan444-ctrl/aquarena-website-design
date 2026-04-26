import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Restaurant Aquarena poolside view" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm font-medium tracking-wide mb-6 border border-white/30 uppercase">
            Vera Erich Peturnig
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Restaurant <span className="text-brand-300 italic font-normal">Aquarena</span>
          </h1>
          <p className="text-lg md:text-2xl text-sand-50 mb-10 font-light drop-shadow-md max-w-2xl mx-auto">
            Relax, Dine & Enjoy in Kötschach-Mauthen.
            A casual yet premium dining experience connected with wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600 transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 group"
            >
              Explore Menu
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,121,194,106.8,238.15,96.86,281.33,74.74,321.39,56.44Z" className="fill-sand-50"></path>
        </svg>
      </div>
    </section>
  );
}
