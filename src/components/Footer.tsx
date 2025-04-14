
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="bg-brand-light-pink bg-opacity-50 rounded-lg p-8 md:p-10 mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
            Join the Glow Gang
          </h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive offers, beauty tips, and first access to new product launches.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-brand-pink hover:bg-brand-dark-pink whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/e04f4abb-b5a3-4bc6-9a91-eeb68dd21cd8.png" 
              alt="ZARA'S GLOSS" 
              className="h-16 mb-6"
            />
            <p className="text-gray-600 mb-6">
              Handcrafted beauty products inspired by you. Elevate your beauty routine with ZARA'S GLOSS.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/zaras_gloss" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/c/2349061190264" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-pink transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-brand-pink transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-brand-pink transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-brand-pink transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-pink transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=lip-gloss" className="text-gray-600 hover:text-brand-pink transition-colors">Lip Gloss</Link></li>
              <li><Link to="/shop?category=lip-liner" className="text-gray-600 hover:text-brand-pink transition-colors">Lip Liner</Link></li>
              <li><Link to="/shop?category=lip-mask" className="text-gray-600 hover:text-brand-pink transition-colors">Lip Masks</Link></li>
              <li><Link to="/shop?category=face-mask" className="text-gray-600 hover:text-brand-pink transition-colors">Face Masks</Link></li>
              <li><Link to="/shop?category=lip-scrub" className="text-gray-600 hover:text-brand-pink transition-colors">Lip Scrubs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-brand-pink flex-shrink-0 mt-1" />
                <span className="text-gray-600">Igbariam, Anambra, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-brand-pink flex-shrink-0" />
                <span className="text-gray-600">+234 906 119 0264</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-brand-pink flex-shrink-0" />
                <span className="text-gray-600">zarasgloss@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MessageCircle size={20} className="mr-2 text-brand-pink flex-shrink-0" />
                <a href="https://wa.me/c/2349061190264" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-pink transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ZARA'S GLOSS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
