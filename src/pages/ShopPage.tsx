import { Link } from 'react-router-dom';

const ShopPage = () => {
    return (
       <main className="main-bg">
  {/*====== Start Page Banner Section ======*/}
  <section className="page-banner">
    <div className="page-banner-wrapper p-r z-1">
      <svg className="lineanm" viewBox="0 0 1920 347" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="line" d="M-39 345.187C70 308.353 397.628 293.477 436 145.186C490 -63.5 572 -57.8156 688 255.186C757.071 441.559 989.5 -121.315 1389 98.6856C1708.6 274.686 1940.33 156.519 1964.5 98.6856" stroke="white" strokeWidth={3} strokeDasharray="2 2" />
      </svg>
      <div className="page-image"><img src="/images/page-img-1.png" alt="image" /></div>
      <svg className="page-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.1742 33.0065C14.029 35.2507 7.5486 39.0636 0 40.7339V86H1937V64.9942C1933.1 60.1623 1912.65 65.1777 1904.51 62.6581C1894.22 59.4678 1884.93 55.0079 1873.77 52.7742C1861.2 50.2585 1823.41 36.3854 1811.99 39.9252C1805.05 42.0727 1796.94 37.6189 1789.36 36.6007C1769.18 33.8879 1747.19 31.1848 1726.71 29.7718C1703.81 28.1919 1678.28 27.0012 1657.53 34.4442C1636.45 42.005 1606.07 60.856 1579.5 55.9191C1561.6 52.5906 1543.41 47.0959 1528.45 56.9075C1510.85 68.4592 1485.74 74.2518 1460.44 76.136C1432.32 78.2297 1408.53 70.6879 1384.73 62.2987C1339.52 46.361 1298.19 27.1677 1255.08 9.28534C1242.58 4.10111 1214.68 15.4762 1200.55 16.6533C1189.77 17.5509 1181.74 15.4508 1172.12 12.8795C1152.74 7.70033 1133.23 2.88525 1111.79 2.63621C1088.85 2.36971 1073.94 7.88289 1056.53 15.8446C1040.01 23.3996 1027.48 26.1777 1007.8 26.1777C993.757 26.1777 975.854 25.6887 962.844 28.9632C941.935 34.2258 932.059 38.7874 914.839 28.6037C901.654 20.8061 866.261 -2.56499 844.356 7.12886C831.264 12.9222 820.932 21.5146 807.663 27.5255C798.74 31.5679 779.299 42.0561 766.33 39.1166C758.156 37.2637 751.815 31.6349 745.591 28.2443C730.967 20.2774 715.218 13.2948 695.846 10.723C676.168 8.11038 658.554 23.1787 641.606 27.4357C617.564 33.4742 602.283 27.7951 579.244 27.7951C568.142 27.7951 548.414 30.4002 541.681 23.6618C535.297 17.2722 530.162 9.74921 523.263 3.71444C517.855 -1.01577 505.798 -0.852017 498.318 2.09709C479.032 9.7007 453.07 10.0516 431.025 9.64475C407.556 9.21163 368.679 1.61612 346.618 10.3636C319.648 21.0575 291.717 53.8338 254.67 45.2266C236.134 40.9201 225.134 37.5813 204.78 40.7339C186.008 43.6415 171.665 50.7785 156.051 57.3567C146.567 61.3523 152.335 52.6281 151.12 47.9222C149.535 41.7853 139.994 34.5585 132.991 30.4008C120.206 22.8098 90.2848 24.3246 74.2546 24.6502C55.5552 25.0301 37.9201 27.747 21.1742 33.0065Z" fill="#FFFAF3" />
      </svg>
      <div className="shape shape-one"><span /></div>
      <div className="shape shape-two"><span /></div>
      <div className="shape shape-three"><span><img src="/images/curved-arrow.png"  /></span></div>
      <div className="shape shape-four"><span><img src="/images/stars.png"  /></span></div>                
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="page-banner-content">
              <h1>Shop Page</h1>
              <ul className="breadcrumb-link">
                <li><Link to="/">Home</Link></li>
                <li><i className="far fa-long-arrow-right" /></li>
                <li className="active">Shop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Page Banner Section ======*/}
  {/*====== Start Shop page Section ======*/}
  <section className="shop-page-section pt-120 pb-80">
    <div className="container">
      <div className="row">
        <div className="col-xl-3">
          {/*=== Sidebar Area ===*/}
          <div className="shop-sidebar-area">
            {/*=== Product Widget ===*/}
            <div className="product-widget product-categories-widget mb-40" data-aos="fade-up" data-aos-delay={20} data-aos-duration={1000}>
              <div className="widget-content">
                <h4 className="widget-title">Product Categories</h4>
                <ul className="categories-list">
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="check1" />
                      <label className="form-check-label" htmlFor="check1">
                        Women's Clothing<span>45</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="check2" />
                      <label className="form-check-label" htmlFor="check2">
                        Men's Clothing<span>40</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="check3" />
                      <label className="form-check-label" htmlFor="check3">
                        Formal Wear<span>35</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="check4" />
                      <label className="form-check-label" htmlFor="check4">
                        Footwear<span>59</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="check5" />
                      <label className="form-check-label" htmlFor="check5">
                        Accessories<span>74</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="check6" />
                      <label className="form-check-label" htmlFor="check6">
                        Maternity Wear<span>87</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="check7" />
                      <label className="form-check-label" htmlFor="check7">
                        Vintage Clothing<span>45</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="check8" />
                      <label className="form-check-label" htmlFor="check8">
                        Streetwear<span>88</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="check9" />
                      <label className="form-check-label" htmlFor="check9">
                        Swimwear<span>19</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*=== Sidebar Widget ===*/}
            <div className="product-widget price-filter-widget mb-40 wow fadeInUp" data-aos="fade-up" data-aos-delay={20} data-aos-duration={400}>
              <div className="widget-content">
                <h4 className="widget-title">Price Filter</h4>
                <div className="price-number">
                  <ul>
                    <li><input type="text" id="amount" /></li>
                  </ul>
                </div>
                <div id="slider-range" />
              </div>
            </div>
            {/*=== Sidebar Widget ===*/}
            <div className="product-widget product-categories-widget mb-40" data-aos="fade-up" data-aos-delay={30} data-aos-duration={600}>
              <div className="widget-content">
                <h4 className="widget-title">Brands</h4>
                <ul className="categories-list">
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="br_check1" />
                      <label className="form-check-label" htmlFor="br_check1">
                        Nike<span>19</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="br_check2" />
                      <label className="form-check-label" htmlFor="br_check2">
                        Zara<span>55</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="br_check3" />
                      <label className="form-check-label" htmlFor="br_check3">
                        Denim<span>74</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="br_check4" />
                      <label className="form-check-label" htmlFor="br_check4">
                        Madame<span>12</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="br_check5" />
                      <label className="form-check-label" htmlFor="br_check5">
                        Max Mall<span>45</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="br_check6" />
                      <label className="form-check-label" htmlFor="br_check6">
                        BAGGIE<span>45</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="br_check7" />
                      <label className="form-check-label" htmlFor="br_check7">
                        Kolam<span>74</span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="br_check8" />
                      <label className="form-check-label" htmlFor="br_check8">
                        Sketcen<span>19</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-widget product-color-widget mb-30" data-aos="fade-up" data-aos-delay={40} data-aos-duration={800}>
              <div className="widget-content">
                <h4 className="widget-title">Color</h4>
                <ul className="color-list mb-20">
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="black" id="color1" />
                      <label className="form-check-label" htmlFor="color1">
                        <span className="color1" />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="red" id="color2" />
                      <label className="form-check-label" htmlFor="color2">
                        <span className="color2" />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="blue" id="color3" />
                      <label className="form-check-label" htmlFor="color3">
                        <span className="color3" />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="blue" id="color4" />
                      <label className="form-check-label" htmlFor="color4">
                        <span className="color4" />
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*=== Sidebar Widget ===*/}
            <div className="product-widget product-size-widget mb-30" data-aos="fade-up" data-aos-delay={40} data-aos-duration={1000}>
              <div className="widget-content">
                <h4 className="widget-title">Size</h4>
                <ul className="size-list">
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="Slim Fit" id="size1" />
                      <label className="form-check-label" htmlFor="size1">
                        Slim Fit
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="Slim Fit" id="size2" />
                      <label className="form-check-label" htmlFor="size2">
                        S
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="Slim Fit" id="size3" />
                      <label className="form-check-label" htmlFor="size3">
                        M
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="Slim Fit" id="size4" />
                      <label className="form-check-label" htmlFor="size4">
                        L
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="Slim Fit" id="size5" />
                      <label className="form-check-label" htmlFor="size5">
                        XL
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="Slim Fit" id="size6" />
                      <label className="form-check-label" htmlFor="size6">
                        2XL
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="radio" defaultValue="Slim Fit" id="size7" />
                      <label className="form-check-label" htmlFor="size7">
                        XXL
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*=== Sidebar Widget ===*/}
            <div className="sidebar-banner-widget mb-40" data-aos="fade-up" data-aos-delay={50} data-aos-duration={1200}>
              <div className="banner-widget-content">
                <div className="banner-shape"><img src="/images/banner-shape-1.png" alt="shape" /></div>
                <div className="banner-img"><img src="/images/banner-1.png" alt="image" /></div>
                <div className="content">
                  <span className="sale">BIG SALE</span>
                  <h3>40% <span>off Each Products</span></h3>
                  <Link to="/shop" className="theme-btn style-one">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9">
          {/*=== Shop Page Wrapper ===*/}
          <div className="shop-page-wrapper">
            {/*=== Shop Filter ===*/}
            <div className="shop-filter mb-60" data-aos="fade-up" data-aos-delay={20} data-aos-duration={1000}>
              <div className="row align-items-center">
                <div className="col-sm-5 col-12">
                  <div className="show-text">
                    <p><span>Showing</span>01-16 of 66 Results</p>
                  </div>
                </div>
                <div className="col-sm-2 col-4">
                  <div className="filter-grid-list text-center">
                    <Link to="#"><i className="far fa-th" /></Link>
                    <Link to="#"><i className="far fa-list" /></Link>
                  </div>
                </div>
                <div className="col-sm-5 col-8">
                  <div className="filter-product-category d-flex align-items-center">
                    <select className="wide">
                      <option>Default</option>
                      <option>Sort by Newness</option>
                      <option>Price High To Low</option>
                      <option>Price Low To High</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6 col-sm-12">
                {/*=== Product Item  ===*/}
                <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={25} data-aos-duration={400}>
                  <div className="product-thumbnail">
                    <img src="/images/feature-product-2.png" alt="Products" />
                    <div className="discount">10% Off</div>
                    <div className="hover-content">
                      <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                      <a href="images/products/feature-product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></a>
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
                        <li><Link to="#">(65)</Link></li>
                      </ul>
                      <h4 className="title"><Link to="/product-detail">Lightweight linen summer dress with belt</Link></h4>
                    </div>
                    <div className="product-price">
                      <span className="price prev-price"><span className="currency">$</span>80.00</span>
                      <span className="price new-price"><span className="currency">$</span>40.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                {/*=== Product Item  ===*/}
                <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={30} data-aos-duration={600}>
                  <div className="product-thumbnail">
                    <img src="/images/feature-product-1.png" alt="Products" />
                    <div className="discount">10% Off</div>
                    <div className="hover-content">
                      <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                      <a href="images/products/feature-product-1.png" className="img-popup icon-btn"><i className="fa fa-eye" /></a>
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
                        <li><Link to="#">(20)</Link></li>
                      </ul>
                      <h4 className="title"><Link to="/product-detail">Cozy knit sweater with pockets</Link></h4>
                    </div>
                    <div className="product-price">
                      <span className="price prev-price"><span className="currency">$</span>50.00</span>
                      <span className="price new-price"><span className="currency">$</span>20.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                {/*=== Product Item  ===*/}
                <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={35} data-aos-duration={800}>
                  <div className="product-thumbnail">
                    <img src="/images/feature-product-4.png" alt="Products" />
                    <div className="discount">10% Off</div>
                    <div className="hover-content">
                      <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                      <a href="images/products/feature-product-4.png" className="img-popup icon-btn"><i className="fa fa-eye" /></a>
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
                        <li><Link to="#">(36)</Link></li>
                      </ul>
                      <h4 className="title"><Link to="/product-detail">Athletic leggings with mesh panels</Link></h4>
                    </div>
                    <div className="product-price">
                      <span className="price prev-price"><span className="currency">$</span>70.00</span>
                      <span className="price new-price"><span className="currency">$</span>40.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                {/*=== Product Item  ===*/}
                <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={40} data-aos-duration={1000}>
                  <div className="product-thumbnail">
                    <img src="/images/product-1.png" alt="Products" />
                    <div className="discount">10% Off</div>
                    <div className="hover-content">
                      <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                      <a href="images/products/product-1.png" className="img-popup icon-btn"><i className="fa fa-eye" /></a>
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
                        <li><Link to="#">(33)</Link></li>
                      </ul>
                      <h4 className="title"><Link to="/product-detail">Classic leather biker jacket with zippers</Link></h4>
                    </div>
                    <div className="product-price">
                      <span className="price prev-price"><span className="currency">$</span>85.00</span>
                      <span className="price new-price"><span className="currency">$</span>35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                {/*=== Product Item  ===*/}
                <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={45} data-aos-duration={1200}>
                  <div className="product-thumbnail">
                    <img src="/images/product-2.png" alt="Products" />
                    <div className="discount">10% Off</div>
                    <div className="hover-content">
                      <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                      <a href="images/products/product-2.png" className="img-popup icon-btn"><i className="fa fa-eye" /></a>
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
                        <li><Link to="#">(15)</Link></li>
                      </ul>
                      <h4 className="title"><Link to="/product-detail">Floral print sundress with adjustable straps</Link></h4>
                    </div>
                    <div className="product-price">
                      <span className="price prev-price"><span className="currency">$</span>67.00</span>
                      <span className="price new-price"><span className="currency">$</span>26.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                {/*=== Product Item  ===*/}
                <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={50} data-aos-duration={1400}>
                  <div className="product-thumbnail">
                    <img src="/images/product-3.png" alt="Products" />
                    <div className="discount">10% Off</div>
                    <div className="hover-content">
                      <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                      <a href="images/products/product-3.png" className="img-popup icon-btn"><i className="fa fa-eye" /></a>
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
                        <li><Link to="#">(30)</Link></li>
                      </ul>
                      <h4 className="title"><Link to="/product-detail">Relaxed fit denim jeans with distressing</Link></h4>
                    </div>
                    <div className="product-price">
                      <span className="price prev-price"><span className="currency">$</span>50.00</span>
                      <span className="price new-price"><span className="currency">$</span>30.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                {/*=== Product Item  ===*/}
                <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={55} data-aos-duration={1600}>
                  <div className="product-thumbnail">
                    <img src="/images/feature-product-3.png" alt="Products" />
                    <div className="discount">10% Off</div>
                    <div className="hover-content">
                      <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                      <a href="images/products/feature-product-3.png" className="img-popup icon-btn"><i className="fa fa-eye" /></a>
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
                        <li><Link to="#">(45)</Link></li>
                      </ul>
                      <h4 className="title"><Link to="/product-detail">Cargo shorts with pockets and drawstring</Link></h4>
                    </div>
                    <div className="product-price">
                      <span className="price prev-price"><span className="currency">$</span>40.00</span>
                      <span className="price new-price"><span className="currency">$</span>20.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                {/*=== Product Item  ===*/}
                <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={60} data-aos-duration={1800}>
                  <div className="product-thumbnail">
                    <img src="/images/product-4.png" alt="Products" />
                    <div className="discount">10% Off</div>
                    <div className="hover-content">
                      <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                      <a href="images/products/product-4.png" className="img-popup icon-btn"><i className="fa fa-eye" /></a>
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
                      <span className="price prev-price"><span className="currency">$</span>89.00</span>
                      <span className="price new-price"><span className="currency">$</span>34.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                {/*=== Product Item  ===*/}
                <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={65} data-aos-duration={2000}>
                  <div className="product-thumbnail">
                    <img src="/images/product-5.png" alt="Products" />
                    <div className="discount">10% Off</div>
                    <div className="hover-content">
                      <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
                      <a href="images/products/product-5.png" className="img-popup icon-btn"><i className="fa fa-eye" /></a>
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
                      <h4 className="title"><Link to="/product-detail">Cashmere v-neck sweater with ribbed cuffs</Link></h4>
                    </div>
                    <div className="product-price">
                      <span className="price prev-price"><span className="currency">$</span>56.00</span>
                      <span className="price new-price"><span className="currency">$</span>07.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="pesco-pagination mb-40" data-aos="fade-up" data-aos-delay={70} data-aos-duration={2200}>
                  <ul>
                    <li><Link to="#"><i className="far fa-angle-left" /></Link></li>
                    <li><Link to="#">01</Link></li>
                    <li><Link to="#">02</Link></li>
                    <li><Link to="#">....</Link></li>
                    <li><Link to="#">20</Link></li>
                    <li><Link to="#"><i className="far fa-angle-right" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Shop page Section ======*/}
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

export default ShopPage;