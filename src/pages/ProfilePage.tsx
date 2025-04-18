import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ChevronLeft,
  Settings,
  Grid,
  Users,
  UserPlus,
  Heart,
  Share2,
  MessageCircle,
  Edit3,
  MapPin,
  Link as LinkIcon,
  Calendar,
  ShoppingBag,
  Bookmark,
  Star,
  Clock,
  Package
} from 'lucide-react';

function ProfilePage() {
  const navigate = useNavigate();
  const { tab = 'posts' } = useParams();
  const [activeTab, setActiveTab] = useState(tab);

  const user = {
    name: 'Sarah Anderson',
    username: '@sarahanderson',
    bio: 'Fashion enthusiast & lifestyle creator 🌟 Sharing daily inspiration and style tips',
    location: 'New York, NY',
    website: 'www.sarahstyle.com',
    joinDate: 'Joined March 2024',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    coverPhoto: 'https://images.unsplash.com/photo-1504672281656-e4981d70414b',
    stats: {
      posts: 248,
      followers: '56.8K',
      following: 892,
      friends: 324
    }
  };

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      likes: '2.4K',
      comments: 89
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
      likes: '3.1K',
      comments: 156
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1529139574466-0a58b89a70e8',
      likes: '1.8K',
      comments: 67
    }
  ];

  const savedItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105',
      title: 'Summer Collection',
      price: '$89.99'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908',
      title: 'Vintage Accessories',
      price: '$45.00'
    }
  ];

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-03-15',
      status: 'Delivered',
      items: 3,
      total: '$245.97'
    },
    {
      id: 'ORD-002',
      date: '2024-03-10',
      status: 'In Transit',
      items: 2,
      total: '$178.50'
    }
  ];

  const followers = [
    {
      id: 1,
      name: 'Emma Wilson',
      username: '@emmastyle',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      isFollowing: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      username: '@mikedesigns',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      isFollowing: false
    }
  ];

  const friends = [
    {
      id: 1,
      name: 'Jessica Lee',
      username: '@jesslee',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      mutualFriends: 15
    },
    {
      id: 2,
      name: 'David Kim',
      username: '@davidk',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      mutualFriends: 8
    }
  ];

  const reviews = [
    {
      id: 1,
      product: 'Vintage Denim Jacket',
      rating: 5,
      comment: 'Amazing quality and perfect fit!',
      date: '2024-03-12',
      image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef'
    },
    {
      id: 2,
      product: 'Summer Dress Collection',
      rating: 4,
      comment: 'Beautiful designs, slightly long delivery time',
      date: '2024-03-08',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446'
    }
  ];

  const tabContent = {
    posts: (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {posts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square rounded-xl overflow-hidden group"
          >
            <img
              src={post.image}
              alt="Post"
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-dark-950/50 flex items-center justify-center space-x-6 text-dark-50"
            >
              <div className="flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-2" />
                <span>{post.comments}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    ),
    saved: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-4"
      >
        {savedItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.01 }}
            className="bg-dark-900 rounded-xl overflow-hidden border border-dark-800"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1 p-4">
                <h3 className="font-medium text-dark-50">{item.title}</h3>
                <p className="text-dark-400">{item.price}</p>
              </div>
              <div className="p-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-dark-800 text-dark-300"
                >
                  <ShoppingBag className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    orders: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-4"
      >
        {orders.map((order) => (
          <motion.div
            key={order.id}
            whileHover={{ scale: 1.01 }}
            className="bg-dark-900 p-4 rounded-xl border border-dark-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-dark-50">{order.id}</h3>
                <p className="text-sm text-dark-400">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-dark-50">{order.total}</p>
                <p className="text-sm text-dark-400">{order.items} items</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center text-sm">
                <Package className="h-4 w-4 mr-1 text-dark-400" />
                <span className={`${
                  order.status === 'Delivered' ? 'text-green-500' : 'text-indigo-400'
                }`}>{order.status}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm text-indigo-400 hover:text-indigo-300"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    followers: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-4"
      >
        {followers.map((follower) => (
          <motion.div
            key={follower.id}
            whileHover={{ scale: 1.01 }}
            className="bg-dark-900 p-4 rounded-xl flex items-center justify-between border border-dark-800"
          >
            <div className="flex items-center space-x-4">
              <img
                src={follower.avatar}
                alt={follower.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-dark-50">{follower.name}</h3>
                <p className="text-sm text-dark-400">{follower.username}</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                follower.isFollowing
                  ? 'bg-dark-800 text-dark-50'
                  : 'bg-indigo-600 text-dark-50'
              }`}
            >
              {follower.isFollowing ? 'Following' : 'Follow'}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    ),
    friends: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-4"
      >
        {friends.map((friend) => (
          <motion.div
            key={friend.id}
            whileHover={{ scale: 1.01 }}
            className="bg-dark-900 p-4 rounded-xl flex items-center justify-between border border-dark-800"
          >
            <div className="flex items-center space-x-4">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-dark-50">{friend.name}</h3>
                <p className="text-sm text-dark-400">
                  {friend.mutualFriends} mutual friends
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-dark-800"
              >
                <MessageCircle className="h-5 w-5 text-dark-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-dark-800"
              >
                <UserPlus className="h-5 w-5 text-dark-300" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    reviews: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-4"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            whileHover={{ scale: 1.01 }}
            className="bg-dark-900 p-4 rounded-xl border border-dark-800"
          >
            <div className="flex items-start space-x-4">
              <img
                src={review.image}
                alt={review.product}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-dark-50">{review.product}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-dark-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-dark-300">{review.comment}</p>
                <div className="mt-2 flex items-center text-xs text-dark-400">
                  <Clock className="h-3 w-3 mr-1" />
                  {review.date}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  };

  const tabs = [
    { id: 'posts', label: 'Posts', icon: Grid },
    { id: 'saved', label: 'Saved', icon: Bookmark },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'followers', label: 'Followers', icon: Users },
    { id: 'friends', label: 'Friends', icon: UserPlus },
    { id: 'reviews', label: 'Reviews', icon: Star }
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
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <ChevronLeft className="h-6 w-6 text-dark-300" />
              </motion.div>
              <h1 className="text-xl font-bold text-dark-50">Profile</h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-dark-800"
            >
              <Settings className="h-6 w-6 text-dark-300" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Cover Photo */}
      <div className="relative pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-48 md:h-64 overflow-hidden"
        >
          <img
            src={user.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Profile Info */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative -mt-20 pb-4">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-black object-cover"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-0 right-0 p-2 rounded-full bg-indigo-600 text-dark-50"
              >
                <Edit3 className="h-4 w-4" />
              </motion.button>
            </motion.div>

            <div className="mt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-dark-50">{user.name}</h2>
                  <p className="text-dark-400">{user.username}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-indigo-600 text-dark-50 rounded-lg font-medium"
                >
                  Edit Profile
                </motion.button>
              </div>

              <p className="mt-4 text-dark-300">{user.bio}</p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-dark-400">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {user.location}
                </div>
                <div className="flex items-center">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  <a href={`https://${user.website}`} className="text-indigo-400 hover:text-indigo-300">
                    {user.website}
                  </a>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {user.joinDate}
                </div>
              </div>

              <div className="mt-6 flex space-x-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-dark-50">{user.stats.posts}</div>
                  <div className="text-sm text-dark-400">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-dark-50">{user.stats.followers}</div>
                  <div className="text-sm text-dark-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-dark-50">{user.stats.following}</div>
                  <div className="text-sm text-dark-400">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-dark-50">{user.stats.friends}</div>
                  <div className="text-sm text-dark-400">Friends</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-dark-800 overflow-x-auto">
            <div className="flex space-x-8 min-w-max">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-4 flex items-center space-x-2 relative ${
                    activeTab === tab.id
                      ? 'text-indigo-400'
                      : 'text-dark-400 hover:text-dark-50'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="py-6">
            <AnimatePresence mode="wait">
              {tabContent[activeTab as keyof typeof tabContent]}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;