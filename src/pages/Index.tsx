import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';
import Bestsellers from '@/components/home/Bestsellers';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import NewsletterPopup from '@/components/NewsletterPopup';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <Bestsellers />
      <Testimonials />
      <WhyChooseUs />
      <NewsletterPopup />
    </div>
  );
};

export default Index;
