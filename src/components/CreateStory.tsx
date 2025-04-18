import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Image as ImageIcon, Sparkles, Clock, Send } from 'lucide-react';
import useStore from '../store/useStore';

function CreateStory() {
  const [isOpen, setIsOpen] = useState(false);
  const [preview, setPreview] = useState('');
  const [duration, setDuration] = useState(24); // hours
  const { addStory } = useStore();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (preview) {
      addStory({
        userId: 'currentUser',
        imageUrl: preview
      });
      setIsOpen(false);
      setPreview('');
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="relative w-16 h-16"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-600 rounded-full p-0.5">
          <div className="bg-dark-950 p-0.5 rounded-full h-full">
            <div className="bg-dark-800 rounded-full h-full flex items-center justify-center">
              <Plus className="h-6 w-6 text-dark-50" />
            </div>
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-900 rounded-xl max-w-lg w-full overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-dark-800">
                <h2 className="text-xl font-bold text-dark-50">Create Story</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-dark-800"
                >
                  <X className="h-6 w-6 text-dark-300" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-4">
                {!preview ? (
                  <div className="space-y-4">
                    <label className="block w-full aspect-square rounded-lg border-2 border-dashed border-dark-700 hover:border-indigo-500 transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <div className="h-full flex flex-col items-center justify-center text-dark-400">
                        <ImageIcon className="h-12 w-12 mb-2" />
                        <p>Click to upload image</p>
                      </div>
                    </label>

                    <div className="flex justify-center space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 rounded-xl bg-dark-800 text-dark-50 flex flex-col items-center"
                      >
                        <Camera className="h-6 w-6 mb-2" />
                        <span>Camera</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 rounded-xl bg-dark-800 text-dark-50 flex flex-col items-center"
                      >
                        <Sparkles className="h-6 w-6 mb-2" />
                        <span>Effects</span>
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <img
                        src={preview}
                        alt="Story preview"
                        className="w-full h-full object-cover"
                      />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setPreview('')}
                        className="absolute top-2 right-2 p-2 rounded-full bg-dark-900/80 text-dark-50"
                      >
                        <X className="h-5 w-5" />
                      </motion.button>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-dark-400" />
                      <select
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="bg-dark-800 text-dark-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="24">24 hours</option>
                        <option value="48">48 hours</option>
                        <option value="72">72 hours</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-dark-800">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={!preview}
                  className="w-full py-3 flex items-center justify-center space-x-2 bg-indigo-600 text-dark-50 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  <span>Share Story</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CreateStory;