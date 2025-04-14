
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <ShoppingCart className="mx-auto mb-4" size={64} strokeWidth={1} />
            <h2 className="text-2xl font-playfair font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Cart Items ({cartItems.length})</h2>
                    <Link to="/shop" className="text-brand-pink hover:text-brand-dark-pink flex items-center text-sm">
                      <ArrowLeft size={16} className="mr-1" />
                      Continue Shopping
                    </Link>
                  </div>

                  {cartItems.map((item) => (
                    <div key={item.product.id} className="mb-6">
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        {/* Product Image */}
                        <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </Link>

                        {/* Product Details */}
                        <div className="flex-grow">
                          <Link to={`/product/${item.product.id}`} className="block">
                            <h3 className="font-medium text-lg hover:text-brand-pink transition-colors">
                              {item.product.name}
                            </h3>
                          </Link>
                          <p className="text-gray-500 text-sm mb-2">{item.product.shortDescription}</p>
                          <p className="text-brand-pink font-bold mb-4">₦{item.product.price.toLocaleString()}</p>

                          <div className="flex items-center justify-between">
                            {/* Quantity Selector */}
                            <div className="flex items-center">
                              <button
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100"
                                onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              >
                                <Minus size={14} />
                              </button>
                              <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                                {item.quantity}
                              </div>
                              <button
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button
                              className="text-gray-500 hover:text-brand-pink transition-colors"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="sm:text-right">
                          <p className="font-bold">
                            ₦{(item.product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <Separator className="mt-6" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₦{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">₦{cartTotal.toLocaleString()}</span>
                </div>

                <Button className="w-full mb-3" size="lg">
                  <ShoppingBag size={18} className="mr-2" />
                  Proceed to Checkout
                </Button>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>
                    We accept various payment methods including bank transfers, card payments, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
