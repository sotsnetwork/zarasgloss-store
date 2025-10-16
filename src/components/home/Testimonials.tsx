import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
  const testimonialsList = testimonials.slice(0, 3);

  return (
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
  );
};

export default Testimonials;
