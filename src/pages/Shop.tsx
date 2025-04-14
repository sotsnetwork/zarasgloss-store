
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'lip-gloss', name: 'Lip Gloss' },
  { id: 'lip-liner', name: 'Lip Liner' },
  { id: 'lip-mask', name: 'Lip Masks' },
  { id: 'face-mask', name: 'Face Masks' },
  { id: 'lip-scrub', name: 'Lip Scrubs' },
  { id: 'accessories', name: 'Accessories' },
];

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveFilter(categoryParam);
      filterProducts(categoryParam);
    } else {
      setActiveFilter('all');
      setFilteredProducts(products);
    }
  }, [searchParams]);

  const filterProducts = (category: string) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
    setIsMobileFilterOpen(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of handcrafted beauty products made with love.
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 && 's'}
          </p>
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                <Filter size={18} className="mr-2" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="py-4">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryClick(category.id)}
                        className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                          activeFilter === category.id
                            ? 'bg-brand-light-pink text-brand-pink font-medium'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar Filter */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryClick(category.id)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                        activeFilter === category.id
                          ? 'bg-brand-light-pink text-brand-pink font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            {/* Active filter badges */}
            {activeFilter !== 'all' && (
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center bg-brand-light-pink text-brand-pink px-3 py-1 rounded-full text-sm">
                  {categories.find(c => c.id === activeFilter)?.name}
                  <button 
                    onClick={() => handleCategoryClick('all')}
                    className="ml-2"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try changing your filter criteria</p>
                <Button onClick={() => handleCategoryClick('all')}>
                  View All Products
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
