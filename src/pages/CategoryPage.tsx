import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Tag } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const products = categoryId ? PRODUCTS[categoryId] || [] : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Category Not Found</h1>
          <Link to="/" className="text-secondary font-bold underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover blur-sm"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-secondary font-bold text-sm uppercase tracking-widest mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{category.name}</h1>
            <p className="text-xl text-white/70 max-w-2xl">{category.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {product.brand}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-2 text-secondary mb-2">
                  <Tag size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">{product.brand}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <a
                    href={`https://wa.me/923161219442?text=I'm interested in ${product.name} (${product.brand})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-sm uppercase tracking-widest text-center hover:bg-secondary hover:text-primary transition-all flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Inquire Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">More products coming soon to this category!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
