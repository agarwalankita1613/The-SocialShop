import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Play, Heart, Users, Star, ChevronRight, Search, User } from 'lucide-react';

function LandingPage() {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
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
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-dark-950/80 backdrop-blur-md z-50 border-b border-dark-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ShoppingBag className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-dark-50">SocialShop</span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                className="text-dark-300 hover:text-dark-50"
                onClick={() => navigate('/explore')}
                style={{ cursor: 'pointer' }}
              >
                Explore
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                className="text-dark-300 hover:text-dark-50"
                href="#"
              >
                Shop
              </motion.a>
              <motion.div 
                className="relative group"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="text-dark-300 hover:text-dark-50 flex items-center space-x-1"
                >
                  <span>Creators</span>
                </motion.button>
                <div className="absolute left-0 w-48 mt-2 py-2 bg-dark-950 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <motion.a
                    whileHover={{ x: 5 }}
                    className="flex items-center px-4 py-2 text-sm text-dark-300 hover:bg-dark-900 hover:text-dark-50"
                    onClick={() => navigate('/profile')}
                    style={{ cursor: 'pointer' }}
                  >
                    <User className="h-4 w-4 mr-2" />
                    <span>My Profile</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 5 }}
                    className="block px-4 py-2 text-sm text-dark-300 hover:bg-dark-900 hover:text-dark-50"
                    href="#"
                  >
                    Top Creators
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 5 }}
                    className="block px-4 py-2 text-sm text-dark-300 hover:bg-dark-900 hover:text-dark-50"
                    href="#"
                  >
                    Featured Shops
                  </motion.a>
                  <motion.hr className="my-2 border-dark-800" />
                  <motion.a
                    whileHover={{ x: 5 }}
                    className="block px-4 py-2 text-sm text-dark-300 hover:bg-dark-900 hover:text-dark-50"
                    href="#"
                  >
                    Become a Creator
                  </motion.a>
                </div>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-dark-50 px-4 py-2 rounded-lg hover:bg-indigo-500"
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-dark-950 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeIn}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold text-dark-50 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Shop. Socialize. <span className="text-indigo-400">Influence.</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-dark-300 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Join the next generation of social commerce where shopping meets entertainment.
              Discover trending products, connect with creators, and shop seamlessly.
            </motion.p>
            <motion.div 
              className="mt-10 flex justify-center gap-4"
              variants={fadeIn}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-dark-50 px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-500 flex items-center"
                onClick={() => navigate('/explore')}
              >
                Explore Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dark-900 text-dark-50 px-8 py-3 rounded-lg text-lg font-medium border-2 border-dark-800 hover:border-dark-700"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-12 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { icon: ShoppingBag, count: '10K+', label: 'Products' },
              { icon: Users, count: '1M+', label: 'Active Users' },
              { icon: Star, count: '50K+', label: 'Creators' },
              { icon: Heart, count: '500K+', label: 'Happy Customers' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon className="h-8 w-8 text-indigo-400" />
                </motion.div>
                <motion.p 
                  className="mt-2 text-3xl font-bold text-dark-50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.count}
                </motion.p>
                <p className="text-dark-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 bg-dark-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-dark-50 text-center mb-12"
          >
            Trending Products
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-dark-900 rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1523275335684-37898b6baf30' : 
                    item === 2 ? '1505740420928-5e560c06d30e' : '1542291026-7eec264c27ff'}`}
                  alt="Product"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-dark-50">
                    {item === 1 ? 'Premium Headphones' : item === 2 ? 'Smart Watch' : 'Running Shoes'}
                  </h3>
                  <p className="mt-2 text-dark-300">Starting from $199</p>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-indigo-600 text-dark-50 px-4 py-2 rounded-lg hover:bg-indigo-500"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Video Preview Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-dark-50">Watch & Shop</h2>
            <p className="mt-4 text-dark-300">Discover products through engaging creator content</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="aspect-w-9 aspect-h-16 rounded-lg overflow-hidden bg-dark-900">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1515886657613-9f3515b0c78f' : 
                      item === 2 ? '1483985988355-763728e1935b' : '1529139574466-0a58b89a70e8'}`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="rounded-full bg-white/20 p-4"
                    >
                      <Play className="h-12 w-12 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-dark-50">Style Guide: Summer 2024</h3>
                  <p className="mt-1 text-sm text-dark-300">By Sarah Style</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 bg-indigo-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-dark-50"
          >
            Ready to Start Shopping?
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-xl text-indigo-100"
          >
            Join thousands of happy customers today.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-dark-950 text-indigo-400 px-8 py-3 rounded-lg text-lg font-medium hover:bg-dark-900"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-dark-950 text-dark-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Company',
                links: ['About', 'Careers', 'Press']
              },
              {
                title: 'Support',
                links: ['Help Center', 'Safety Center', 'Community']
              },
              {
                title: 'Legal',
                links: ['Privacy', 'Terms', 'Cookie Policy']
              },
              {
                title: 'Social',
                links: ['Twitter', 'Instagram', 'Facebook']
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a href="#" className="text-dark-400 hover:text-dark-50">
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-dark-800 text-center text-dark-400"
          >
            <p>&copy; 2024 SocialShop. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;