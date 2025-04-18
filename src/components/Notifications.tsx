import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import useStore from '../store/useStore';

function Notifications() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { notifications, markNotificationAsRead, clearNotifications } = useStore();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 right-20 p-3 bg-indigo-600 rounded-full text-dark-50 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-dark-50 rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-900 rounded-xl max-w-md w-full shadow-xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-dark-800">
                <h2 className="text-xl font-bold text-dark-50">Notifications</h2>
                <div className="flex items-center space-x-2">
                  {notifications.length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={clearNotifications}
                      className="text-sm text-dark-400 hover:text-dark-300"
                    >
                      Clear all
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full hover:bg-dark-800"
                  >
                    <X className="h-6 w-6 text-dark-300" />
                  </motion.button>
                </div>
              </div>

              <div className="max-h-[70vh] overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center text-dark-400">
                    No notifications yet
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 border-b border-dark-800 hover:bg-dark-800/50 cursor-pointer ${
                        !notification.read ? 'bg-dark-800/20' : ''
                      }`}
                      onClick={() => markNotificationAsRead(notification.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${
                          notification.type === 'like' ? 'bg-red-500/20 text-red-500' :
                          notification.type === 'comment' ? 'bg-blue-500/20 text-blue-500' :
                          notification.type === 'follow' ? 'bg-green-500/20 text-green-500' :
                          'bg-purple-500/20 text-purple-500'
                        }`}>
                          {notification.type === 'like' && '❤️'}
                          {notification.type === 'comment' && '💬'}
                          {notification.type === 'follow' && '👥'}
                          {notification.type === 'mention' && '@'}
                        </div>
                        <div className="flex-1">
                          <p className="text-dark-50">{notification.content}</p>
                          <p className="text-sm text-dark-400 mt-1">
                            {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Notifications;