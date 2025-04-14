
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Star, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-brand-light-pink bg-opacity-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h1>
              <p className="text-gray-700 mb-6 text-lg">
                At ZARA'S GLOSS, beauty is more than skin deep—it's a conversation. That's why every product we make is inspired by real feedback from our beautiful customers.
              </p>
              <p className="text-gray-700 mb-6">
                From luscious lip glosses to hydrating masks and gentle scrubs, we're here to help you feel confident, cared for, and absolutely stunning. All our products are handmade with love, tested for quality, and constantly improved based on what you tell us.
              </p>
              <p className="font-medium italic text-brand-pink text-lg mb-8">
                This is your beauty brand. Let's glow together. 💕
              </p>
              <Button asChild>
                <Link to="/shop">Shop Our Products</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                alt="ZARA'S GLOSS products"
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're on a mission to create beauty products that make you feel confident, beautiful, and empowered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-brand-pink" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Made with Love</h3>
              <p className="text-gray-600">
                Every product is handcrafted with care, attention to detail, and the highest quality ingredients.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-brand-pink" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                We listen to our customers and constantly improve our products based on their feedback.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-brand-pink" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We use only the finest ingredients to ensure our products are effective, safe, and luxurious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-playfair font-bold mb-6">Meet the Founder</h2>
              <p className="text-gray-700 mb-4">
                Hello, I'm Zara! I founded ZARA'S GLOSS out of my passion for beauty and a desire to create products that make people feel good about themselves.
              </p>
              <p className="text-gray-700 mb-4">
                After years of struggling to find lip products that were both beautiful and nourishing, I decided to create my own. What started as a small project in my kitchen has grown into a brand that's loved by customers across Nigeria.
              </p>
              <p className="text-gray-700 mb-4">
                My philosophy is simple: beauty products should enhance your natural beauty, not mask it. They should make you feel confident, not self-conscious. And they should be accessible to everyone who wants to feel beautiful.
              </p>
              <p className="text-gray-700 font-medium">
                Thank you for supporting our small business and being part of the ZARA'S GLOSS family.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="/placeholder.svg"
                alt="Zara, Founder of ZARA'S GLOSS"
                className="max-w-full rounded-full h-64 w-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at ZARA'S GLOSS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-playfair font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our ingredients or production process. Each product is tested extensively to ensure it meets our high standards.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-playfair font-bold mb-3">Customer Feedback</h3>
              <p className="text-gray-600">
                We believe the best products come from listening to our customers. Your feedback directly influences our product development and improvements.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-playfair font-bold mb-3">Cruelty-Free</h3>
              <p className="text-gray-600">
                We never test our products on animals and source ingredients responsibly. Beauty should never come at the expense of our furry friends.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-playfair font-bold mb-3">Accessible Luxury</h3>
              <p className="text-gray-600">
                We believe everyone deserves to experience high-quality beauty products. That's why we work hard to keep our prices affordable without sacrificing quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-pink text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Glow Up?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who have discovered the magic of ZARA'S GLOSS. Your perfect lip product is just a click away.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-brand-pink hover:bg-gray-100"
            asChild
          >
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
