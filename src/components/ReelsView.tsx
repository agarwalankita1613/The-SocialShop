import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Music2 } from 'lucide-react';
import useStore from '../store/useStore';

function ReelsView() {
  const { reels, toggleReelLike } = useStore();
  const [activeReel, setActiveReel] = useState(0);

  return (
    <div className="h-[calc(100vh-4rem)] bg-black overflow-hidden">
      <div className="relative h-full">
        {reels.map((reel, index) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeReel === index ? 1 : 0 }}
            className={`absolute inset-0 ${activeReel === index ? 'z-10' : 'z-0'}`}
          >
            <div className="relative h-full">
              <img
                src={reel.thumbnail}
                alt="Reel thumbnail"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50" />

              {/* Reel Info */}
              <div className="absolute bottom-20 left-4 right-12 text-dark-50 z-20">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full border-2 border-dark-50"
                  />
                  <span className="font-medium">username</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-2 px-4 py-1 bg-indigo-600 rounded-full text-sm font-medium"
                  >
                    Follow
                  </motion.button>
                </div>
                <p className="mt-4">{reel.caption}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <Music2 className="h-4 w-4" />
                  <span className="text-sm">Original Audio</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute right-4 bottom-32 space-y-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleReelLike(reel.id)}
                  className="flex flex-col items-center"
                >
                  <div className={`p-2 rounded-full bg-dark-800 ${reel.hasLiked ? 'text-red-500' : 'text-dark-50'}`}>
                    <Heart className="h-8 w-8" fill={reel.hasLiked ? 'currentColor' : 'none'} />
                  </div>
                  <span className="text-dark-50 text-sm mt-1">{reel.likes}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <div className="p-2 rounded-full bg-dark-800 text-dark-50">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <span className="text-dark-50 text-sm mt-1">{reel.comments}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <div className="p-2 rounded-full bg-dark-800 text-dark-50">
                    <Share2 className="h-8 w-8" />
                  </div>
                  <span className="text-dark-50 text-sm mt-1">{reel.shares}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Navigation Overlay */}
        <div className="absolute inset-0 z-20" onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          if (x < rect.width / 2 && activeReel > 0) {
            setActiveReel(activeReel - 1);
          } else if (x >= rect.width / 2 && activeReel < reels.length - 1) {
            setActiveReel(activeReel + 1);
          }
        }} />
      </div>
    </div>
  );
}

export default ReelsView;