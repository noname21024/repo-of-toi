import { Link } from 'react-router-dom';
import { useShopStore } from '../store/useShopStore';
import { useBlogStore } from '../store/useBlogStore';
import ProductItem from '../components/ProductItem';
import React from 'react';

const HomePage = () => {
  const { featuredProducts, addToWishlist, removeFromWishlist, isInWishlist } = useShopStore();

  const handleToggleWishlist = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
    const { posts } = useBlogStore();

    return(
      <main className="main-bg">
  {/*====== Start Hero Section ======*/}
  <section className="hero-section">
    {/*=== Hero Wrapper ===*/}
    <div className="hero-wrapper-one">
      <div className="container">
        <div className="hero-dots" />
        <div className="hero-slider-one">
          {/*=== Single Slider ===*/}
          <div className="single-hero-slider">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/*=== Hero Content ===*/}
                <div className="hero-content style-one mb-50">
                  <span className="sub-heading">Best for your categories</span>
                  <h1>Exclusive Collection <br />
                    in <span>Our Online</span>  Store</h1>
                  <p>Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won't find anywhere else.</p>
                  <ul>
                    <li>
                      <div className="price-box">
                        <div className="currency">$</div>
                        <div className="text">
                          <span className="discount">Discount Price</span>
                          <h3>140.00</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <img src="/images/line-1.png" />
                    </li>
                    <li>
                      <Link to="/shop" className="theme-btn style-one">Shop Now</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Hero Image ===*/}
                <div className="hero-image-box">
                  <div className="hero-image">
                    <img src="/images/hero-one_img1.jpg" alt="Hero Image" />
                    <div className="hero-shape bg_cover" style={{backgroundImage: 'url(/images/hero-one-shape1.png)'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Single Slider ===*/}
          <div className="single-hero-slider">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/*=== Hero Content ===*/}
                <div className="hero-content style-one mb-50">
                  <span className="sub-heading">Best for your categories</span>
                  <h1>Exclusive Collection <br />
                    in <span>Our Online</span>  Store</h1>
                  <p>Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won't find anywhere else.</p>
                  <ul>
                    <li>
                      <div className="price-box">
                        <div className="currency">$</div>
                        <div className="text">
                          <span className="discount">Discount Price</span>
                          <h3>140.00</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <img src="/images/line-1.png" />
                    </li>
                    <li>
                      <Link to="/shop" className="theme-btn style-one">Shop Now</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Hero Image ===*/}
                <div className="hero-image-box">
                  <div className="hero-image">
                    <img src="/images/hero-one_img1.jpg" alt="Hero Image" />
                    <div className="hero-shape bg_cover" style={{backgroundImage: 'url(/images/hero-one-shape1.png)'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Single Slider ===*/}
          <div className="single-hero-slider">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/*=== Hero Content ===*/}
                <div className="hero-content style-one mb-50">
                  <span className="sub-heading">Best for your categories</span>
                  <h1>Exclusive Collection <br />
                    in <span>Our Online</span>  Store</h1>
                  <p>Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won't find anywhere else.</p>
                  <ul>
                    <li>
                      <div className="price-box">
                        <div className="currency">$</div>
                        <div className="text">
                          <span className="discount">Discount Price</span>
                          <h3>140.00</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <img src="/images/line-1.png" />
                    </li>
                    <li>
                      <Link to="/shop" className="theme-btn style-one">Shop Now</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Hero Image ===*/}
                <div className="hero-image-box">
                  <div className="hero-image">
                    <img src="/images/hero-one_img1.jpg" alt="Hero Image" />
                    <div className="hero-shape bg_cover" style={{backgroundImage: 'url(/images/hero-one-shape1.png)'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Hero Section ======*/}
  {/*====== Start Animated-headline Section ======*/}
  <section className="animated-headline-area primary-dark-bg pt-25 pb-25">
    <div className="headline-wrap style-one">
      <span className="marquee-wrap">
        <span className="marquee-inner left">
          <span className="marquee-item"><b>Women</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Shirts</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Jackets</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Jeans</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Blazer</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Men</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Jackets</b><i className="fas fa-bahai" /></span>
        </span>
        <span className="marquee-inner left">
          <span className="marquee-item"><b>Women</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Shirts</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Jackets</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Jeans</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Blazer</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Men</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Jackets</b><i className="fas fa-bahai" /></span>
        </span>
        <span className="marquee-inner left">
          <span className="marquee-item"><b>Women</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Shirts</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Jackets</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Jeans</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Blazer</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Men</b><i className="fas fa-bahai" /></span>
          <span className="marquee-item"><b>Jackets</b><i className="fas fa-bahai" /></span>
        </span>
      </span>
    </div>
  </section>{/*====== End Animated-headline Section ======*/}
  {/*====== Start Features Section ======*/}
  <section className="features-section pt-130">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/*=== Features Wrapper ===*/}
          <div className="features-wrapper" data-aos="fade-up" data-aos-delay={10} data-aos-duration={1000}>
            {/*=== Iconic Box Item ===*/}
            <div className="iconic-box-item icon-left-box mb-25">
              <div className="icon">
                <i className="fas fa-shipping-fast" />
              </div>
              <div className="content">
                <h5>Free Shipping</h5>
                <p>You get your items delivered without any extra cost.</p>
              </div>
            </div>
            {/*=== Divider ===*/}
            <div className="divider mb-25">
              <img src="/images/divider.png" alt="divider" />
            </div>
            {/*=== Iconic Box Item ===*/}
            <div className="iconic-box-item icon-left-box mb-25">
              <div className="icon">
                <i className="fas fa-microphone" />
              </div>
              <div className="content">
                <h5>Great Support 24/7</h5>
                <p>Our customer support team is available around the clock </p>
              </div>
            </div>
            {/*=== Divider ===*/}
            <div className="divider mb-25">
              <img src="/images/divider.png" alt="divider" />
            </div>
            {/*=== Iconic Box Item ===*/}
            <div className="iconic-box-item icon-left-box mb-25">
              <div className="icon">
                <i className="far fa-handshake" />
              </div>
              <div className="content">
                <h5>Return Available</h5>
                <p>Making it easy to return any items if you're not satisfied.</p>
              </div>
            </div>
            {/*=== Divider ===*/}
            <div className="divider mb-25">
              <img src="/images/divider.png" alt="divider" />
            </div>
            {/*=== Iconic Box Item ===*/}
            <div className="iconic-box-item icon-left-box mb-25">
              <div className="icon">
                <i className="fas fa-sack-dollar" />
              </div>
              <div className="content">
                <h5>Secure Payment</h5>
                <p>Shop with confidence knowing that our secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Features Section ======*/}
  {/*====== Start Category Section ======*/}
  <section className="category-section pt-125 overflow-hidden">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-8">
          {/*=== Section Title ===*/}
          <div className="section-title mb-50" data-aos="fade-right" data-aos-delay={10} data-aos-duration={800}>
            <div className="sub-heading d-inline-flex align-items-center">
              <i className="flaticon-sparkler" />
              <span className="sub-title">Categories</span>
            </div>
            <h2>Browse Top Category</h2>
          </div>
        </div>
        <div className="col-lg-6 col-md-4">
          {/*=== Arrows ===*/}
          <div className="category-arrows style-one mb-60" data-aos="fade-left" data-aos-delay={15} data-aos-duration={1000} />
        </div>
      </div>
    </div>
    {/*=== Category Slider ===*/}
    <div className="category-slider-one" data-aos="fade-up" data-aos-delay={20} data-aos-duration={1200}>
      {/*=== Category Item ===*/}
      <div className="category-item style-one text-center">
        <div className="category-img">
          <img src="/images/category-1.png" alt="category image" />
        </div>
        <div className="category-content">
          <Link to="/" className="category-btn">Man Shirts</Link>
        </div>
      </div>
      {/*=== Category Item ===*/}
      <div className="category-item style-one text-center">
        <div className="category-img">
          <img src="/images/category-2.png" alt="category image" />
        </div>
        <div className="category-content">
          <Link to="/" className="category-btn">Denim Jeans</Link>
        </div>
      </div>
      {/*=== Category Item ===*/}
      <div className="category-item style-one text-center">
        <div className="category-img">
          <img src="/images/category-3.png" alt="category image" />
        </div>
        <div className="category-content">
          <Link to="/" className="category-btn">Casual Suit</Link>
        </div>
      </div>
      {/*=== Category Item ===*/}
      <div className="category-item style-one text-center">
        <div className="category-img">
          <img src="/images/category-4.png" alt="category image" />
        </div>
        <div className="category-content">
          <Link to="/" className="category-btn">Summer Dress</Link>
        </div>
      </div>
      {/*=== Category Item ===*/}
      <div className="category-item style-one text-center">
        <div className="category-img">
          <img src="/images/category-5.png" alt="category image" />
        </div>
        <div className="category-content">
          <Link to="/" className="category-btn">Sweaters</Link>
        </div>
      </div>
      {/*=== Category Item ===*/}
      <div className="category-item style-one text-center">
        <div className="category-img">
          <img src="/images/category-6.png" alt="category image" />
        </div>
        <div className="category-content">
          <Link to="/" className="category-btn">Jackets</Link>
        </div>
      </div>
      {/*=== Category Item ===*/}
      <div className="category-item style-one text-center">
        <div className="category-img">
          <img src="/images/category-4.png" alt="category image" />
        </div>
        <div className="category-content">
          <Link to="/" className="category-btn">Summer Dress</Link>
        </div>
      </div>
    </div>
  </section>{/*====== End Category Section ======*/}
  {/*====== Start Banner Section ======*/}
  <section className="banner-section pt-130">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          {/*=== Banner Item ===*/}
          <div className="banner-item style-one bg-one mb-40" data-aos="fade-up" data-aos-delay={10} data-aos-duration={900}>
            <div className="shape shape-one"><span><img src="/images/discount.png" alt="shape" /></span></div>
            <div className="shape shape-two"><span><img src="/images/line.png" alt="shape" /></span></div>
            <div className="banner-img"><img src="/images/banner-1.png" alt="banner image" /></div>
            <div className="banner-content">
              <span>UP TO <span className="off">50%</span></span>
              <h4>Exclusive Kids &amp; Adults Summer Outfits</h4>
              <Link to="/shop" className="theme-btn style-one">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/*=== Banner Item ===*/}
          <div className="banner-item style-one bg-two mb-40" data-aos="fade-up" data-aos-delay={20} data-aos-duration={1100}>
            <div className="shape shape-one"><span><img src="/images/discount.png" alt="shape" /></span></div>
            <div className="shape shape-two"><span><img src="/images/line.png" alt="shape" /></span></div>
            <div className="banner-img"><img src="/images/banner-2.png" alt="banner image" /></div>
            <div className="banner-content">
              <span>UP TO <span className="off">70%</span></span>
              <h4>Exclusive Kids &amp; Adults Summer Outfits</h4>
              <Link to="/shop" className="theme-btn style-one">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Banner Section ======*/}
  {/*====== Start Features Section ======*/}
  <section className="features-products pt-90">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          {/*=== Section Title ===*/}
          <div className="section-title mb-50 text-center text-lg-start" data-aos="fade-right" data-aos-delay={10} data-aos-duration={1000}>
            <div className="sub-heading d-inline-flex align-items-center">
              <i className="flaticon-sparkler" />
              <span className="sub-title">Feature Products</span>
            </div>
            <h2>Our Features Collection</h2>
          </div>
        </div>
        <div className="col-lg-6">
          {/*=== Pesco Tabs ===*/}
          <div className="pesco-tabs style-one mb-50" data-aos="fade-left" data-aos-delay={15} data-aos-duration={1200}>
            <ul className="nav nav-tabs" role="tablist">
              <li>
                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#cat1" role="tab">Best Sellers</button>
              </li>
              <li>
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cat2" role="tab">New Products</button>
              </li>
              <li>
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cat3" role="tab">Sale Products</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/*=== Tab Content ===*/}
          <div className="tab-content" data-aos="fade-up" data-aos-duration={1200}>
            {/*=== Tab Pane  ===*/}
            <div className="tab-pane fade show active" id="cat1">
              <div className="row justify-content-center">
                {featuredProducts.map((product) => (
                  <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
                    <ProductItem product={product} />
                  </div>
                ))}
              </div>
            </div>
            <div className="tab-pane fade" id="cat2">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-1.png" alt="Products" />
                      <div className="discount">10% Off</div>
                      <div className="hover-content">
                        <Link 
                          to="#" 
                          className={`icon-btn ${isInWishlist(101) ? 'active' : ''}`} 
                          onClick={(e) => handleToggleWishlist(e, { id: 101, title: 'Lightweight linen summer dress with belt', image: '/images/feature-product-1.png', newPrice: '40.00', prevPrice: '80.00', discount: '10% Off', rating: 5, reviewsCount: 80, popupImage: '' })}
                          style={{ color: isInWishlist(101) ? '#ff4d4d' : 'inherit' }}
                        >
                          <i className={isInWishlist(101) ? "fas fa-heart" : "fa fa-heart"} />
                        </Link>
                        <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 101, title: 'Lightweight linen summer dress with belt', image: '/images/feature-product-1.png', newPrice: '40.00', prevPrice: '80.00', discount: '10% Off', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/101">Lightweight linen summer dress with belt</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>80.00</span>
                        <span className="price new-price"><span className="currency">$</span>40.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-2.png" alt="Products" />
                      <div className="discount">40% Off</div>
                      <div className="hover-content">
                        <Link 
                          to="#" 
                          className={`icon-btn ${isInWishlist(102) ? 'active' : ''}`} 
                          onClick={(e) => handleToggleWishlist(e, { id: 102, title: 'Cozy knit sweater with pockets', image: '/images/feature-product-2.png', newPrice: '23.00', prevPrice: '67.00', discount: '40% Off', rating: 5, reviewsCount: 80, popupImage: '' })}
                          style={{ color: isInWishlist(102) ? '#ff4d4d' : 'inherit' }}
                        >
                          <i className={isInWishlist(102) ? "fas fa-heart" : "fa fa-heart"} />
                        </Link>
                        <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 102, title: 'Cozy knit sweater with pockets', image: '/images/feature-product-2.png', newPrice: '23.00', prevPrice: '67.00', discount: '40% Off', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/102">Cozy knit sweater with pockets</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>67.00</span>
                        <span className="price new-price"><span className="currency">$</span>23.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-3.png" alt="Products" />
                      <div className="discount">10% Off</div>
                      <div className="hover-content">
                        <Link 
                          to="#" 
                          className={`icon-btn ${isInWishlist(103) ? 'active' : ''}`} 
                          onClick={(e) => handleToggleWishlist(e, { id: 103, title: 'Athletic leggings with mesh panels', image: '/images/feature-product-3.png', newPrice: '40.00', prevPrice: '80.00', discount: '10% Off', rating: 5, reviewsCount: 80, popupImage: '' })}
                          style={{ color: isInWishlist(103) ? '#ff4d4d' : 'inherit' }}
                        >
                          <i className={isInWishlist(103) ? "fas fa-heart" : "fa fa-heart"} />
                        </Link>
                        <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 103, title: 'Athletic leggings with mesh panels', image: '/images/feature-product-3.png', newPrice: '40.00', prevPrice: '80.00', discount: '10% Off', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/103">Athletic leggings with mesh panels</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>80.00</span>
                        <span className="price new-price"><span className="currency">$</span>40.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-4.png" alt="Products" />
                      <div className="discount">40% Off</div>
                      <div className="hover-content">
                        <Link 
                          to="#" 
                          className={`icon-btn ${isInWishlist(104) ? 'active' : ''}`} 
                          onClick={(e) => handleToggleWishlist(e, { id: 104, title: 'Classic leather biker jacket with zippers', image: '/images/feature-product-4.png', newPrice: '23.00', prevPrice: '67.00', discount: '40% Off', rating: 5, reviewsCount: 80, popupImage: '' })}
                          style={{ color: isInWishlist(104) ? '#ff4d4d' : 'inherit' }}
                        >
                          <i className={isInWishlist(104) ? "fas fa-heart" : "fa fa-heart"} />
                        </Link>
                        <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation(); useShopStore.getState().addToCart({ id: 104, title: 'Classic leather biker jacket with zippers', image: '/images/feature-product-4.png', newPrice: '23.00', prevPrice: '67.00', discount: '40% Off', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/104">Classic leather biker jacket with zippers</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>67.00</span>
                        <span className="price new-price"><span className="currency">$</span>23.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-4.png" alt="Products" />
                      <div className="discount">80% Off</div>
                      <div className="hover-content">
                        <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                        <Link to="images/products/feature-product-4.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation(); useShopStore.getState().addToCart({ id: 5, title: 'Floral print sundress with adjustable straps', image: '/images/product-2.png', newPrice: '26.00', prevPrice: '67.00', discount: '10% Off', rating: 5, reviewsCount: 15, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/5">Floral print sundress with adjustable straps</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>80.00</span>
                        <span className="price new-price"><span className="currency">$</span>40.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-3.png" alt="Products" />
                      <div className="discount">40% Off</div>
                      <div className="hover-content">
                        <Link 
                          to="#" 
                          className={`icon-btn ${isInWishlist(6) ? 'active' : ''}`} 
                          onClick={(e) => handleToggleWishlist(e, { id: 6, title: 'Relaxed fit denim jeans with distressing', image: '/images/product-3.png', newPrice: '30.00', prevPrice: '50.00', discount: '10% Off', rating: 5, reviewsCount: 30, popupImage: '' })}
                          style={{ color: isInWishlist(6) ? '#ff4d4d' : 'inherit' }}
                        >
                          <i className={isInWishlist(6) ? "fas fa-heart" : "fa fa-heart"} />
                        </Link>
                        <Link to="images/products/feature-product-3.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation(); useShopStore.getState().addToCart({ id: 6, title: 'Relaxed fit denim jeans with distressing', image: '/images/product-3.png', newPrice: '30.00', prevPrice: '50.00', discount: '10% Off', rating: 5, reviewsCount: 30, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/6">Relaxed fit denim jeans with distressing</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>67.00</span>
                        <span className="price new-price"><span className="currency">$</span>23.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-2.png" alt="Products" />
                      <div className="discount">40% Off</div>
                      <div className="hover-content">
                        <Link 
                          to="#" 
                          className={`icon-btn ${isInWishlist(7) ? 'active' : ''}`} 
                          onClick={(e) => handleToggleWishlist(e, { id: 7, title: 'Cargo shorts with pockets and drawstring', image: '/images/feature-product-3.png', newPrice: '20.00', prevPrice: '40.00', discount: '10% Off', rating: 5, reviewsCount: 45, popupImage: '' })}
                          style={{ color: isInWishlist(7) ? '#ff4d4d' : 'inherit' }}
                        >
                          <i className={isInWishlist(7) ? "fas fa-heart" : "fa fa-heart"} />
                        </Link>
                        <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 7, title: 'Cargo shorts with pockets and drawstring', image: '/images/feature-product-3.png', newPrice: '20.00', prevPrice: '40.00', discount: '10% Off', rating: 5, reviewsCount: 45, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/7">Cargo shorts with pockets and drawstring</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>80.00</span>
                        <span className="price new-price"><span className="currency">$</span>40.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-1.png" alt="Products" />
                      <div className="discount">80% Off</div>
                      <div className="hover-content">
                        <Link 
                          to="#" 
                          className={`icon-btn ${isInWishlist(8) ? 'active' : ''}`} 
                          onClick={(e) => handleToggleWishlist(e, { id: 8, title: 'Elegant silk dress with sequins', image: '/images/product-4.png', newPrice: '34.00', prevPrice: '89.00', discount: '10% Off', rating: 5, reviewsCount: 80, popupImage: '' })}
                          style={{ color: isInWishlist(8) ? '#ff4d4d' : 'inherit' }}
                        >
                          <i className={isInWishlist(8) ? "fas fa-heart" : "fa fa-heart"} />
                        </Link>
                        <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 8, title: 'Elegant silk dress with sequins', image: '/images/product-4.png', newPrice: '34.00', prevPrice: '89.00', discount: '10% Off', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/8">Elegant silk dress with sequins</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>67.00</span>
                        <span className="price new-price"><span className="currency">$</span>23.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="cat3">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-1.png" alt="Products" />
                      <div className="discount">10% Off</div>
                      <div className="hover-content">
                        <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                        <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 101, title: 'Lightweight linen summer dress with belt', image: '/images/feature-product-1.png', newPrice: '40.00', prevPrice: '80.00', discount: '10% Off', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/101">Lightweight linen summer dress with belt</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>80.00</span>
                        <span className="price new-price"><span className="currency">$</span>40.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-2.png" alt="Products" />
                      <div className="discount">40% Off</div>
                      <div className="hover-content">
                        <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                        <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 102, title: 'Cozy knit sweater with pockets', image: '/images/feature-product-2.png', newPrice: '23.00', prevPrice: '67.00', discount: '40% Off', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/102">Cozy knit sweater with pockets</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>67.00</span>
                        <span className="price new-price"><span className="currency">$</span>23.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-3.png" alt="Products" />
                      <div className="discount">10% Off</div>
                      <div className="hover-content">
                        <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                        <Link to="images/products/feature-product-3.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 103, title: 'Athletic leggings with mesh panels', image: '/images/feature-product-3.png', newPrice: '40.00', prevPrice: '80.00', discount: '10% Off', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/103">Athletic leggings with mesh panels</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>80.00</span>
                        <span className="price new-price"><span className="currency">$</span>40.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-4.png" alt="Products" />
                      <div className="discount">40% Off</div>
                      <div className="hover-content">
                        <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                        <Link to="images/products/feature-product-4.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 104, title: 'Classic leather biker jacket with zippers', image: '/images/feature-product-4.png', newPrice: '23.00', prevPrice: '67.00', discount: '40% Off', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail/104">Classic leather biker jacket with zippers</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>67.00</span>
                        <span className="price new-price"><span className="currency">$</span>23.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-4.png" alt="Products" />
                      <div className="discount">80% Off</div>
                      <div className="hover-content">
                        <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                        <Link to="images/products/feature-product-4.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail">Floral print sundress with adjustable straps</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>80.00</span>
                        <span className="price new-price"><span className="currency">$</span>40.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-3.png" alt="Products" />
                      <div className="discount">40% Off</div>
                      <div className="hover-content">
                        <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                        <Link to="images/products/feature-product-3.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail">Relaxed fit denim jeans with distressing</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>67.00</span>
                        <span className="price new-price"><span className="currency">$</span>23.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-2.png" alt="Products" />
                      <div className="discount">40% Off</div>
                      <div className="hover-content">
                        <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                        <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail">Cargo shorts with pockets and drawstring</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>80.00</span>
                        <span className="price new-price"><span className="currency">$</span>40.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  {/*=== Product Item  ===*/}
                  <div className="product-item style-one mb-40">
                    <div className="product-thumbnail">
                      <img src="/images/feature-product-1.png" alt="Products" />
                      <div className="discount">80% Off</div>
                      <div className="hover-content">
                        <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                        <Link to="images/products/feature-product-1.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                      </div>
                      <div className="cart-button">
                        <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
                      </div>
                    </div>
                    <div className="product-info-wrap">
                      <div className="product-info">
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><Link to="#">(80)</Link></li>
                        </ul>
                        <h4 className="title"><Link to="/product-detail">Elegant silk dress with sequins</Link></h4>
                      </div>
                      <div className="product-price">
                        <span className="price prev-price"><span className="currency">$</span>67.00</span>
                        <span className="price new-price"><span className="currency">$</span>23.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Features Section ======*/}
  {/*====== Start Features Products Section  ======*/}
  <section className="features-products-section pt-85 pb-60">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/*=== Section Title  ===*/}
          <div className="section-title mb-50" data-aos="fade-right" data-aos-delay={10} data-aos-duration={1000}>
            <div className="sub-heading d-inline-flex align-items-center">
              <i className="flaticon-sparkler" />
              <span className="sub-title">Feature Products</span>
            </div>
            <h2>Our Features Collection</h2>
          </div>
        </div>
        <div className="col-md-4">
          {/*=== Arrows ===*/}
          <div className="feature-arrows style-one mb-60" data-aos="fade-left" data-aos-delay={15} data-aos-duration={1200} />
        </div>
      </div>
      {/*=== Feature Slider  ===*/}
      <div className="feature-slider-one" data-aos="fade-up" data-aos-delay={20} data-aos-duration={1400}>
        {/*=== Project Item  ===*/}
        <div className="product-item style-one mb-40">
          <div className="product-thumbnail">
            <img src="/images/feature-product-1.png" alt="Products" />
            <div className="discount">80% Off</div>
            <div className="hover-content">
              <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
              <Link to="images/products/feature-product-1.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
            </div>
            <div className="cart-button">
              <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
            </div>
          </div>
          <div className="product-info-wrap">
            <div className="product-info">
              <ul className="ratings rating4">
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><Link to="#">(50)</Link></li>
              </ul>
              <h4 className="title"><Link to="/product-detail">Cozy knit sweater with pockets</Link></h4>
            </div>
            <div className="product-price">
              <span className="price prev-price"><span className="currency">$</span>67.00</span>
              <span className="price new-price"><span className="currency">$</span>23.00</span>
            </div>
          </div>
        </div>
        {/*=== Project Item  ===*/}
        <div className="product-item style-one mb-40">
          <div className="product-thumbnail">
            <img src="/images/feature-product-2.png" alt="Products" />
            <div className="discount">80% Off</div>
            <div className="hover-content">
              <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
              <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
            </div>
            <div className="cart-button">
              <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
            </div>
          </div>
          <div className="product-info-wrap">
            <div className="product-info">
              <ul className="ratings rating5">
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><Link to="#">(80)</Link></li>
              </ul>
              <h4 className="title"><Link to="/product-detail">Elegant silk dress with sequins</Link></h4>
            </div>
            <div className="product-price">
              <span className="price prev-price"><span className="currency">$</span>67.00</span>
              <span className="price new-price"><span className="currency">$</span>23.00</span>
            </div>
          </div>
        </div>
        {/*=== Project Item  ===*/}
        <div className="product-item style-one mb-40">
          <div className="product-thumbnail">
            <img src="/images/feature-product-3.png" alt="Products" />
            <div className="discount">40% Off</div>
            <div className="hover-content">
              <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
              <Link to="images/products/feature-product-3.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
            </div>
            <div className="cart-button">
              <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
            </div>
          </div>
          <div className="product-info-wrap">
            <div className="product-info">
              <ul className="ratings rating2">
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><Link to="#">(47)</Link></li>
              </ul>
              <h4 className="title"><Link to="/product-detail">Cargo shorts with pockets and drawstring</Link></h4>
            </div>
            <div className="product-price">
              <span className="price prev-price"><span className="currency">$</span>67.00</span>
              <span className="price new-price"><span className="currency">$</span>23.00</span>
            </div>
          </div>
        </div>
        {/*=== Project Item  ===*/}
        <div className="product-item style-one mb-40">
          <div className="product-thumbnail">
            <img src="/images/feature-product-4.png" alt="Products" />
            <div className="discount">10% Off</div>
            <div className="hover-content">
              <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
              <Link to="images/products/feature-product-4.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
            </div>
            <div className="cart-button">
              <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
            </div>
          </div>
          <div className="product-info-wrap">
            <div className="product-info">
              <ul className="ratings rating4">
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><Link to="#">(47)</Link></li>
              </ul>
              <h4 className="title"><Link to="/product-detail">Athletic leggings with mesh panels</Link></h4>
            </div>
            <div className="product-price">
              <span className="price prev-price"><span className="currency">$</span>80.00</span>
              <span className="price new-price"><span className="currency">$</span>40.00</span>
            </div>
          </div>
        </div>
        {/*=== Project Item  ===*/}
        <div className="product-item style-one mb-40">
          <div className="product-thumbnail">
            <img src="/images/feature-product-2.png" alt="Products" />
            <div className="discount">80% Off</div>
            <div className="hover-content">
              <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
              <Link to="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
            </div>
            <div className="cart-button">
              <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
            </div>
          </div>
          <div className="product-info-wrap">
            <div className="product-info">
              <ul className="ratings rating5">
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><Link to="#">(80)</Link></li>
              </ul>
              <h4 className="title"><Link to="/product-detail">Elegant silk dress with sequins</Link></h4>
            </div>
            <div className="product-price">
              <span className="price prev-price"><span className="currency">$</span>67.00</span>
              <span className="price new-price"><span className="currency">$</span>23.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Features Products Section  ======*/}
  {/*====== Start Working Section  ======*/}
  <section className="work-processing-section pt-30 pb-90">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/*=== Section Title  ===*/}
          <div className="section-title text-center mb-60" data-aos="fade-up" data-aos-delay={10} data-aos-duration={800}>
            <div className="sub-heading d-inline-flex align-items-center">
              <i className="flaticon-sparkler" />
              <span className="sub-title">Work Processing</span>
              <i className="flaticon-sparkler" />
            </div>
            <h2>How it Work processing</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-sm-6">
          {/*=== Iconic Box Item  ===*/}
          <div className="iconic-box-item style-two mb-40" data-aos="fade-up" data-aos-duration={1000}>
            <div className="sn-number">01</div>
            <div className="icon">
              <i className="flaticon-searching" />
            </div>
            <div className="content">
              <h6>Browsing &amp; Choosing</h6>
              <p>This is where customers visit your online store, browse your products.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          {/*=== Iconic Box Item  ===*/}
          <div className="iconic-box-item style-two mb-40" data-aos="fade-up" data-aos-duration={1200}>
            <div className="sn-number">02</div>
            <div className="icon">
              <i className="flaticon-payment-method" />
            </div>
            <div className="content">
              <h6>Checkout &amp; Payment</h6>
              <p>Once they have picked their items, customers proceed to checkout.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          {/*=== Iconic Box Item  ===*/}
          <div className="iconic-box-item style-two mb-40" data-aos="fade-up" data-aos-duration={1400}>
            <div className="sn-number">03</div>
            <div className="icon">
              <i className="flaticon-currency" />
            </div>
            <div className="content">
              <h6>Order Fulfillment</h6>
              <p>After the order is placed, it's sent to your fulfillment team.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          {/*=== Iconic Box Item  ===*/}
          <div className="iconic-box-item style-two mb-40" data-aos="fade-up" data-aos-duration={1600}>
            <div className="sn-number">04</div>
            <div className="icon">
              <i className="flaticon-delivery" />
            </div>
            <div className="content">
              <h6>Delivery to Customer</h6>
              <p>The packed order is then sent off with a shipping carrier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Working Section  ======*/}
  {/*====== Start Trending Products Sections  ======*/}
  <section className="trending-products-section pb-40 pb-130">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/*=== Section Title  ===*/}
          <div className="section-title mb-50" data-aos="fade-right" data-aos-duration={1000}>
            <div className="sub-heading d-inline-flex align-items-center">
              <i className="flaticon-sparkler" />
              <span className="sub-title">Trending Products</span>
            </div>
            <h2>What's Trending Now</h2>
          </div>
        </div>
        <div className="col-md-4">
          {/*=== Arrows ===*/}
          <div className="trending-product-arrows style-one mb-60" data-aos="fade-left" data-aos-duration={1200} />
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="trending-products-slider" data-aos="fade-up" data-aos-duration={1400}>
        {/*=== Product Item ===*/}
        {featuredProducts.map(product => (
          <div className="product-item style-two" key={product.id}>
            <div className="product-thumbnail">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info-wrap">
              <div className="product-info">
                <ul className={`ratings rating${product.rating}`}>
                  {[...Array(5)].map((_, i) => (
                    <li key={i}><i className={`${i < product.rating ? 'fas' : 'far'} fa-star`} /></li>
                  ))}
                  <li><Link to="#">({product.reviewsCount})</Link></li>
                </ul>
                <h4 className="title"><Link to={`/product-detail/${product.id}`}>{product.title}</Link></h4>
              </div>
              <div className="product-price">
                <span className="price prev-price"><span className="currency">$</span>{product.prevPrice}</span>
                <span className="price new-price"><span className="currency">$</span>{product.newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>{/*====== End Trending Products Sections  ======*/}
  {/*====== Start Blog Sections  ======*/}
  <section className="best-deal-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="offer-deal-wrapper bg_cover" data-aos="fade-up" data-aos-duration={1400} style={{backgroundImage: 'url(/images/deal-bg-1.png)'}}>
            <div className="deal-img">
              <span><img src="/images/deal-1.png" alt="Image" /></span>
            </div>
            <div className="deal-content">
              <span className="sub-heading"><i className="fas fa-tags" />Deal of the Week</span>
              <h2>Hurry Up! Offer ends in. Get <span>UP TO 80% OFF</span></h2>
              <div className="simply-countdown mb-60" />
              <div className="shop-button">
                <Link to="/shop" className="theme-btn style-one">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Blog Sections  ======*/}
  {/*====== Start Testimonial Sections  ======*/}
  <section className="testimonial-section">
    <div className="testimonial-wrapper overflow-x-hidden pt-190 pb-90 white-bg">
      <div className="shape svg-shape1"><img src="/images/tl-svgTop.svg" alt="svg shape" /></div>
      <div className="shape svg-shape2"><img src="/images/tl-svgBottom.svg" alt="svg shape" /></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/*=== Section Content Box ===*/}
            <div className="section-content-box mb-40" data-aos="fade-right" data-aos-delay={30} data-aos-duration={800}>
              <div className="section-title mb-50">
                <h2>What Our Clients Say About Us</h2>
              </div>
              <div className="testimonial-arrows style-one" />
            </div>
          </div>
          <div className="col-lg-8">
            {/*=== Testimonial Slider ===*/}
            <div className="testimonial-slider-one" data-aos="fade-left" data-aos-delay={50} data-aos-duration={1000}>
              {/*=== Testimonial Item ===*/}
              <div className="testimonial-item style-one mb-40">
                <div className="testimonial-content">
                  <p>This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float. </p>
                  <div className="author-quote-item d-flex justify-content-between align-items-center">
                    <div className="author-item">
                      <div className="author-thumb">
                        <img src="/images/author-1.png" alt="author image" />
                      </div>
                      <div className="author-info">
                        <h5>Rhodes Jhon</h5>
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="quote-icon">
                      <i className="flaticon flaticon-right-quote" />
                    </div>
                  </div>
                </div>
              </div>
              {/*=== Testimonial Item ===*/}
              <div className="testimonial-item style-one mb-40">
                <div className="testimonial-content">
                  <p>This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float. </p>
                  <div className="author-quote-item d-flex justify-content-between align-items-center">
                    <div className="author-item">
                      <div className="author-thumb">
                        <img src="/images/author-2.png" alt="author image" />
                      </div>
                      <div className="author-info">
                        <h5>Rhodes Jhon</h5>
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="quote-icon">
                      <i className="flaticon flaticon-right-quote" />
                    </div>
                  </div>
                </div>
              </div>
              {/*=== Testimonial Item ===*/}
              <div className="testimonial-item style-one mb-40">
                <div className="testimonial-content">
                  <p>This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float. </p>
                  <div className="author-quote-item d-flex justify-content-between align-items-center">
                    <div className="author-item">
                      <div className="author-thumb">
                        <img src="/images/author-1.png" alt="author image" />
                      </div>
                      <div className="author-info">
                        <h5>Rhodes Jhon</h5>
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="quote-icon">
                      <i className="flaticon flaticon-right-quote" />
                    </div>
                  </div>
                </div>
              </div>
              {/*=== Testimonial Item ===*/}
              <div className="testimonial-item style-one mb-40">
                <div className="testimonial-content">
                  <p>This inflatable dragon costume seemed perfect for Halloween! But upon inflating, it became clear the wings were uneven, causing me to spin uncontrollably like a rogue pool float. </p>
                  <div className="author-quote-item d-flex justify-content-between align-items-center">
                    <div className="author-item">
                      <div className="author-thumb">
                        <img src="/images/author-2.png" alt="author image" />
                      </div>
                      <div className="author-info">
                        <h5>Rhodes Jhon</h5>
                        <ul className="ratings rating5">
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                          <li><i className="fas fa-star" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="quote-icon">
                      <i className="flaticon flaticon-right-quote" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Testimonial Sections  ======*/}
  {/*====== Start Blog Sections  ======*/}
  <section className="blogs-section pt-125 pb-95">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/*=== Section Title  ===*/}
          <div className="section-title text-center mb-60" data-aos="fade-up" data-aos-duration={1000}>
            <div className="sub-heading d-inline-flex align-items-center">
              <i className="flaticon-sparkler" />
              <span className="sub-title">Our Blogs</span>
              <i className="flaticon-sparkler" />
            </div>
            <h2>Explore our Articles</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          {/*=== Blog Post Item  ===*/}
          {posts[0] && (
            <div className="blog-post-item style-one mb-25" data-aos="fade-up" data-aos-duration={1200}>
              <div className="post-thumbnail">
                <img src={posts[0].image} alt="Post Thumbnail" />
              </div>
              <div className="post-content">
                <h3 className="title"><Link to={`/blog-detail/${posts[0].id}`}>{posts[0].title}</Link></h3>
                <p>{posts[0].excerpt}</p>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-6">
          <div className="row">
            {posts.slice(1, 5).map((post, index) => (
              <div className="col-sm-6" key={post.id}>
                {/*=== Blog Post Item  ===*/}
                <div className="blog-post-item style-two mb-25" data-aos="fade-up" data-aos-duration={1400 + index * 200}>
                  <div className="post-thumbnail">
                    <img src={post.image} alt="Post Thumbnail" />
                  </div>
                  <div className="post-content">
                    <h3 className="title"><Link to={`/blog-detail/${post.id}`}>{post.title}</Link></h3>
                    <div className="post-meta">
                      <span><Link to="#">{post.category}</Link></span>
                      <span><Link to="#">{post.date}</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Blog Sections  ======*/}
  {/*====== Start Newsletter Sections  ======*/}
  <section className="newsletter-section pb-95">
    <div className="container">
      {/*=== Newsletter Wrapper  ===*/}
      <div className="newsletter-wrapper white-bg p-r z-1" data-aos="fade-up" data-aos-duration={1000}>
        <div className="newsletter-shape pattern-one"><span><img src="/images/pattern-1.png" alt="Pattern Shape" /></span></div>
        <div className="newsletter-shape pattern-two"><span><img src="/images/pattern-2.png" alt="Pattern Shape" /></span></div>
        <div className="newsletter-shape shape-one"><span><img src="/images/shape-1_1.png" alt="Shape" /></span></div>
        <div className="row">
          <div className="col-lg-6">
            <div className="newsletter-content-box">
              <span className="sub-text">Our Newsletter</span>
              <h3>Get weekly update. Sign up and get up to <span>20% off</span> your first purchase</h3>
              <form>
                <div className="form-group">
                  <input type="email" className="form_control" placeholder="Write your Email Address" name="email" />
                  <button className="theme-btn style-one">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="newsletter-image">
              <img src="/images/newsletter-1.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Newsletter Sections  ======*/}
</main>

    )
}

export default HomePage;