import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

interface Story {
  id: string;
  userId: string;
  imageUrl: string;
  timestamp: Date;
  views: number;
  hasViewed: boolean;
}

interface Reel {
  id: string;
  userId: string;
  videoUrl: string;
  thumbnail: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  hasLiked: boolean;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  userId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

interface StoreState {
  // User
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  
  // Messages
  messages: Message[];
  activeChat: string | null;
  unreadCount: number;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  markMessageAsRead: (messageId: string) => void;
  setActiveChat: (userId: string | null) => void;
  
  // Stories
  stories: Story[];
  addStory: (story: Omit<Story, 'id' | 'timestamp' | 'views' | 'hasViewed'>) => void;
  viewStory: (storyId: string) => void;
  
  // Reels
  reels: Reel[];
  addReel: (reel: Omit<Reel, 'id' | 'likes' | 'comments' | 'shares' | 'hasLiked'>) => void;
  toggleReelLike: (reelId: string) => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Notifications
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markNotificationAsRead: (notificationId: string) => void;
  clearNotifications: () => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // User
      currentUser: null,
      setCurrentUser: (user) => set({ currentUser: user }),

      // Messages
      messages: [
        {
          id: '1',
          senderId: 'user1',
          receiverId: 'currentUser',
          content: 'Hey! Love your latest post 😊',
          timestamp: new Date(Date.now() - 1000 * 60 * 5),
          read: false,
        },
        {
          id: '2',
          senderId: 'user2',
          receiverId: 'currentUser',
          content: 'Check out my new collection!',
          timestamp: new Date(Date.now() - 1000 * 60 * 30),
          read: false,
        },
      ],
      activeChat: null,
      unreadCount: 2,

      addMessage: (message) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              ...message,
              id: Math.random().toString(36).substr(2, 9),
              timestamp: new Date(),
            },
          ],
          unreadCount: state.unreadCount + (message.receiverId === 'currentUser' ? 1 : 0),
        })),

      markMessageAsRead: (messageId) =>
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === messageId ? { ...msg, read: true } : msg
          ),
          unreadCount: state.unreadCount - 1,
        })),

      setActiveChat: (userId) =>
        set(() => ({
          activeChat: userId,
        })),

      // Stories
      stories: [
        {
          id: '1',
          userId: 'user1',
          imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
          timestamp: new Date(),
          views: 124,
          hasViewed: false,
        },
        {
          id: '2',
          userId: 'user2',
          imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
          timestamp: new Date(),
          views: 89,
          hasViewed: false,
        },
      ],

      addStory: (story) =>
        set((state) => ({
          stories: [
            ...state.stories,
            {
              ...story,
              id: Math.random().toString(36).substr(2, 9),
              timestamp: new Date(),
              views: 0,
              hasViewed: false,
            },
          ],
        })),

      viewStory: (storyId) =>
        set((state) => ({
          stories: state.stories.map((story) =>
            story.id === storyId
              ? { ...story, views: story.views + 1, hasViewed: true }
              : story
          ),
        })),

      // Reels
      reels: [
        {
          id: '1',
          userId: 'user1',
          videoUrl: 'https://example.com/reel1.mp4',
          thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
          caption: 'Summer vibes! 🌞 #fashion #summer',
          likes: 1234,
          comments: 89,
          shares: 45,
          hasLiked: false,
        },
        {
          id: '2',
          userId: 'user2',
          videoUrl: 'https://example.com/reel2.mp4',
          thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
          caption: 'New collection drop! 🔥 #style #fashion',
          likes: 2345,
          comments: 156,
          shares: 78,
          hasLiked: false,
        },
      ],

      addReel: (reel) =>
        set((state) => ({
          reels: [
            ...state.reels,
            {
              ...reel,
              id: Math.random().toString(36).substr(2, 9),
              likes: 0,
              comments: 0,
              shares: 0,
              hasLiked: false,
            },
          ],
        })),

      toggleReelLike: (reelId) =>
        set((state) => ({
          reels: state.reels.map((reel) =>
            reel.id === reelId
              ? {
                  ...reel,
                  likes: reel.hasLiked ? reel.likes - 1 : reel.likes + 1,
                  hasLiked: !reel.hasLiked,
                }
              : reel
          ),
        })),

      // Cart
      cart: [],
      addToCart: (item) =>
        set((state) => ({
          cart: [
            ...state.cart,
            {
              ...item,
              id: Math.random().toString(36).substr(2, 9),
            },
          ],
        })),

      removeFromCart: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId),
        })),

      updateCartItemQuantity: (itemId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        })),

      clearCart: () => set({ cart: [] }),

      // Notifications
      notifications: [],
      addNotification: (notification) =>
        set((state) => ({
          notifications: [
            {
              ...notification,
              id: Math.random().toString(36).substr(2, 9),
              timestamp: new Date(),
              read: false,
            },
            ...state.notifications,
          ],
        })),

      markNotificationAsRead: (notificationId) =>
        set((state) => ({
          notifications: state.notifications.map((notification) =>
            notification.id === notificationId
              ? { ...notification, read: true }
              : notification
          ),
        })),

      clearNotifications: () => set({ notifications: [] }),
    }),
    {
      name: 'social-shop-storage',
      partialize: (state) => ({
        currentUser: state.currentUser,
        cart: state.cart,
        notifications: state.notifications,
      }),
    }
  )
);

export default useStore;