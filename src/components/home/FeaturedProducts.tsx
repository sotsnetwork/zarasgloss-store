import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
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
  );
};

export default FeaturedProducts;
