import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Star, 
  Heart, 
  Share2, 
  ShoppingBag, 
  Play,
  Plus,
  Minus,
  Truck,
  Shield,
  RefreshCw
} from 'lucide-react';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: 'Premium Cotton Oversized T-Shirt',
    price: 49.99,
    rating: 4.8,
    reviewCount: 128,
    description: 'Elevate your casual wardrobe with our premium oversized t-shirt. Made from 100% organic cotton, featuring a relaxed fit and superior comfort.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000000', '#FFFFFF', '#8B4513', '#808080'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8'
    ],
    features: [
      'Premium organic cotton',
      'Relaxed fit',
      'Reinforced stitching',
      'Pre-shrunk fabric'
    ],
    reviews: [
      {
        id: 1,
        user: 'Sarah M.',
        rating: 5,
        comment: 'Perfect fit and amazing quality! Will definitely buy more colors.',
        date: '2 days ago',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      },
      {
        id: 2,
        user: 'Michael R.',
        rating: 4,
        comment: 'Great t-shirt, just slightly longer than expected.',
        date: '1 week ago',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
      }
    ],
    videos: [
      {
        id: 1,
        creator: 'FashionStyle',
        thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
        views: '124K'
      },
      {
        id: 2,
        creator: 'TrendSetters',
        thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
        views: '89K'
      }
    ]
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white shadow-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <ChevronLeft 
                className="h-6 w-6 text-gray-600 cursor-pointer" 
                onClick={() => navigate(-1)}
              />
              <span className="text-xl font-bold text-gray-900">Product Details</span>
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <Share2 className="h-6 w-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <Heart className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="pt-20 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="space-y-4"
          >
            <motion.div 
              className="aspect-square rounded-2xl overflow-hidden bg-white"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer ${
                    selectedImage === index ? 'ring-2 ring-indigo-600' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="mt-2 flex items-center space-x-2">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-900">${product.price}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <div className="mt-2 grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`py-2 text-sm font-medium rounded-md ${
                        selectedSize === size
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-gray-900 border hover:border-indigo-600'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-2 flex space-x-2">
                  {product.colors.map((color) => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-gray-200 hover:ring-indigo-600"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="mt-2 flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-gray-100"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </motion.button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-8 flex items-center justify-center space-x-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Add to Cart</span>
              </motion.button>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Truck, text: 'Free Shipping' },
                  { icon: Shield, text: 'Secure Payment' },
                  { icon: RefreshCw, text: 'Easy Returns' }
                ].map(({ icon: Icon, text }) => (
                  <motion.div
                    key={text}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center p-3 bg-white rounded-lg"
                  >
                    <Icon className="h-6 w-6 text-indigo-600" />
                    <span className="mt-1 text-xs text-gray-600">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Description */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {product.features.map((feature) => (
              <motion.div
                key={feature}
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-2"
              >
                <div className="h-2 w-2 bg-indigo-600 rounded-full" />
                <span className="text-gray-600">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          <div className="mt-6 space-y-6">
            {product.reviews.map((review) => (
              <motion.div
                key={review.id}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-6 rounded-xl"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{review.user}</h3>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="mt-1 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Reviews */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900">Video Reviews</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.videos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={`${video.creator}'s review`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="rounded-full bg-white/20 p-4"
                    >
                      <Play className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="font-medium text-gray-900">{video.creator}</h3>
                  <p className="text-sm text-gray-600">{video.views} views</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductPage;