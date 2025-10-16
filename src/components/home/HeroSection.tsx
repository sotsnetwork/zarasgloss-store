import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient relative overflow-hidden">
      <div className="container-custom flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white drop-shadow-md">
            Gloss Up With Confidence
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-md mx-auto md:mx-0">
            Handcrafted beauty products inspired by you. Elevate your beauty routine with ZARA'S GLOSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="bg-white text-brand-pink hover:bg-gray-100 transition-colors"
              asChild
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-pink transition-colors"
              asChild
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end z-10">
          <img 
            src="/placeholder.svg" 
            alt="ZARA'S GLOSS Products" 
            className="max-w-full md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
