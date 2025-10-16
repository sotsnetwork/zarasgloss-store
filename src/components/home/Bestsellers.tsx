import React from 'react';
import ProductCard from '@/components/ProductCard';
import { getBestsellers } from '@/data/products';

const Bestsellers: React.FC = () => {
  const bestsellerProducts = getBestsellers();

  return (
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
  );
};

export default Bestsellers;
