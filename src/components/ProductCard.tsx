
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card group">
      {/* Product Image with overlay */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.new && (
              <span className="bg-brand-pink text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
            {product.bestseller && (
              <span className="bg-brand-gold text-white text-xs font-bold px-2 py-1 rounded">
                BESTSELLER
              </span>
            )}
          </div>
          
          {/* Wishlist button */}
          <button 
            className="absolute top-3 right-3 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
            aria-label="Add to wishlist"
          >
            <Heart size={18} className="text-gray-600" />
          </button>
        </Link>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-gray-900 mb-1 hover:text-brand-pink transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{product.shortDescription}</p>
          <p className="text-brand-pink font-bold mb-3">₦{product.price.toLocaleString()}</p>
        </Link>
        
        {/* Add to cart button */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag size={16} className="mr-2" />
            Add to Cart
          </Button>
          <Link to={`/product/${product.id}`} className="text-sm font-medium text-gray-600 hover:text-brand-pink transition-colors">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
