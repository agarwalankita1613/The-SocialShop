import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import { MessageCircle, X, Send, Image, Smile } from 'lucide-react';
import useStore from '../store/useStore';

function DirectMessages() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { messages, activeChat, unreadCount, addMessage, markMessageAsRead, setActiveChat } = useStore();

  const handleSendMessage = () => {
    if (message.trim() && activeChat) {
      addMessage({
        senderId: 'currentUser',
        receiverId: activeChat,
        content: message,
        read: false,
      });
      setMessage('');
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 right-4 p-3 bg-indigo-600 rounded-full text-dark-50 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-dark-50 rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-dark-950 rounded-xl shadow-xl w-full max-w-lg h-[600px] flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-dark-800">
                <h2 className="text-xl font-bold text-dark-50">Messages</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-dark-800"
                >
                  <X className="h-6 w-6 text-dark-300" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      msg.senderId === 'currentUser' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.senderId === 'currentUser'
                          ? 'bg-indigo-600 text-dark-50'
                          : 'bg-dark-800 text-dark-50'
                      }`}
                    >
                      <p>{msg.content}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {formatDistanceToNow(msg.timestamp, { addSuffix: true })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 border-t border-dark-800">
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-dark-800 text-dark-300"
                  >
                    <Image className="h-6 w-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-dark-800 text-dark-300"
                  >
                    <Smile className="h-6 w-6" />
                  </motion.button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-dark-800 text-dark-50 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSendMessage}
                    className="p-2 rounded-full bg-indigo-600 text-dark-50"
                  >
                    <Send className="h-6 w-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default DirectMessages;