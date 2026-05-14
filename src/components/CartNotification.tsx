import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useShopStore } from '../store/useShopStore';

const CartNotification = () => {
    const { showToast, lastAddedProduct, setShowToast } = useShopStore();

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast, setShowToast]);

    if (!showToast || !lastAddedProduct) return null;

    return (
        <div 
            className="cart-notification-container" 
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 9999,
                animation: 'toastSlideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards'
            }}
        >
            <style>
                {`
                @keyframes toastSlideIn {
                    0% { transform: translateY(100px) scale(0.8); opacity: 0; }
                    100% { transform: translateY(0) scale(1); opacity: 1; }
                }
                @keyframes progressFill {
                    from { width: 100%; }
                    to { width: 0%; }
                }
                .cart-notification-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    border-radius: 20px;
                    padding: 15px;
                    width: 350px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                }
                .progress-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 3px;
                    background: #ff4a17;
                    animation: progressFill 3s linear forwards;
                }
                .product-thumb-container {
                    flex-shrink: 0;
                    width: 70px;
                    height: 70px;
                    border-radius: 12px;
                    overflow: hidden;
                    background: #f8f8f8;
                }
                .notification-content {
                    flex-grow: 1;
                }
                .notification-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 2px;
                }
                .notification-subtitle {
                    font-size: 12px;
                    color: #777;
                    margin-bottom: 8px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 180px;
                }
                .notification-actions {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .view-cart-link {
                    color: #ff4a17;
                    font-size: 13px;
                    font-weight: 600;
                    text-decoration: underline !important;
                }
                .close-toast-btn {
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
                .close-toast-btn:hover {
                    background: #ff4a17;
                    color: #fff;
                }
                `}
            </style>
            <div className="cart-notification-card">
                <div className="product-thumb-container">
                    <img src={lastAddedProduct.image} alt={lastAddedProduct.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="notification-content">
                    <div className="notification-title">Great Choice!</div>
                    <div className="notification-subtitle">{lastAddedProduct.title}</div>
                    <div className="notification-actions">
                        <Link to="/shop" className="view-cart-link" onClick={() => setShowToast(false)}>Go to Cart</Link>
                        <span style={{ fontSize: '12px', color: '#eee' }}>|</span>
                        <Link to="/checkout" style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }} onClick={() => setShowToast(false)}>Checkout Now</Link>
                    </div>
                </div>
                <button className="close-toast-btn" onClick={() => setShowToast(false)}>
                    <i className="fas fa-times" />
                </button>
                <div className="progress-bar"></div>
            </div>
        </div>
    );
};

export default CartNotification;
