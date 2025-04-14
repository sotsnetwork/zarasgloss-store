
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Form submission logic would go here
    
    // Show success message
    toast.success('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-brand-light-pink bg-opacity-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Have questions about our products? Want to collaborate? Or just want to say hello? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-playfair font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-light-pink p-3 rounded-full mr-4">
                    <MapPin className="text-brand-pink" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Beauty Lane, Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-light-pink p-3 rounded-full mr-4">
                    <Mail className="text-brand-pink" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@zarasgloss.com</p>
                    <p className="text-gray-600">support@zarasgloss.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-light-pink p-3 rounded-full mr-4">
                    <Phone className="text-brand-pink" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-gray-600">+234 123 4567 890</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-playfair font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-brand-light-pink hover:bg-brand-pink text-brand-pink hover:text-white transition-colors p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-brand-light-pink hover:bg-brand-pink text-brand-pink hover:text-white transition-colors p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="bg-brand-light-pink hover:bg-brand-pink text-brand-pink hover:text-white transition-colors p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-playfair font-bold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="input-field min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="bg-brand-pink hover:bg-brand-dark-pink" size="lg">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our store to experience our products in person.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Placeholder for Google Map */}
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <MapPin size={48} className="text-gray-400" />
              <p className="ml-2 text-gray-500">Interactive map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-3">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Yes, we ship to select countries internationally. Shipping costs and delivery times vary by location.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-3">What is your return policy?</h3>
              <p className="text-gray-600">
                We accept returns within 14 days of delivery for unused items in their original packaging.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-3">Are your products cruelty-free?</h3>
              <p className="text-gray-600">
                Absolutely! We never test on animals and source our ingredients ethically.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-3">How long does shipping take?</h3>
              <p className="text-gray-600">
                Local deliveries within Lagos typically take 1-3 business days. National deliveries take 3-7 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
