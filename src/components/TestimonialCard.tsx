
import React from 'react';
import { Testimonial } from '@/data/testimonials';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < testimonial.rating
                ? 'text-brand-gold fill-brand-gold'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
      <div className="font-medium">
        <span className="text-gray-900">{testimonial.author}</span>
        <span className="text-gray-500 mx-1">•</span>
        <span className="text-gray-500">{testimonial.location}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
