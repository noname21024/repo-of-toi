import { Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useShopStore } from '../store/useShopStore';

const Header = () => {
    const navigate = useNavigate();
    const { 
        cart, 
        wishlist, 
        searchQuery, 
        setSearchQuery, 
        selectedCategory, 
        setSelectedCategory 
    } = useShopStore();

    const categorySelectRef = useRef<HTMLSelectElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const cartCount = cart.length;
    const wishlistCount = wishlist.length;
    const displayCount = cartCount < 10 ? `0${cartCount}` : cartCount.toString();
    const displayWishlistCount = wishlistCount < 10 ? `0${wishlistCount}` : wishlistCount.toString();

    // Sync input value if search query is updated elsewhere
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.value = searchQuery;
        }
    }, [searchQuery]);

    // Sync category select and trigger niceSelect update + listen to changes
    useEffect(() => {
        const selectEl = categorySelectRef.current;
        if (!selectEl) return;

        selectEl.value = selectedCategory;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).jQuery;
        if ($ && typeof $.fn.niceSelect === 'function') {
            $(selectEl).niceSelect('update');
        }

        const handleChange = () => {
            setSelectedCategory(selectEl.value);
        };
        selectEl.addEventListener('change', handleChange);

        return () => {
            selectEl.removeEventListener('change', handleChange);
        };
    }, [selectedCategory, setSelectedCategory]);

    const toggleCart = () => {
        document.querySelector('.sidemenu-wrapper-cart')?.classList.add('info-open');
        document.querySelector('.offcanvas__overlay')?.classList.add('overlay-open');
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const query = searchInputRef.current?.value || '';
        const cat = categorySelectRef.current?.value || '';
        setSearchQuery(query);
        setSelectedCategory(cat);
        navigate('/shop');
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
                            <form onSubmit={handleSearchSubmit}>
                                <select className="wide" ref={categorySelectRef} defaultValue={selectedCategory}>
                                    <option value="">Tất cả danh mục</option>
                                    <option value="Thời trang Nữ">Thời trang Nữ</option>
                                    <option value="Thời trang Nam">Thời trang Nam</option>
                                    <option value="Áo len">Áo len</option>
                                    <option value="Áo khoác">Áo khoác</option>
                                    <option value="Quần Jeans">Quần Jeans</option>
                                    <option value="Đầm dạ hội">Đầm dạ hội</option>
                                </select>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Nhập sản phẩm tìm kiếm..." 
                                        ref={searchInputRef}
                                        defaultValue={searchQuery}
                                    />
                                    <button className="search-btn" type="submit"><i className="far fa-search" /></button>
                                </div>
                            </form>
                        </div>
                        {/*===  Hotline Support  ===*/}
                        <div className="hotline-support item-rtl">
                            <div className="icon">
                                <i className="flaticon-support" />
                            </div>
                            <div className="info">
                                <span>Hỗ trợ 24/7</span>
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
                                    <span className="fas fa-list" /><span className="text">Danh mục sản phẩm<i className="fas fa-angle-down" /></span>
                                </a>
                                <div className="categories-dropdown-wrap categories-dropdown-active">
                                    <div className="categori-dropdown-item">
                                        <ul>
                                            <li>
                                                <Link to="/shop"> <img src="/images/shirt.png" alt="Shirts" />Áo sơ mi nam</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/images/denim.png" alt="Jeans" />Quần Jeans Denim</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/images/suit.png" alt="Suit" />Bộ vest thường ngày</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/images/dress.png" alt="Dress" />Váy mùa hè</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop"> <img src="/images/sweaters.png" alt="Sweaters" />Áo len</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="more_slide_open">
                                        <div className="categori-dropdown-item">
                                            <ul>
                                                <li>
                                                    <Link to="/shop"><img src="/images/jacket.png" alt="Jackets" />Áo khoác</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="more_categories"><span className="icon" /> <span>Xem thêm...</span></div>
                                </div>
                            </div>
                            {/*=== Pesco Nav Main ===*/}
                            <div className="pesco-nav-main">
                                {/*=== Pesco Nav Menu ===*/}
                                <div className="pesco-nav-menu">
                                    {/*=== Responsive Menu Search ===*/}
                                    <div className="nav-search mb-40 d-block d-lg-none">
                                        <div className="form-group">
                                            <input type="search" className="form_control" placeholder="Tìm kiếm tại đây..." name="search" />
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
                                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav2" role="tab">Danh mục</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="nav1">
                                                <nav className="main-menu">
                                                    <ul>
                                                        <li className="menu-item"><Link to="/">Trang chủ</Link></li>
                                                        <li className="menu-item"><Link to="/shop">Cửa hàng</Link></li>
                                                        <li className="menu-item"><Link to="/blog">Tin tức</Link></li>
                                                        <li className="menu-item"><Link to="/about">Về chúng tôi</Link></li>
                                                        <li className="menu-item"><Link to="/faq">Hỏi đáp</Link></li>
                                                        <li className="menu-item"><Link to="/contact">Liên hệ</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="tab-pane fade" id="nav2">
                                                <div className="categori-dropdown-item">
                                                    <ul>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/shirt.png" alt="Shirts" />Áo sơ mi nam</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/denim.png" alt="Jeans" />Quần Jeans Denim</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/suit.png" alt="Suit" />Bộ vest thường ngày</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/dress.png" alt="Dress" />Váy mùa hè</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/shop"> <img src="/images/sweaters.png" alt="Sweaters" />Áo len</Link>
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
                                            <span>Hỗ trợ 24/7</span>
                                            <h5><a href="tel:+941234567894">+94 123 4567 894</a></h5>
                                        </div>
                                    </div>
                                    {/*=== Main Menu ===*/}
                                    <nav className="main-menu d-none d-lg-block">
                                        <ul>
                                            <li className="menu-item"><Link to="/">Trang chủ</Link></li>
                                            <li className="menu-item"><Link to="/shop">Cửa hàng</Link></li>
                                            <li className="menu-item"><Link to="/blog">Tin tức</Link></li>
                                            <li className="menu-item"><Link to="/about">Về chúng tôi</Link></li>
                                            <li className="menu-item"><Link to="/faq">Hỏi đáp</Link></li>
                                            <li className="menu-item"><Link to="/contact">Liên hệ</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/*=== Nav Right Item ===*/}
                        <div className="nav-right-item style-one">
                            <ul>
                                <li>
                                    <div className="deals d-lg-block d-none"><i className="far fa-fire-alt" />Khuyến mãi</div>
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
