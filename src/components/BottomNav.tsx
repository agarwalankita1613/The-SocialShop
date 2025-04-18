import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Film, Heart, User } from 'lucide-react';
import useStore from '../store/useStore';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const unreadCount = useStore((state) => state.unreadCount);

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Search, path: '/explore', label: 'Search' },
    { icon: Film, path: '/reels', label: 'Reels' },
    { icon: Heart, path: '/notifications', label: 'Notifications' },
    { icon: User, path: '/profile', label: 'Profile' }
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-dark-950/80 backdrop-blur-md border-t border-dark-800 z-50"
    >
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {navItems.map((item) => (
            <motion.button
              key={item.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full relative ${
                location.pathname === item.path ? 'text-indigo-400' : 'text-dark-300'
              }`}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="h-6 w-6" />
              {item.label === 'Notifications' && unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-dark-50 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default BottomNav;