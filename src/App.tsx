import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import SidemenuWrapperCart from './components/SidemenuWrapperCart';
import CartNotification from './components/CartNotification';
import WishlistNotification from './components/WishlistNotification';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import FQAPage from './pages/FQAPage';
import WishlistPage from './pages/WishlistPage';
import ContactPage from './pages/ContactPage';
import './App.css';

declare global {
  interface Window {
    initPescoTheme: () => void;
    destroyPescoTheme: () => void;
  }
}

const RouteTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);

    // Cleanup old theme instances
    if (window.destroyPescoTheme) {
      window.destroyPescoTheme();
    }

    // Close any open menus/overlays on route change
    document.querySelector('.sidemenu-wrapper-cart')?.classList.remove('info-open');
    document.querySelector('.sidemenu-wrapper-cart')?.classList.remove('active');
    document.querySelector('.offcanvas__overlay')?.classList.remove('overlay-open');

    // Re-initialize theme and AOS on every route change
    if (window.initPescoTheme) {
      const timer = setTimeout(() => {
        window.initPescoTheme();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <RouteTracker />
      <Preloader />
      <div className="offcanvas__overlay"></div>
      <SidemenuWrapperCart />
      <Header />
      <CartNotification />
      <WishlistNotification />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-detail/:id" element={<BlogDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/faq" element={<FQAPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
