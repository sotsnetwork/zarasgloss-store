import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect products to enhance your beauty routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lip Gloss Category */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-brand-pink bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <img 
              src="/placeholder.svg" 
              alt="Lip Gloss Collection" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-playfair font-bold text-white drop-shadow-md mb-3">Lip Gloss</h3>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-pink"
                asChild
              >
                <Link to="/shop?category=lip-gloss">Shop Now</Link>
              </Button>
            </div>
          </div>

          {/* Lip Care Category */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-brand-pink bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <img 
              src="/placeholder.svg" 
              alt="Lip Care Collection" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-playfair font-bold text-white drop-shadow-md mb-3">Lip Care</h3>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-pink"
                asChild
              >
                <Link to="/shop?category=lip-mask">Shop Now</Link>
              </Button>
            </div>
          </div>

          {/* Face Masks Category */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-brand-pink bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <img 
              src="/placeholder.svg" 
              alt="Face Masks Collection" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-playfair font-bold text-white drop-shadow-md mb-3">Face Masks</h3>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-pink"
                asChild
              >
                <Link to="/shop?category=face-mask">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
