import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Share2, MessageCircle, Search, Filter, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Stories from '../components/Stories';

function ExplorePage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Home', 'Sports'];
  
  const videos = [
    {
      id: 1,
      creator: 'Ashley Style',
      description: 'Summer fashion essentials you need! 🌞 #fashion #summer',
      likes: '45.2K',
      comments: '1.2K',
      shares: '8.5K',
      thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
    },
    {
      id: 2,
      creator: 'TechReview',
      description: 'Unboxing the latest smartphone! 📱 #tech #unboxing',
      likes: '32.1K',
      comments: '956',
      shares: '6.2K',
      thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b'
    },
    {
      id: 3,
      creator: 'BeautyGuru',
      description: 'My everyday makeup routine 💄 #beauty #tutorial',
      likes: '28.9K',
      comments: '789',
      shares: '5.1K',
      thumbnail: 'https://images.unsplash.com/photo-1529139574466-0a58b89a70e8'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-dark-950/80 backdrop-blur-md z-50 border-b border-dark-800"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <ChevronLeft 
                className="h-6 w-6 text-dark-300 cursor-pointer" 
                onClick={() => navigate('/')}
              />
              <ShoppingBag className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold text-dark-50">Explore</span>
            </motion.div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 bg-dark-900 border border-dark-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-dark-50 placeholder-dark-400"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-dark-300 hover:text-dark-50"
              >
                <Filter className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Stories */}
      <div className="pt-20">
        <Stories />
      </div>

      {/* Categories */}
      <div className="pb-4 px-4 bg-dark-950">
        <motion.div 
          className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-indigo-600 text-dark-50'
                  : 'bg-dark-900 text-dark-300 hover:bg-dark-800'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Video Feed */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-900 rounded-2xl shadow-lg mb-6 overflow-hidden border border-dark-800"
          >
            <motion.div 
              className="relative aspect-[9/16] bg-dark-950"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={video.thumbnail}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute right-4 bottom-4 space-y-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-10 h-10 bg-dark-950/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-dark-50" />
                  </div>
                  <span className="text-dark-50 text-sm mt-1">{video.likes}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-10 h-10 bg-dark-950/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-dark-50" />
                  </div>
                  <span className="text-dark-50 text-sm mt-1">{video.comments}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-10 h-10 bg-dark-950/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <Share2 className="h-6 w-6 text-dark-50" />
                  </div>
                  <span className="text-dark-50 text-sm mt-1">{video.shares}</span>
                </motion.button>
              </div>
            </motion.div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-dark-50">{video.creator}</h3>
                  <p className="mt-1 text-dark-300">{video.description}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-indigo-600 text-dark-50 rounded-full text-sm font-medium hover:bg-indigo-500"
                >
                  Follow
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;