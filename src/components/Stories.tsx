import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import useStore from '../store/useStore';
import CreateStory from './CreateStory';

function Stories() {
  const { stories, viewStory } = useStore();

  return (
    <div className="py-4 px-4 border-b border-dark-800">
      <div className="flex space-x-4 overflow-x-auto">
        <CreateStory />
        
        {stories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center space-y-1 cursor-pointer"
            onClick={() => viewStory(story.id)}
          >
            <div className={`relative rounded-full p-0.5 ${
              !story.hasViewed ? 'bg-gradient-to-tr from-indigo-600 to-pink-600' : 'bg-dark-800'
            }`}>
              <div className="bg-dark-950 p-0.5 rounded-full">
                <div className="relative w-16 h-16">
                  <img
                    src={story.imageUrl}
                    alt="Story"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs text-dark-300 truncate w-16 text-center">
              {story.userId === 'currentUser' ? 'Your Story' : story.userId}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Stories;