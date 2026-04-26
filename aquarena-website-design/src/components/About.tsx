import { Users, Heart, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-brand-500" />,
      title: "Family Friendly",
      description: "A welcoming atmosphere perfect for families, with meals that kids and adults will love."
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-500" />,
      title: "Aquarena Complex",
      description: "Conveniently located within the Aquarena, making it the ideal spot after a swim or wellness session."
    },
    {
      icon: <Coffee className="w-8 h-8 text-brand-500" />,
      title: "Clean & Modern",
      description: "Enjoy your meal in a pristine, bright, and modern environment that feels like home."
    }
  ];

  return (
    <section id="about" className="py-24 bg-sand-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-semibold text-brand-500 tracking-wider uppercase mb-2">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-sand-900 leading-tight">
                Dining at <span className="text-brand-600 font-accent italic">Aquarena</span>
              </h3>
            </div>
            <p className="text-lg text-sand-600 leading-relaxed font-light">
              Welcome to Restaurant Aquarena, managed by Vera Erich Peturnig. Nestled in the heart of Kötschach-Mauthen, we offer a relaxed, high-quality dining experience connected seamlessly with leisure and wellness. Whether you're visiting the Aquarena complex or just stopping by for a great meal, we serve affordable comfort food, incredible desserts, and refreshing drinks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 p-3 bg-white rounded-xl shadow-sm border border-sand-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sand-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-sand-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/images/atmosphere.jpg" 
                alt="Aquarena Restaurant Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating accent card */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-sand-100 max-w-[240px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-xl">
                  4.3
                </div>
                <div>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★<span className="text-sand-300">★</span>
                  </div>
                  <p className="text-xs text-sand-500 font-medium">47 Reviews</p>
                </div>
              </div>
              <p className="text-sm text-sand-700 italic">"The perfect spot to relax after a long swim. Best strudel ever!"</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
