
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
    
    if (!hasSeenPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Remember that the user has seen the popup
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    toast.success('Thank you for subscribing to our newsletter!');
    handleClose();
    setEmail('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden animate-fade-in">
        <div className="flex justify-between items-start p-6 border-b">
          <h3 className="font-playfair text-2xl font-bold">Join Our Glow Gang!</h3>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-500">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for exclusive offers, early access to new products, and beauty tips.
          </p>
          
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Your email address"
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full mb-4 bg-brand-pink hover:bg-brand-dark-pink">
              Subscribe Now
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 text-center">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from ZARA'S GLOSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
