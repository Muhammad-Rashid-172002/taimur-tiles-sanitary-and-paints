import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Quote, Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, REVIEWS } from '../data';

const Home = () => {
  useEffect(() => {
    // Smooth scroll for hash links
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
            alt="Showroom Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-sm font-bold tracking-widest uppercase mb-6">
              Welcome to Taimur Store
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium <span className="text-secondary">Tiles, Sanitary</span> <br /> & Paint Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-light">
              Quality Products | Trusted Brands | Best Prices in Pabbi
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto bg-secondary text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-white transition-all flex items-center justify-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto border border-white/30 bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-secondary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000"
                  alt="About Us"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-secondary text-4xl font-bold mb-1">15+</p>
                <p className="text-white text-sm uppercase tracking-widest font-semibold">Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Legacy</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 text-primary">Trusted Supplier in Pabbi</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Taimur Tiles Sanitary and Paint Store is a trusted supplier of premium tiles, sanitary ware, paint, pipes and fittings in Pabbi. We provide high quality products from well-known brands at competitive prices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to quality and customer satisfaction has made us a leading name in the region. Whether you are building your dream home or renovating, we have the perfect solutions for you.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <Star size={24} />
                  </div>
                  <span className="font-bold text-primary">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <Star size={24} />
                  </div>
                  <span className="font-bold text-primary">Trusted Brands</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Explore Our Range</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-primary">Our Product Categories</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/category/${category.id}`}
                  className="group block relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6">{category.description}</p>
                    <div className="flex items-center text-secondary font-bold text-sm uppercase tracking-widest">
                      <span>View Collection</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
           <div className="relative inline-block">
  <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary mx-auto shadow-2xl">
    <img
      src="/images/ceo.jpeg"
      alt="CEO"
      className="w-full h-full object-cover object-top"
      referrerPolicy="no-referrer"
    />
  </div>

  <div className="absolute -bottom-2 -right-2 bg-secondary p-3 rounded-full text-primary">
    <Quote size={28} />
  </div>
</div>
            
            <div className="space-y-4">
              <h3 className="text-secondary font-bold tracking-widest uppercase text-sm">Message from CEO</h3>
              <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed">
                "Our mission is to provide high quality construction materials with honesty and trust. We believe in building long-term relationships with our customers through excellence."
              </p>
              <div className="pt-6">
                <p className="text-white font-bold text-xl uppercase tracking-widest">Taimur Khan</p>
                <p className="text-secondary text-sm font-semibold">CEO – Taimur Tiles Store</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-primary">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-accent p-8 rounded-3xl border border-gray-100 hover:border-secondary/30 transition-all group"
              >
                <div className="flex text-secondary mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <span className="font-bold text-primary uppercase tracking-wider text-sm">{review.name}</span>
                  <span className="text-gray-400 text-xs">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 space-y-12">
                <div>
                  <span className="text-secondary font-bold tracking-widest uppercase text-sm">Get In Touch</span>
                  <h2 className="text-4xl font-bold mt-2 text-white">Contact Us Today</h2>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Phone Numbers</p>
                      <p className="text-white text-lg font-bold">0316-1219442</p>
                      <p className="text-white text-lg font-bold">0331-9746881</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Email Address</p>
                      <p className="text-white text-lg font-bold">taimur881.tk@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Location</p>
                      <p className="text-white text-lg font-bold">Main GT Road Zyarat Stop, Pabbi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 lg:p-20">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-accent border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-secondary transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-accent border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-secondary transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Subject</label>
                    <input
                      type="text"
                      placeholder="Inquiry about Tiles"
                      className="w-full bg-accent border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-secondary transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Message</label>
                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full bg-accent border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-secondary transition-all outline-none resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all flex items-center justify-center space-x-3"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
