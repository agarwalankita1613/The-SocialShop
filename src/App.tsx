import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import ReelsView from './components/ReelsView';
import DirectMessages from './components/DirectMessages';
import Notifications from './components/Notifications';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <div className="pb-16">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile/:tab?" element={<ProfilePage />} />
          <Route path="/reels" element={<ReelsView />} />
        </Routes>
        <DirectMessages />
        <Notifications />
        <BottomNav />
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#171717',
              color: '#ffffff',
              border: '1px solid #262626',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;