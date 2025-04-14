
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '@/data/products';
import { ArrowLeft, Minus, Plus, Star, Check, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import ProductCard from '@/components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const product = getProductById(id || '');

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/shop">Return to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/shop" className="text-gray-500 hover:text-brand-pink flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">{product.name}</h1>
            <p className="text-2xl text-brand-pink font-bold mb-4">₦{product.price.toLocaleString()}</p>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-500">(25 reviews)</span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Product features */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <Check size={18} className="text-green-500 mr-2" />
                <span className="text-gray-700">Handcrafted with love</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-green-500 mr-2" />
                <span className="text-gray-700">Cruelty-free ingredients</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-green-500 mr-2" />
                <span className="text-gray-700">Long-lasting formula</span>
              </li>
            </ul>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Quantity</label>
              <div className="flex items-center">
                <button
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100"
                  onClick={decrementQuantity}
                >
                  <Minus size={16} />
                </button>
                <div className="w-14 h-10 flex items-center justify-center border-t border-b border-gray-300">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100"
                  onClick={incrementQuantity}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart and wishlist buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                className="flex-1 bg-brand-pink hover:bg-brand-dark-pink"
                size="lg"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
              >
                <Heart size={18} className="mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Shipping info */}
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Free shipping</span> on orders over ₦20,000
              </p>
            </div>
          </div>
        </div>

        {/* Product tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <p className="mb-4">{product.description}</p>
                <p className="mb-4">
                  Experience the perfect blend of color and care with ZARA'S GLOSS. Our products are formulated to provide maximum comfort and shine, while nourishing your lips with every application.
                </p>
                <p>
                  All our products are handcrafted with the highest quality ingredients, ensuring that you look and feel your best. Elevate your beauty routine with ZARA'S GLOSS.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="ingredients" className="p-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Ingredients</h3>
                <p className="mb-4">
                  Our products are made with carefully selected ingredients for maximum effectiveness and comfort:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Jojoba Oil - For deep hydration</li>
                  <li>Vitamin E - For antioxidant protection</li>
                  <li>Shea Butter - For nourishment and softness</li>
                  <li>Natural pigments - For vibrant, long-lasting color</li>
                  <li>Rosehip Oil - For regenerative properties</li>
                </ul>
                <p>
                  All ZARA'S GLOSS products are cruelty-free and made without harmful ingredients like parabens and sulfates.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                
                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={18}
                          className="text-brand-gold fill-brand-gold"
                        />
                      ))}
                    </div>
                    <span className="ml-2">Based on 25 reviews</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Jennifer</span>
                      <span className="text-gray-500">1 week ago</span>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className="text-brand-gold fill-brand-gold"
                        />
                      ))}
                    </div>
                    <p>
                      This product is absolutely amazing! The color is stunning and it lasts all day. The formula is also very comfortable on the lips, not sticky at all.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Amaka</span>
                      <span className="text-gray-500">2 weeks ago</span>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star, i) => (
                        <Star
                          key={star}
                          size={16}
                          className={`${
                            i < 4
                              ? 'text-brand-gold fill-brand-gold'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p>
                      I love the color and how it feels on my lips. It's not as long-lasting as I hoped, but I still really enjoy using it.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Chioma</span>
                      <span className="text-gray-500">1 month ago</span>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className="text-brand-gold fill-brand-gold"
                        />
                      ))}
                    </div>
                    <p>
                      Best lip gloss I've ever used! The consistency is perfect and the color is so pretty. Will definitely be purchasing more shades.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="section-title">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
