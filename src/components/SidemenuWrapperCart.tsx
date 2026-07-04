import { Link } from 'react-router-dom';
import { useShopStore } from '../store/useShopStore';

const SidemenuWrapperCart = () => {
    const { cart, removeFromCart, getCartTotal } = useShopStore();

    return (
        <div className="sidemenu-wrapper-cart">
            <div className="sidemenu-content">
                <div className="widget widget-shopping-cart">
                    <h4>Giỏ hàng của tôi</h4>
                    <div className="sidemenu-cart-close">
                        <i className="far fa-times" />
                    </div>
                    <div className="widget-shopping-cart-content">
                        {cart.length > 0 ? (
                            <>
                                <ul className="pesco-mini-cart-list">
                                    {cart.map((item) => (
                                        <li className="sidebar-cart-item" key={item.id}>
                                            <Link to="#" className="remove-cart" onClick={(e) => { e.preventDefault(); removeFromCart(item.id); }}>
                                                <i className="far fa-trash-alt" />
                                            </Link>
                                            <Link to={`/product-detail/${item.id}`}>
                                                <img src={item.image} alt={item.title} />
                                                {item.title}
                                            </Link>
                                            <span className="quantity">{item.quantity} × <span><span className="currency">$</span>{item.newPrice}</span></span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="cart-mini-total">
                                    <div className="cart-total">
                                        <span><strong>Tạm tính:</strong></span> <span className="amount"><span><span className="currency">$</span>{getCartTotal().toFixed(2)}</span></span>
                                    </div>
                                </div>
                                <div className="cart-button-box" style={{ display: 'flex', gap: '10px' }}>
                                    <Link to="/cart" className="theme-btn style-one" style={{ flex: 1, padding: '12px 5px', fontSize: '13px', textAlign: 'center' }}>Xem giỏ hàng</Link>
                                    <Link to="/checkout" className="theme-btn style-one" style={{ flex: 1, padding: '12px 5px', fontSize: '13px', textAlign: 'center' }}>Thanh toán</Link>
                                </div>
                            </>
                        ) : (
                            <div className="empty-cart-message" style={{ padding: '20px', textAlign: 'center' }}>
                                <p>Giỏ hàng của bạn đang trống.</p>
                                <Link to="/shop" className="theme-btn style-one mt-20">Mua sắm ngay</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidemenuWrapperCart;
