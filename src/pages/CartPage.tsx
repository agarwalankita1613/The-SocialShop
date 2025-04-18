import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  Trash2,
  Plus,
  Minus,
  CreditCard,
  Truck,
  Shield,
  Gift,
  ArrowRight
} from 'lucide-react';

function CartPage() {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  
  const cartItems = [
    {
      id: 1,
      name: 'Premium Cotton Oversized T-Shirt',
      price: 49.99,
      size: 'M',
      color: 'Black',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
    },
    {
      id: 2,
      name: 'Slim Fit Denim Jeans',
      price: 79.99,
      size: '32',
      color: 'Blue',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d'
    }
  ];

  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-dark-950/80 backdrop-blur-md z-50 border-b border-dark-800"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-6 w-6 text-dark-300" />
            </motion.div>
            <h1 className="text-xl font-bold text-dark-50">Shopping Cart</h1>
          </div>
        </div>
      </motion.nav>

      <div className="pt-20 max-w-7xl mx-auto px-4 py-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeIn}
                className="bg-dark-900 rounded-xl p-6 shadow-lg border border-dark-800"
              >
                <div className="flex items-center space-x-4">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-dark-50">{item.name}</h3>
                    <div className="mt-1 text-sm text-dark-300">
                      <span>Size: {item.size}</span>
                      <span className="mx-2">•</span>
                      <span>Color: {item.color}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-1 rounded-full bg-dark-800"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-4 w-4 text-dark-300" />
                        </motion.button>
                        <span className="w-8 text-center text-dark-50">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-1 rounded-full bg-dark-800"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-4 w-4 text-dark-300" />
                        </motion.button>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, color: '#EF4444' }}
                        whileTap={{ scale: 0.95 }}
                        className="text-dark-400 hover:text-red-500"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-dark-50">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-dark-400">${item.price} each</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Shopping Features */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Truck, text: 'Free Shipping on orders over $50' },
                { icon: Shield, text: 'Secure Payment' },
                { icon: Gift, text: 'Gift Wrapping Available' }
              ].map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-900 p-4 rounded-xl text-center border border-dark-800"
                >
                  <Icon className="h-6 w-6 mx-auto text-indigo-400" />
                  <p className="mt-2 text-sm text-dark-300">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            variants={fadeIn}
            className="bg-dark-900 rounded-xl p-6 shadow-lg h-fit border border-dark-800"
          >
            <h2 className="text-lg font-bold text-dark-50">Order Summary</h2>
            
            {/* Promo Code */}
            <div className="mt-6">
              <label htmlFor="promo" className="block text-sm font-medium text-dark-300">
                Promo Code
              </label>
              <div className="mt-1 flex space-x-2">
                <input
                  type="text"
                  id="promo"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 rounded-lg bg-dark-800 border-dark-700 text-dark-50 placeholder-dark-400 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter code"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 bg-indigo-600 text-dark-50 rounded-lg text-sm font-medium hover:bg-indigo-500"
                >
                  Apply
                </motion.button>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-dark-300">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-dark-300">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-dark-300">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="pt-4 flex justify-between font-medium text-lg text-dark-50 border-t border-dark-700">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full py-3 px-8 flex items-center justify-center space-x-2 bg-indigo-600 text-dark-50 rounded-lg font-medium hover:bg-indigo-500"
            >
              <CreditCard className="h-5 w-5" />
              <span>Proceed to Checkout</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            {/* Security Badge */}
            <div className="mt-6 flex items-center justify-center text-sm text-dark-400">
              <Shield className="h-4 w-4 mr-2" />
              <span>Secure checkout powered by Stripe</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default CartPage;