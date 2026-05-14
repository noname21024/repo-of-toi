import { Link } from 'react-router-dom';
import { useShopStore } from '../store/useShopStore';

const SidemenuWrapperCart = () => {
    const { cart, removeFromCart, getCartTotal } = useShopStore();

    return (
        <div className="sidemenu-wrapper-cart">
            <div className="sidemenu-content">
                <div className="widget widget-shopping-cart">
                    <h4>My cart</h4>
                    <div className="sidemenu-cart-close" onClick={() => document.querySelector('.sidemenu-wrapper-cart')?.classList.remove('active')}>
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
                                        <span><strong>Subtotal:</strong></span> <span className="amount"><span><span className="currency">$</span>{getCartTotal().toFixed(2)}</span></span>
                                    </div>
                                </div>
                                <div className="cart-button-box">
                                    <Link to="/checkout" className="theme-btn style-one">Proceed to checkout</Link>
                                </div>
                            </>
                        ) : (
                            <div className="empty-cart-message" style={{ padding: '20px', textAlign: 'center' }}>
                                <p>Your cart is empty.</p>
                                <Link to="/shop" className="theme-btn style-one mt-20">Shop Now</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidemenuWrapperCart;
