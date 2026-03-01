import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Grid className="text-primary w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">TAIMUR</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold">Tiles & Sanitary</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium supplier of high-quality tiles, sanitary ware, paint, and construction materials in Pabbi. Quality products at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="/" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-secondary transition-colors">Our Products</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Categories</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/category/tiles" className="hover:text-secondary transition-colors">Tiles</Link></li>
              <li><Link to="/category/sanitary-ware" className="hover:text-secondary transition-colors">Sanitary Ware</Link></li>
              <li><Link to="/category/paint" className="hover:text-secondary transition-colors">Paints</Link></li>
              <li><Link to="/category/pipes-fittings" className="hover:text-secondary transition-colors">Pipes & Fittings</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Contact Info</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>Main GT Road Zyarat Stop, Pabbi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>0316-1219442</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>taimur881.tk@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-64 rounded-2xl overflow-hidden mb-12 border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.217344444444!2d71.815!3d34.008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d93f0000000001%3A0x0!2zMzTCsDAwJzI4LjgiTiA3McKwNDgnNTQuMCJF!5e0!3m2!1sen!2s!4v1625000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Taimur Tiles Sanitary and Paint Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
