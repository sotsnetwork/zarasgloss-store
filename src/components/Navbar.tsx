
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Heart, Instagram, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2"
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-3xl font-playfair font-bold gradient-text">ZARA'S GLOSS</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link font-medium">Home</Link>
          <Link to="/shop" className="nav-link font-medium">Shop</Link>
          <Link to="/about" className="nav-link font-medium">About</Link>
          <Link to="/contact" className="nav-link font-medium">Contact</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-brand-pink">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-brand-pink">
            <Heart size={20} />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-brand-pink">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <div className="h-full flex flex-col">
                <div className="py-6 border-b">
                  <h2 className="font-playfair text-2xl font-bold">Your Cart</h2>
                </div>
                <div className="flex-grow overflow-auto py-6">
                  {cartCount === 0 ? (
                    <div className="text-center py-10">
                      <ShoppingBag className="mx-auto mb-4" size={64} strokeWidth={1} />
                      <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                      <p className="text-muted-foreground mb-6">Add something to make me happy</p>
                      <Link to="/shop">
                        <Button>Continue Shopping</Button>
                      </Link>
                    </div>
                  ) : (
                    <p className="text-center">View cart items here</p>
                  )}
                </div>
                {cartCount > 0 && (
                  <div className="border-t py-6">
                    <Link to="/cart">
                      <Button className="w-full mb-2">View Cart</Button>
                    </Link>
                    <Button variant="outline" className="w-full">Checkout</Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-gray-700">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="h-full flex flex-col">
                <div className="py-6 border-b">
                  <h2 className="font-playfair text-2xl font-bold">Your Cart</h2>
                </div>
                <div className="flex-grow overflow-auto py-6">
                  {cartCount === 0 ? (
                    <div className="text-center py-10">
                      <ShoppingBag className="mx-auto mb-4" size={64} strokeWidth={1} />
                      <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                      <p className="text-muted-foreground mb-6">Add something to make me happy</p>
                      <Link to="/shop">
                        <Button>Continue Shopping</Button>
                      </Link>
                    </div>
                  ) : (
                    <p className="text-center">View cart items here</p>
                  )}
                </div>
                {cartCount > 0 && (
                  <div className="border-t py-6">
                    <Link to="/cart">
                      <Button className="w-full mb-2">View Cart</Button>
                    </Link>
                    <Button variant="outline" className="w-full">Checkout</Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
          <nav className="container-custom flex flex-col space-y-4">
            <Link to="/" className="py-2 px-4 hover:bg-gray-50 rounded">Home</Link>
            <Link to="/shop" className="py-2 px-4 hover:bg-gray-50 rounded">Shop</Link>
            <Link to="/about" className="py-2 px-4 hover:bg-gray-50 rounded">About</Link>
            <Link to="/contact" className="py-2 px-4 hover:bg-gray-50 rounded">Contact</Link>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart size={20} />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
