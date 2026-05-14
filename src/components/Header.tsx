import { Link } from 'react-router-dom';
import { useShopStore } from '../store/useShopStore';

const Header = () => {
    const { cart, wishlist } = useShopStore();
    const cartCount = cart.length;
    const wishlistCount = wishlist.length;
    const displayCount = cartCount < 10 ? `0${cartCount}` : cartCount.toString();
    const displayWishlistCount = wishlistCount < 10 ? `0${wishlistCount}` : wishlistCount.toString();

    const toggleCart = () => {
        document.querySelector('.sidemenu-wrapper-cart')?.classList.add('info-open');
        document.querySelector('.offcanvas__overlay')?.classList.add('overlay-open');
    };

    return (
        <header className="header-area">
            {/*===  Search Header Main  ===*/}
            <div className="search-header-main">
                <div className="container">
                    {/*===  Search Header Inner  ===*/}
                    <div className="search-header-inner">
                        {/*=== Site Branding  ===*/}
                        <div className="site-branding">
                            <Link to="/" className="brand-logo"><img src="/images/logo-main.png" alt="Logo" /></Link>
                        </div>
                        {/*===  Product Search Category  ===*/}
                        <div className="product-search-category">
                            <form action="#">
                                <select className="wide">
                                    <option>All Categories</option>
                                    <option>Man Shirts</option>
                                    <option>Denim Jeans</option>
                                    <option>Casual Suit</option>
                                    <option>Summer Dress</option>
                                    <option>Sweaters</option>
                                    <option>Jackets</option>
                                </select>
                                <div className="form-group">
                                    <input type="text" placeholder="Enter Search Products" />
                                    <button className="search-btn"><i className="far fa-search" /></button>
                                </div>
                            </form>
                        </div>
                        {/*===  Hotline Support  ===*/}
                        <div className="hotline-support item-rtl">
                            <div className="icon">
                                <i className="flaticon-support" />
                            </div>
                            <div className="info">
                                <span>24/7 Support</span>
                                <h5><a href="tel:+941234567894">+94 123 4567 894</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===  Header Navigation  ===*/}
            <div className="header-navigation style-one">
                <div className="container">
                    {/*=== Primary Menu ===*/}
                    <div className="primary-menu">
                        <div className="site-branding d-lg-none d-block">
                            <Link to="/" className="brand-logo"><img src="/images/logo-main.png" alt="Logo" /></Link>
                        </div>
                        {/*=== Nav Inner Menu ===*/}
                        <div className="nav-inner-menu">
                            {/*=== Main Category ===*/}
                            <div className="main-categories-wrap d-none d-lg-block">
                                <a className="categories-btn-active" href="#">
                                    <span className="fas fa-list" /><span className="text">Products Category<i className="fas fa-angle-down" /></span>
                                </a>
                                <div className="categories-dropdown-wrap categories-dropdown-active">
                                    <div className="categori-dropdown-item">
                                        <ul>
                                            <li>
                                                <Link to="/shop"> <img src="/images/shirt.png" alt="Shirts" />Man Shirts</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/images/denim.png" alt="Jeans" />Denim Jeans</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/images/suit.png" alt="Suit" />Casual Suit</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/images/dress.png" alt="Dress" />Summer Dress</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/images/sweaters.png" alt="Sweaters" />Sweaters</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="more_slide_open">
                                        <div className="categori-dropdown-item">
                                            <ul>
                                                <li>
                                                    <Link to="/shop"><img src="/images/jacket.png" alt="Jackets" />Jackets</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="more_categories"><span className="icon" /> <span>Show more...</span></div>
                                </div>
                            </div>
                            {/*=== Pesco Nav Main ===*/}
                            <div className="pesco-nav-main">
                                {/*=== Pesco Nav Menu ===*/}
                                <div className="pesco-nav-menu">
                                    {/*=== Responsive Menu Search ===*/}
                                    <div className="nav-search mb-40 d-block d-lg-none">
                                        <div className="form-group">
                                            <input type="search" className="form_control" placeholder="Search Here" name="search" />
                                            <button className="search-btn"><i className="far fa-search" /></button>
                                        </div>
                                    </div>
                                    {/*=== Responsive Menu Tab ===*/}
                                    <div className="pesco-tabs style-three d-block d-lg-none">
                                        <ul className="nav nav-tabs mb-30" role="tablist">
                                            <li>
                                                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav1" role="tab">Menu</button>
                                            </li>
                                            <li>
                                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav2" role="tab">Category</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="nav1">
                                                <nav className="main-menu">
                                                    <ul>
                                                        <li className="menu-item has-children"><Link to="/">Home</Link>
                                                            <ul className="sub-menu">
                                                                <li><Link to="/">Home 01</Link></li>
                                                                <li><Link to="/">Home 02</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item has-children"><Link to="/shop">Shop</Link>
                                                            <ul className="sub-menu">
                                                                <li><Link to="/shop">Shop Grid</Link></li>
                                                                <li><Link to="/shop">Shop left Sidebar</Link></li>
                                                                <li><Link to="/shop">Shop Right Sidebar</Link></li>
                                                                <li><Link to="/product-detail">Product Details</Link></li>
                                                                <li><Link to="/shop">Cart</Link></li>
                                                                <li><Link to="/checkout">Checkout</Link></li>
                                                                <li><Link to="/wishlist">Wishlist</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item has-children"><Link to="/blog">Blog</Link>
                                                            <ul className="sub-menu">
                                                                <li><Link to="/blog">Our Blog</Link></li>
                                                                <li><Link to="/blog-detail">Blog Details</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item has-children"><Link to="#">Pages</Link>
                                                            <ul className="sub-menu">
                                                                <li><Link to="/about">About Us</Link></li>
                                                                <li><Link to="/faq">Faqs</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item"><Link to="/contact">Contact</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="tab-pane fade" id="nav2">
                                                <div className="categori-dropdown-item">
                                                    <ul>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/shirt.png" alt="Shirts" />Man Shirts</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/denim.png" alt="Jeans" />Denim Jeans</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/suit.png" alt="Suit" />Casual Suit</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/dress.png" alt="Dress" />Summer Dress</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/sweaters.png" alt="Sweaters" />Sweaters</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===  Hotline Support  ===*/}
                                    <div className="hotline-support d-flex d-lg-none mt-30">
                                        <div className="icon">
                                            <i className="flaticon-support" />
                                        </div>
                                        <div className="info">
                                            <span>24/7 Support</span>
                                            <h5><a href="tel:+941234567894">+94 123 4567 894</a></h5>
                                        </div>
                                    </div>
                                    {/*=== Main Menu ===*/}
                                    <nav className="main-menu d-none d-lg-block">
                                        <ul>
                                            <li className="menu-item has-children"><Link to="/">Home</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/">Home 01</Link></li>
                                                    <li><Link to="/">Home 02</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item has-children"><Link to="/shop">Shop</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/shop">Shop Grid</Link></li>
                                                    <li><Link to="/shop">Shop left Sidebar</Link></li>
                                                    <li><Link to="/shop">Shop Right Sidebar</Link></li>
                                                    <li><Link to="/product-detail">Product Details</Link></li>
                                                    <li><Link to="/shop">Cart</Link></li>
                                                    <li><Link to="/checkout">Checkout</Link></li>
                                                    <li><Link to="/wishlist">Wishlist</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item has-children"><Link to="/blog">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/blog">Our Blog</Link></li>
                                                    <li><Link to="/blog-detail">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item has-children"><Link to="#">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/about">About Us</Link></li>
                                                    <li><Link to="/faq">Faqs</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item"><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/*=== Nav Right Item ===*/}
                        <div className="nav-right-item style-one">
                            <ul>
                                <li>
                                    <div className="deals d-lg-block d-none"><i className="far fa-fire-alt" />Deal</div>
                                </li>
                                <li>
                                    <Link to="/wishlist" className="wishlist-btn d-lg-block d-none">
                                        <i className="far fa-heart" />
                                        <span className="pro-count">{displayWishlistCount}</span>
                                    </Link>
                                </li>
                                <li>
                                    <div className="cart-button d-flex align-items-center" onClick={toggleCart} style={{ cursor: 'pointer' }}>
                                        <div className="icon">
                                            <i className="fas fa-shopping-bag" /><span className="pro-count">{displayCount}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="navbar-toggler d-block d-lg-none">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;