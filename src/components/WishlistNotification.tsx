import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useShopStore } from '../store/useShopStore';

const WishlistNotification = () => {
    const { showWishlistToast, lastWishlistProduct, setShowWishlistToast } = useShopStore();

    useEffect(() => {
        if (showWishlistToast) {
            const timer = setTimeout(() => setShowWishlistToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showWishlistToast, setShowWishlistToast]);

    if (!showWishlistToast || !lastWishlistProduct) return null;

    return (
        <div 
            className="wishlist-notification-container" 
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 9999,
                animation: 'wishlistToastSlideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards'
            }}
        >
            <style>
                {`
                @keyframes wishlistToastSlideIn {
                    0% { transform: translateY(100px) scale(0.8); opacity: 0; }
                    100% { transform: translateY(0) scale(1); opacity: 1; }
                }
                @keyframes wishlistProgressFill {
                    from { width: 100%; }
                    to { width: 0%; }
                }
                .wishlist-notification-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 77, 77, 0.2);
                    border-radius: 20px;
                    padding: 15px;
                    width: 350px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    box-shadow: 0 20px 40px rgba(255, 77, 77, 0.1);
                    position: relative;
                    overflow: hidden;
                }
                .wishlist-progress-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 3px;
                    background: #ff4d4d;
                    animation: wishlistProgressFill 3s linear forwards;
                }
                .wishlist-product-thumb {
                    flex-shrink: 0;
                    width: 70px;
                    height: 70px;
                    border-radius: 12px;
                    overflow: hidden;
                    background: #f8f8f8;
                    border: 1px solid #eee;
                }
                .wishlist-content {
                    flex-grow: 1;
                }
                .wishlist-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 2px;
                }
                .wishlist-subtitle {
                    font-size: 12px;
                    color: #777;
                    margin-bottom: 8px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 180px;
                }
                .wishlist-actions {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .view-wishlist-link {
                    color: #ff4d4d;
                    font-size: 13px;
                    font-weight: 600;
                    text-decoration: underline !important;
                }
                .wishlist-close-btn {
                    background: #f5f5f5;
                    border: none;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 10px;
                    color: #999;
                    transition: all 0.3s;
                }
                .wishlist-close-btn:hover {
                    background: #ff4d4d;
                    color: #fff;
                }
                `}
            </style>
            <div className="wishlist-notification-card">
                <div className="wishlist-product-thumb">
                    <img src={lastWishlistProduct.image} alt={lastWishlistProduct.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="wishlist-content">
                    <div className="wishlist-title">Added to Wishlist! ❤️</div>
                    <div className="wishlist-subtitle">{lastWishlistProduct.title}</div>
                    <div className="wishlist-actions">
                        <Link to="/wishlist" className="view-wishlist-link" onClick={() => setShowWishlistToast(false)}>View Wishlist</Link>
                        <span style={{ fontSize: '12px', color: '#eee' }}>|</span>
                        <Link to="/shop" style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }} onClick={() => setShowWishlistToast(false)}>Continue Shopping</Link>
                    </div>
                </div>
                <button className="wishlist-close-btn" onClick={() => setShowWishlistToast(false)}>
                    <i className="fas fa-times" />
                </button>
                <div className="wishlist-progress-bar"></div>
            </div>
        </div>
    );
};

export default WishlistNotification;
