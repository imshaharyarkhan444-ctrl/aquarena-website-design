import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Johannes M.",
    date: "1 month ago",
    text: "The perfect spot to relax after a long swim at the Aquarena! The staff is incredibly friendly, and they serve the best strudel ever. Highly recommended for families.",
    rating: 5,
  },
  {
    id: 2,
    author: "Sarah K.",
    date: "3 months ago",
    text: "Great value for money! We ordered the Wiener Schnitzel and a light salad. Everything was fresh and tasted homemade. A very clean and welcoming environment.",
    rating: 5,
  },
  {
    id: 3,
    author: "Markus T.",
    date: "2 weeks ago",
    text: "Very comfortable setting right next to the pool area. The beef tartare was surprisingly elegant for a casual spot. We will definitely come back next time we are in Kötschach-Mauthen.",
    rating: 4,
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3 sticky top-32"
          >
            <h2 className="text-sm font-semibold text-brand-500 tracking-wider uppercase mb-2">Guest Feedback</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-sand-900 mb-6 font-accent">
              What Our Guests Say
            </h3>
            <p className="text-lg text-sand-600 leading-relaxed font-light mb-8">
              We take pride in our service and quality. See why families and visitors love dining at Restaurant Aquarena.
            </p>

            <div className="bg-sand-50 p-8 rounded-3xl border border-sand-100 shadow-sm flex flex-col items-center text-center">
              <h4 className="text-5xl font-bold text-sand-900 mb-2 font-accent">4.3</h4>
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-current' : 'fill-sand-200 text-sand-200'}`} />
                ))}
              </div>
              <p className="text-sm text-sand-500 font-medium">Based on 47 reviews on Google</p>
              
              <button className="mt-6 w-full py-3 rounded-full bg-white border border-sand-200 text-sand-700 font-medium hover:bg-sand-100 transition-colors shadow-sm">
                Leave a Review
              </button>
            </div>
          </motion.div>

          <div className="md:w-2/3 grid grid-cols-1 gap-6">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-sand-100 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-50 opacity-50 rotate-180" />
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'fill-sand-200 text-sand-200'}`} />
                  ))}
                </div>
                <p className="text-sand-700 leading-relaxed italic mb-6 relative z-10">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold uppercase">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sand-900 text-sm">{review.author}</h5>
                      <span className="text-xs text-sand-500">{review.date}</span>
                    </div>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Review" className="w-5 h-5 opacity-80" />
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
