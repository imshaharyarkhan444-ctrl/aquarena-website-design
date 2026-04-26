import { motion } from 'framer-motion';
import { Waves, Utensils, Smile, Wallet } from 'lucide-react';

const features = [
  {
    icon: <Smile className="w-6 h-6 text-brand-500" />,
    title: "Family-Friendly",
    description: "A welcoming, relaxed environment perfect for families. Our menu includes favorites that kids and adults will both enjoy.",
  },
  {
    icon: <Waves className="w-6 h-6 text-brand-500" />,
    title: "Aquarena Experience",
    description: "Located within the Aquarena complex, making it the perfect spot to refuel after swimming, sliding, and wellness.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-brand-500" />,
    title: "Affordable Quality",
    description: "Enjoy high-quality meals, fresh ingredients, and premium dishes without breaking the bank. Meals from €10–20.",
  },
  {
    icon: <Utensils className="w-6 h-6 text-brand-500" />,
    title: "Relaxed Dining",
    description: "Whether you're stopping in for a quick coffee and strudel or a full hearty dinner, our casual dining setup has you covered.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-sand-50 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="space-y-6 translate-y-8">
                <img 
                  src="/images/strudel.jpg" 
                  alt="Delicious Austrian Strudel" 
                  className="rounded-2xl shadow-xl border border-sand-100 object-cover w-full h-64"
                />
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-sand-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Waves className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sand-900 text-sm">Poolside Views</h4>
                    <p className="text-xs text-sand-500 mt-1">Relax by the water.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-sand-100 flex flex-col items-center text-center justify-center min-h-[160px]">
                  <h4 className="font-bold text-3xl text-sand-900 mb-1">100%</h4>
                  <p className="text-sm font-medium text-brand-600 uppercase tracking-wide">Family Owned</p>
                </div>
                <img 
                  src="/images/schnitzel.jpg" 
                  alt="Classic Schnitzel" 
                  className="rounded-2xl shadow-xl border border-sand-100 object-cover w-full h-64"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h2 className="text-sm font-semibold text-brand-500 tracking-wider uppercase mb-2">The Experience</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-sand-900 leading-tight font-accent">
                More Than Just a Meal.
              </h3>
            </div>
            <p className="text-lg text-sand-600 leading-relaxed font-light mb-8">
              At Restaurant Aquarena, we combine the joy of leisure with the pleasure of good food. We've built an environment that is casual enough for a quick bite after the pool, yet refined enough for a memorable family dinner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-sand-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-sand-900">{feature.title}</h4>
                  <p className="text-sm text-sand-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
