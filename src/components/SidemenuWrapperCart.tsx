import { Link } from 'react-router-dom';

const SidemenuWrapperCart = () => {
    return (
        <div className="sidemenu-wrapper-cart">
            <div className="sidemenu-content">
                <div className="widget widget-shopping-cart">
                    <h4>My cart</h4>
                    <div className="sidemenu-cart-close"><i className="far fa-times" /></div>
                    <div className="widget-shopping-cart-content">
                        <ul className="pesco-mini-cart-list">
                            <li className="sidebar-cart-item">
                                <Link to="#" className="remove-cart"><i className="far fa-trash-alt" /></Link>
                                <Link to="#">
                                    <img src="/images/cart-1.jpg" alt="cart image" />
                                    leggings with mesh panels
                                </Link>
                                <span className="quantity">1 × <span><span className="currency">$</span>940.00</span></span>
                            </li>
                            <li className="sidebar-cart-item">
                                <Link to="#" className="remove-cart"><i className="far fa-trash-alt" /></Link>
                                <Link to="#">
                                    <img src="/images/cart-2.jpg" alt="cart image" />
                                    Summer dress with belt
                                </Link>
                                <span className="quantity">1 × <span><span className="currency">$</span>940.00</span></span>
                            </li>
                            <li className="sidebar-cart-item">
                                <Link to="#" className="remove-cart"><i className="far fa-trash-alt" /></Link>
                                <Link to="#">
                                    <img src="/images/cart-3.jpg" alt="cart image" />
                                    Floral print sundress
                                </Link>
                                <span className="quantity">1 × <span><span className="currency">$</span>940.00</span></span>
                            </li>
                            <li className="sidebar-cart-item">
                                <Link to="#" className="remove-cart"><i className="far fa-trash-alt" /></Link>
                                <Link to="#">
                                    <img src="/images/cart-4.jpg" alt="cart image" />
                                    Sheath Gown Red Colors
                                </Link>
                                <span className="quantity">1 × <span><span className="currency">$</span>940.00</span></span>
                            </li>
                        </ul>
                        <div className="cart-mini-total">
                            <div className="cart-total">
                                <span><strong>Subtotal:</strong></span> <span className="amount">1 × <span><span className="currency">$</span>940.00</span></span>
                            </div>
                        </div>
                        <div className="cart-button-box">
                            <Link to="/checkout" className="theme-btn style-one">Proceed to checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidemenuWrapperCart;
