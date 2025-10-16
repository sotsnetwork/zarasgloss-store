import React from 'react';
import { Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose ZARA'S GLOSS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What makes our products special and loved by our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-brand-pink" size={24} />
            </div>
            <h3 className="text-xl font-playfair font-bold mb-3">Handcrafted Quality</h3>
            <p className="text-gray-600">
              Each product is carefully handcrafted to ensure the highest quality and attention to detail.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-brand-pink" size={24} />
            </div>
            <h3 className="text-xl font-playfair font-bold mb-3">Customer Inspired</h3>
            <p className="text-gray-600">
              We develop our products based on real feedback from our beautiful customers.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-brand-pink" size={24} />
            </div>
            <h3 className="text-xl font-playfair font-bold mb-3">Affordable Luxury</h3>
            <p className="text-gray-600">
              Luxury beauty shouldn't break the bank. We offer premium quality at affordable prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
