import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

type Category = 'All' | 'Mains' | 'Light Meals' | 'Desserts';

const menuItems = [
  {
    id: 1,
    name: "Classic Wiener Schnitzel",
    description: "Golden brown crispy pork schnitzel served with buttery white rice and a fresh lemon wedge.",
    price: "€16.90",
    category: "Mains",
    image: "/images/schnitzel.jpg"
  },
  {
    id: 2,
    name: "Grilled Chicken Toast",
    description: "Perfectly grilled chicken breast, bacon, and pink sauce on toast. Served with a mixed side salad.",
    price: "€14.50",
    category: "Light Meals",
    image: "/images/light-meal.jpg"
  },
  {
    id: 3,
    name: "Austrian Apple Strudel",
    description: "Warm homemade apple strudel with a scoop of vanilla ice cream, whipped cream, and almond flakes.",
    price: "€6.50",
    category: "Desserts",
    image: "/images/strudel.jpg"
  },
  {
    id: 4,
    name: "Premium Beef Tartare",
    description: "Finely chopped beef tartare with toast, butter curls, capers, and red onions. An elegant starter.",
    price: "€18.90",
    category: "Mains",
    image: "/images/tartare.jpg"
  },
  {
    id: 5,
    name: "Bacon-Wrapped Sausages",
    description: "Two hearty sausages wrapped in crispy bacon, served with golden french fries and ketchup.",
    price: "€12.90",
    category: "Mains",
    image: "/images/sausage.jpg"
  },
  {
    id: 6,
    name: "Mixed Garden Salad",
    description: "Freshly picked greens, cherry tomatoes, cucumbers, and sweet corn with a light yogurt dressing.",
    price: "€9.50",
    category: "Light Meals",
    image: "/images/light-meal.jpg"
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = menuItems.filter(item => 
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-500 tracking-wider uppercase mb-2">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-sand-900 mb-6 font-accent">
            Casual Dining, Premium Taste
          </h3>
          <p className="text-lg text-sand-600 font-light">
            From affordable family favorites to delicious Austrian desserts, we have something for everyone. Enjoy quality meals starting from €10.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['All', 'Mains', 'Light Meals', 'Desserts'] as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-sand-900 text-white shadow-md'
                  : 'bg-sand-50 text-sand-600 hover:bg-sand-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-sand-50 rounded-2xl overflow-hidden border border-sand-100 hover:shadow-xl transition-shadow group flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-sand-900 shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{item.category}</span>
                  </div>
                  <h4 className="text-xl font-bold text-sand-900 mb-3 font-accent">{item.name}</h4>
                  <p className="text-sand-600 text-sm leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <button className="text-brand-600 font-medium text-sm flex items-center gap-1 group/btn hover:text-brand-700 transition-colors mt-auto w-max">
                    Order Now
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
