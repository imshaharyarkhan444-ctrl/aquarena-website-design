import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-sand-50 relative overflow-hidden">
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
              <h2 className="text-sm font-semibold text-brand-500 tracking-wider uppercase mb-2">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-sand-900 leading-tight font-accent">
                We'd Love to Welcome You
              </h3>
            </div>
            <p className="text-lg text-sand-600 leading-relaxed font-light mb-8">
              Whether you're planning a family dinner after swimming or just craving a delicious strudel, we're here for you. Give us a call or drop by!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-sand-100">
                <div className="p-3 bg-brand-50 rounded-full text-brand-600 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sand-900 mb-1">Address</h4>
                  <p className="text-sand-600 leading-relaxed">
                    Kötschach 370<br />
                    9640 Kötschach-Mauthen<br />
                    Austria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-sand-100">
                <div className="p-3 bg-brand-50 rounded-full text-brand-600 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sand-900 mb-1">Phone</h4>
                  <a href="tel:+436506244571" className="text-brand-600 hover:text-brand-700 transition-colors font-medium">
                    +43 650 6244571
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-sand-100">
                <div className="p-3 bg-brand-50 rounded-full text-brand-600 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sand-900 mb-1">Opening Hours</h4>
                  <p className="text-sand-600 leading-relaxed">
                    Monday - Sunday<br />
                    10:00 AM - 10:00 PM<br />
                    <span className="text-xs text-sand-500 italic mt-1 block">Hours may vary on holidays</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-sand-100 relative bg-sand-200"
          >
            {/* Map Placeholder or Iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.564506306509!2d12.9972305!3d46.6749399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a11ebc8091873%3A0xc3f9408e0ab88c9!2sAquarena%20K%C3%B6tschach-Mauthen!5e0!3m2!1sen!2sat!4v1700000000000!5m2!1sen!2sat" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Aquarena Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
