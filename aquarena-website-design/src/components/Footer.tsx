import { Waves, Utensils, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sand-900 text-sand-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-sand-800 pb-12 mb-8">
          
          <div className="space-y-6 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group w-max">
              <Waves className="w-8 h-8 text-brand-500" />
              <span className="font-accent text-2xl font-bold tracking-tight text-white">
                Aquarena
              </span>
            </a>
            <p className="text-sand-400 leading-relaxed max-w-sm">
              Restaurant Aquarena – Vera Erich Peturnig. <br />
              Relax, dine, and enjoy in a welcoming, family-friendly environment connected with leisure and wellness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-sand-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                <Utensils className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sand-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                <Coffee className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-brand-400 transition-colors">Our Menu</a></li>
              <li><a href="#experience" className="hover:text-brand-400 transition-colors">The Experience</a></li>
              <li><a href="#reviews" className="hover:text-brand-400 transition-colors">Guest Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li>Kötschach 370</li>
              <li>9640 Kötschach-Mauthen</li>
              <li>Austria</li>
              <li className="pt-2">
                <a href="tel:+436506244571" className="text-brand-400 hover:text-brand-300 transition-colors">
                  +43 650 6244571
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-sand-500">
          <p>&copy; {new Date().getFullYear()} Restaurant Aquarena. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
