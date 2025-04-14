
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import NewsletterPopup from '@/components/NewsletterPopup';
import { getFeaturedProducts, getBestsellers, getNewArrivals } from '@/data/products';
import { testimonials } from '@/data/testimonials';

const Index: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const bestsellerProducts = getBestsellers();
  const testimonialsList = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-hero relative overflow-hidden">
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

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              <span className="gradient-text">Featured Products</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of bestselling products loved by our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/shop" className="inline-flex items-center">
                View All Products <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
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

      {/* Bestsellers Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Bestsellers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular products that customers keep coming back for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestsellerProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real reviews from our valued customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsList.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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

      {/* Newsletter Popup */}
      <NewsletterPopup />
    </div>
  );
};

export default Index;
