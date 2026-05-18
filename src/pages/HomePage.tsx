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

  return (
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
                      <span className="sub-heading">Phù hợp nhất với bạn</span>
                      <h1>Bộ sưu tập độc quyền <br />
                        tại cửa hàng <span>Trực tuyến</span></h1>
                      <p>Khám phá bộ sưu tập độc quyền chỉ có tại cửa hàng trực tuyến của chúng tôi. Mua sắm ngay những sản phẩm cao cấp, độc đáo nhất.</p>
                      <ul>
                        <li>
                          <div className="price-box">
                            <div className="currency">$</div>
                            <div className="text">
                              <span className="discount">Giá ưu đãi</span>
                              <h3>140.00</h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img src="/images/line-1.png" alt="line" />
                        </li>
                        <li>
                          <Link to="/shop" className="theme-btn style-one">Mua sắm ngay</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/*=== Hero Image ===*/}
                    <div className="hero-image-box">
                      <div className="hero-image">
                        <img src="/images/hero-one_img1.jpg" alt="Hero Image" />
                        <div className="hero-shape bg_cover" style={{ backgroundImage: 'url(/images/hero-one-shape1.png)' }} />
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
                      <span className="sub-heading">Phù hợp nhất với bạn</span>
                      <h1>Bộ sưu tập độc quyền <br />
                        tại cửa hàng <span>Trực tuyến</span></h1>
                      <p>Khám phá bộ sưu tập độc quyền chỉ có tại cửa hàng trực tuyến của chúng tôi. Mua sắm ngay những sản phẩm cao cấp, độc đáo nhất.</p>
                      <ul>
                        <li>
                          <div className="price-box">
                            <div className="currency">$</div>
                            <div className="text">
                              <span className="discount">Giá ưu đãi</span>
                              <h3>140.00</h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img src="/images/line-1.png" alt="line" />
                        </li>
                        <li>
                          <Link to="/shop" className="theme-btn style-one">Mua sắm ngay</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/*=== Hero Image ===*/}
                    <div className="hero-image-box">
                      <div className="hero-image">
                        <img src="/images/hero-one_img1.jpg" alt="Hero Image" />
                        <div className="hero-shape bg_cover" style={{ backgroundImage: 'url(/images/hero-one-shape1.png)' }} />
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
                      <span className="sub-heading">Phù hợp nhất với bạn</span>
                      <h1>Bộ sưu tập độc quyền <br />
                        tại cửa hàng <span>Trực tuyến</span></h1>
                      <p>Khám phá bộ sưu tập độc quyền chỉ có tại cửa hàng trực tuyến của chúng tôi. Mua sắm ngay những sản phẩm cao cấp, độc đáo nhất.</p>
                      <ul>
                        <li>
                          <div className="price-box">
                            <div className="currency">$</div>
                            <div className="text">
                              <span className="discount">Giá ưu đãi</span>
                              <h3>140.00</h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <img src="/images/line-1.png" alt="line" />
                        </li>
                        <li>
                          <Link to="/shop" className="theme-btn style-one">Mua sắm ngay</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/*=== Hero Image ===*/}
                    <div className="hero-image-box">
                      <div className="hero-image">
                        <img src="/images/hero-one_img1.jpg" alt="Hero Image" />
                        <div className="hero-shape bg_cover" style={{ backgroundImage: 'url(/images/hero-one-shape1.png)' }} />
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
              <span className="marquee-item"><b>Thời trang Nữ</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Áo sơ mi</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Áo khoác</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Quần Jeans</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Áo Blazer</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Thời trang Nam</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Đồ hè</b><i className="fas fa-bahai" /></span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item"><b>Thời trang Nữ</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Áo sơ mi</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Áo khoác</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Quần Jeans</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Áo Blazer</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Thời trang Nam</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Đồ hè</b><i className="fas fa-bahai" /></span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item"><b>Thời trang Nữ</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Áo sơ mi</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Áo khoác</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Quần Jeans</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Áo Blazer</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Thời trang Nam</b><i className="fas fa-bahai" /></span>
              <span className="marquee-item"><b>Đồ hè</b><i className="fas fa-bahai" /></span>
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
                    <h5>Giao hàng miễn phí</h5>
                    <p>Bạn nhận sản phẩm được giao hàng tận nơi mà không tốn thêm chi phí.</p>
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
                    <h5>Hỗ trợ 24/7 tận tâm</h5>
                    <p>Đội ngũ chăm sóc khách hàng của chúng tôi luôn trực tuyến hỗ trợ bạn.</p>
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
                    <h5>Chính sách đổi trả dễ dàng</h5>
                    <p>Đổi trả sản phẩm dễ dàng trong vòng 5 ngày nếu không vừa ý.</p>
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
                    <h5>Thanh toán an toàn</h5>
                    <p>Mua sắm tự tin với các phương thức thanh toán bảo mật tuyệt đối.</p>
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
                  <span className="sub-title">Danh mục sản phẩm</span>
                </div>
                <h2>Khám phá danh mục nổi bật</h2>
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
              <Link to="/shop" className="category-btn">Áo sơ mi Nam</Link>
            </div>
          </div>
          {/*=== Category Item ===*/}
          <div className="category-item style-one text-center">
            <div className="category-img">
              <img src="/images/category-2.png" alt="category image" />
            </div>
            <div className="category-content">
              <Link to="/shop" className="category-btn">Quần Jeans Denim</Link>
            </div>
          </div>
          {/*=== Category Item ===*/}
          <div className="category-item style-one text-center">
            <div className="category-img">
              <img src="/images/category-3.png" alt="category image" />
            </div>
            <div className="category-content">
              <Link to="/shop" className="category-btn">Vét thường ngày</Link>
            </div>
          </div>
          {/*=== Category Item ===*/}
          <div className="category-item style-one text-center">
            <div className="category-img">
              <img src="/images/category-4.png" alt="category image" />
            </div>
            <div className="category-content">
              <Link to="/shop" className="category-btn">Đầm Hè mát mẻ</Link>
            </div>
          </div>
          {/*=== Category Item ===*/}
          <div className="category-item style-one text-center">
            <div className="category-img">
              <img src="/images/category-5.png" alt="category image" />
            </div>
            <div className="category-content">
              <Link to="/shop" className="category-btn">Áo len sành điệu</Link>
            </div>
          </div>
          {/*=== Category Item ===*/}
          <div className="category-item style-one text-center">
            <div className="category-img">
              <img src="/images/category-6.png" alt="category image" />
            </div>
            <div className="category-content">
              <Link to="/shop" className="category-btn">Áo khoác ấm áp</Link>
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
                  <span>GIẢM TỚI <span className="off">50%</span></span>
                  <h4>Trang phục mùa hè độc quyền cho cả gia đình</h4>
                  <Link to="/shop" className="theme-btn style-one">Mua sắm ngay</Link>
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
                  <span>GIẢM TỚI <span className="off">70%</span></span>
                  <h4>Trang phục dạo phố cực chất &amp; năng động</h4>
                  <Link to="/shop" className="theme-btn style-one">Mua sắm ngay</Link>
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
                  <span className="sub-title">Sản phẩm nổi bật</span>
                </div>
                <h2>Bộ sưu tập nổi bật của chúng tôi</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Pesco Tabs ===*/}
              <div className="pesco-tabs style-one mb-50" data-aos="fade-left" data-aos-delay={15} data-aos-duration={1200}>
                <ul className="nav nav-tabs" role="tablist">
                  <li>
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#cat1" role="tab">Bán chạy nhất</button>
                  </li>
                  <li>
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cat2" role="tab">Sản phẩm mới</button>
                  </li>
                  <li>
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cat3" role="tab">Sản phẩm giảm giá</button>
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
                          <div className="discount">Giảm 10%</div>
                          <div className="hover-content">
                            <Link 
                              to="#" 
                              className={`icon-btn ${isInWishlist(101) ? 'active' : ''}`} 
                              onClick={(e) => handleToggleWishlist(e, { id: 101, title: 'Đầm hè chất linen nhẹ mát kèm đai lưng', image: '/images/feature-product-1.png', newPrice: '40.00', prevPrice: '80.00', discount: 'Giảm 10%', rating: 5, reviewsCount: 80, popupImage: '' })}
                              style={{ color: isInWishlist(101) ? '#ff4d4d' : 'inherit' }}
                            >
                              <i className={isInWishlist(101) ? "fas fa-heart" : "fa fa-heart"} />
                            </Link>
                            <Link to="/images/feature-product-1.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                          </div>
                          <div className="cart-button">
                            <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 101, title: 'Đầm hè chất linen nhẹ mát kèm đai lưng', image: '/images/feature-product-1.png', newPrice: '40.00', prevPrice: '80.00', discount: 'Giảm 10%', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                            <h4 className="title"><Link to="/product-detail/101">Đầm hè chất linen nhẹ mát kèm đai lưng</Link></h4>
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
                          <div className="discount">Giảm 40%</div>
                          <div className="hover-content">
                            <Link 
                              to="#" 
                              className={`icon-btn ${isInWishlist(102) ? 'active' : ''}`} 
                              onClick={(e) => handleToggleWishlist(e, { id: 102, title: 'Áo len dệt kim ấm áp có túi', image: '/images/feature-product-2.png', newPrice: '23.00', prevPrice: '67.00', discount: 'Giảm 40%', rating: 5, reviewsCount: 80, popupImage: '' })}
                              style={{ color: isInWishlist(102) ? '#ff4d4d' : 'inherit' }}
                            >
                              <i className={isInWishlist(102) ? "fas fa-heart" : "fa fa-heart"} />
                            </Link>
                            <Link to="/images/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                          </div>
                          <div className="cart-button">
                            <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 102, title: 'Áo len dệt kim ấm áp có túi', image: '/images/feature-product-2.png', newPrice: '23.00', prevPrice: '67.00', discount: 'Giảm 40%', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                            <h4 className="title"><Link to="/product-detail/102">Áo len dệt kim ấm áp có túi</Link></h4>
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
                          <div className="discount">Giảm 10%</div>
                          <div className="hover-content">
                            <Link 
                              to="#" 
                              className={`icon-btn ${isInWishlist(103) ? 'active' : ''}`} 
                              onClick={(e) => handleToggleWishlist(e, { id: 103, title: 'Quần legging thể thao phối lưới', image: '/images/feature-product-3.png', newPrice: '40.00', prevPrice: '80.00', discount: 'Giảm 10%', rating: 5, reviewsCount: 80, popupImage: '' })}
                              style={{ color: isInWishlist(103) ? '#ff4d4d' : 'inherit' }}
                            >
                              <i className={isInWishlist(103) ? "fas fa-heart" : "fa fa-heart"} />
                            </Link>
                            <Link to="/images/feature-product-3.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                          </div>
                          <div className="cart-button">
                            <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 103, title: 'Quần legging thể thao phối lưới', image: '/images/feature-product-3.png', newPrice: '40.00', prevPrice: '80.00', discount: 'Giảm 10%', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                            <h4 className="title"><Link to="/product-detail/103">Quần legging thể thao phối lưới</Link></h4>
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
                          <div className="discount">Giảm 40%</div>
                          <div className="hover-content">
                            <Link 
                              to="#" 
                              className={`icon-btn ${isInWishlist(104) ? 'active' : ''}`} 
                              onClick={(e) => handleToggleWishlist(e, { id: 104, title: 'Áo khoác da biker cổ điển có khóa kéo', image: '/images/feature-product-4.png', newPrice: '23.00', prevPrice: '67.00', discount: 'Giảm 40%', rating: 5, reviewsCount: 80, popupImage: '' })}
                              style={{ color: isInWishlist(104) ? '#ff4d4d' : 'inherit' }}
                            >
                              <i className={isInWishlist(104) ? "fas fa-heart" : "fa fa-heart"} />
                            </Link>
                            <Link to="/images/feature-product-4.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                          </div>
                          <div className="cart-button">
                            <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 104, title: 'Áo khoác da biker cổ điển có khóa kéo', image: '/images/feature-product-4.png', newPrice: '23.00', prevPrice: '67.00', discount: 'Giảm 40%', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                            <h4 className="title"><Link to="/product-detail/104">Áo khoác da biker cổ điển có khóa kéo</Link></h4>
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
                          <div className="discount">Giảm 10%</div>
                          <div className="hover-content">
                            <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                            <Link to="/images/feature-product-1.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                          </div>
                          <div className="cart-button">
                            <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 101, title: 'Đầm hè chất linen nhẹ mát kèm đai lưng', image: '/images/feature-product-1.png', newPrice: '40.00', prevPrice: '80.00', discount: 'Giảm 10%', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                            <h4 className="title"><Link to="/product-detail/101">Đầm hè chất linen nhẹ mát kèm đai lưng</Link></h4>
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
                          <div className="discount">Giảm 40%</div>
                          <div className="hover-content">
                            <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                            <Link to="/images/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                          </div>
                          <div className="cart-button">
                            <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 102, title: 'Áo len dệt kim ấm áp có túi', image: '/images/feature-product-2.png', newPrice: '23.00', prevPrice: '67.00', discount: 'Giảm 40%', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                            <h4 className="title"><Link to="/product-detail/102">Áo len dệt kim ấm áp có túi</Link></h4>
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
                          <div className="discount">Giảm 10%</div>
                          <div className="hover-content">
                            <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                            <Link to="/images/feature-product-3.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                          </div>
                          <div className="cart-button">
                            <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 103, title: 'Quần legging thể thao phối lưới', image: '/images/feature-product-3.png', newPrice: '40.00', prevPrice: '80.00', discount: 'Giảm 10%', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                            <h4 className="title"><Link to="/product-detail/103">Quần legging thể thao phối lưới</Link></h4>
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
                          <div className="discount">Giảm 40%</div>
                          <div className="hover-content">
                            <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                            <Link to="/images/feature-product-4.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                          </div>
                          <div className="cart-button">
                            <Link to="#" className="cart-btn" onClick={(e) => { e.preventDefault(); useShopStore.getState().addToCart({ id: 104, title: 'Áo khoác da biker cổ điển có khóa kéo', image: '/images/feature-product-4.png', newPrice: '23.00', prevPrice: '67.00', discount: 'Giảm 40%', rating: 5, reviewsCount: 80, popupImage: '' }); }}><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                            <h4 className="title"><Link to="/product-detail/104">Áo khoác da biker cổ điển có khóa kéo</Link></h4>
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
                  <span className="sub-title">Sản phẩm nổi bật</span>
                </div>
                <h2>Bộ sưu tập nổi bật của chúng tôi</h2>
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
                <div className="discount">Giảm 80%</div>
                <div className="hover-content">
                  <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                  <Link to="/images/feature-product-1.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                </div>
                <div className="cart-button">
                  <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                  <h4 className="title"><Link to="/shop">Áo len dệt kim ấm áp có túi</Link></h4>
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
                <div className="discount">Giảm 80%</div>
                <div className="hover-content">
                  <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                  <Link to="/images/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                </div>
                <div className="cart-button">
                  <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                  <h4 className="title"><Link to="/shop">Đầm lụa sang trọng đính kim sa lấp lánh</Link></h4>
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
                <div className="discount">Giảm 40%</div>
                <div className="hover-content">
                  <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                  <Link to="/images/feature-product-3.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                </div>
                <div className="cart-button">
                  <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                  <h4 className="title"><Link to="/shop">Quần shorts túi hộp năng động kèm dây rút</Link></h4>
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
                <div className="discount">Giảm 10%</div>
                <div className="hover-content">
                  <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                  <Link to="/images/feature-product-4.png" className="img-popup icon-btn"><i className="fa fa-eye" /></Link>
                </div>
                <div className="cart-button">
                  <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Thêm vào giỏ</span></Link>
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
                  <h4 className="title"><Link to="/shop">Quần legging thể thao phối lưới</Link></h4>
                </div>
                <div className="product-price">
                  <span className="price prev-price"><span className="currency">$</span>80.00</span>
                  <span className="price new-price"><span className="currency">$</span>40.00</span>
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
                  <span className="sub-title">Quy trình làm việc</span>
                  <i className="flaticon-sparkler" />
                </div>
                <h2>Cách thức hoạt động của chúng tôi</h2>
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
                  <h6>Duyệt &amp; Chọn sản phẩm</h6>
                  <p>Khách hàng truy cập trang web của chúng tôi và lựa chọn sản phẩm ưa thích.</p>
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
                  <h6>Thanh toán &amp; Đặt hàng</h6>
                  <p>Sau khi chọn xong các mặt hàng, khách hàng tiến hành điền thông tin thanh toán.</p>
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
                  <h6>Chuẩn bị đơn hàng</h6>
                  <p>Đơn hàng sau khi đặt thành công sẽ lập tức được đội ngũ soạn hàng đóng gói.</p>
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
                  <h6>Giao hàng tận nơi</h6>
                  <p>Kiện hàng được bàn giao cho đơn vị vận chuyển uy tín để giao nhanh đến bạn.</p>
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
                  <span className="sub-title">Sản phẩm xu hướng</span>
                </div>
                <h2>Xu hướng thời trang hiện nay</h2>
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
      {/*====== Start Deal Section  ======*/}
      <section className="best-deal-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="offer-deal-wrapper bg_cover" data-aos="fade-up" data-aos-duration={1400} style={{ backgroundImage: 'url(/images/deal-bg-1.png)' }}>
                <div className="deal-img">
                  <span><img src="/images/deal-1.png" alt="Image" /></span>
                </div>
                <div className="deal-content">
                  <span className="sub-heading"><i className="fas fa-tags" />Ưu đãi trong tuần</span>
                  <h2>Nhanh tay lên! Ưu đãi sắp kết thúc. GIẢM GIÁ LÊN TỚI <span>80%</span></h2>
                  <div className="simply-countdown mb-60" />
                  <div className="shop-button">
                    <Link to="/shop" className="theme-btn style-one">Mua sắm ngay</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/*====== End Deal Section  ======*/}
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
                    <h2>Khách hàng nói gì về chúng tôi</h2>
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
                      <p>Trải nghiệm mua sắm ở đây rất tuyệt vời! Các mẫu đầm váy thiết kế vô cùng tôn dáng, chất vải mát mịn, mặc cả ngày không hề thấy bí bách. Dịch vụ chăm sóc khách hàng phản hồi rất nhanh.</p>
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
                      <p>Trải nghiệm mua sắm ở đây rất tuyệt vời! Các mẫu đầm váy thiết kế vô cùng tôn dáng, chất vải mát mịn, mặc cả ngày không hề thấy bí bách. Dịch vụ chăm sóc khách hàng phản hồi rất nhanh.</p>
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
                  <span className="sub-title">Tin tức &amp; Xu hướng</span>
                  <i className="flaticon-sparkler" />
                </div>
                <h2>Khám phá bài viết của chúng tôi</h2>
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
                  <span className="sub-text">Bản tin của chúng tôi</span>
                  <h3>Nhận cập nhật hàng tuần. Đăng ký ngay để nhận ưu đãi giảm tới <span>20%</span> cho đơn hàng đầu tiên</h3>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input type="email" className="form_control" placeholder="Nhập địa chỉ Email của bạn..." name="email" required />
                      <button className="theme-btn style-one">Đăng ký</button>
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
  );
};

export default HomePage;