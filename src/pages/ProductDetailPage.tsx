import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
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
              <h1>Shop Details</h1>
              <ul className="breadcrumb-link">
                <li><Link to="/">Home</Link></li>
                <li><i className="far fa-long-arrow-right" /></li>
                <li className="active">Shop Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Page Banner Section ======*/}
  {/*====== Start Shop Details Section ======*/}
  <section className="shop-details-section pt-120 pb-80">
    <div className="container">
      <div className="shop-details-wrapper">
        <div className="row">
          <div className="col-xl-6">
            {/*=== Product Gallery ===*/}
            <div className="product-gallery-area mb-50" data-aos="fade-up" data-aos-duration={1200}>
              <div className="product-big-slider mb-30">
                <div className="product-img">
                  <a href="images/products/product-big-1.jpg" className="img-popup"><img src="/images/product-big-1.jpg" alt="Product" /></a>
                </div>
                <div className="product-img">
                  <a href="images/products/product-big-2.jpg" className="img-popup"><img src="/images/product-big-2.jpg" alt="Product" /></a>
                </div>
                <div className="product-img">
                  <a href="images/products/product-big-3.jpg" className="img-popup"><img src="/images/product-big-3.jpg" alt="Product" /></a>
                </div>
                <div className="product-img">
                  <a href="images/products/product-big-4.jpg" className="img-popup"><img src="/images/product-big-4.jpg" alt="Product" /></a>
                </div>
                <div className="product-img">
                  <a href="images/products/product-big-5.jpg" className="img-popup"><img src="/images/product-big-5.jpg" alt="Product" /></a>
                </div>
              </div>
              <div className="product-thumb-slider">
                <div className="product-img">
                  <img src="/images/product-thumb-1.jpg" alt="Product" />
                </div>
                <div className="product-img">
                  <img src="/images/product-thumb-2.jpg" alt="Product" />
                </div>
                <div className="product-img">
                  <img src="/images/product-thumb-3.jpg" alt="Product" />
                </div>
                <div className="product-img">
                  <img src="/images/product-thumb-4.jpg" alt="Product" />
                </div>
                <div className="product-img">
                  <img src="/images/product-thumb-5.jpg" alt="Product" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="product-info mb-50" data-aos="fade-up" data-aos-duration={1400}>
              <span className="sale"><i className="fas fa-tags" />SALE 70% OFF</span>
              <h4 className="title">Cargo shorts with pockets &amp; sundress drawstring </h4>
              <ul className="ratings rating5">
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><Link to="#">(45 Reviews)</Link></li>
              </ul>
              <p>A type of casual shorts, typically for men, with multiple pockets for function.
                Sundress with drawstring: A loose-fitting, sleeveless dress, often for women, with a drawstring at the waist for adjustability and a relaxed silhouette.</p>
              <div className="product-price">
                <span className="price prev-price"><span className="currency">$</span>70.00</span>
                <span className="price new-price"><span className="currency">$</span>40.00</span>
              </div>
              <div className="product-color">
                <h4 className="mb-15">Color</h4>
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
              <div className="product-size">
                <h4 className="mb-15">Size</h4>
                <ul className="size-list mb-30">
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
                </ul>
              </div>
              <div className="product-cart-variation">
                <ul>
                  <li>
                    <div className="quantity-input">
                      <button className="quantity-down"><i className="far fa-minus" /></button>
                      <input className="quantity" type="text" defaultValue={1} name="quantity" />
                      <button className="quantity-up"><i className="far fa-plus" /></button>
                    </div>
                  </li>
                  <li>
                    <Link to="/shop" className="theme-btn style-one">Add To cart</Link>
                  </li>
                  <li>
                    <Link to="/shop" className="icon-btn"><i className="far fa-heart" /></Link>
                  </li>
                  <li>
                    <Link to="/shop" className="icon-btn"><i className="far fa-sync" /></Link>
                  </li>
                </ul>
              </div>
              <div className="product-meta">
                <ul>
                  <li><span>SKU :</span>KE-91039</li>
                  <li><span>Category :</span>Women Cloths</li>
                  <li><span>Tags :</span><Link to="#">Bags</Link>,<Link to="#">Cloths</Link>,<Link to="#">Dress</Link></li>
                  <li><span>Share :</span>
                    <Link to="#"><i className="fab fa-facebook-f" /></Link>
                    <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                    <Link to="#"><i className="fab fa-instagram" /></Link>
                    <Link to="#"><i className="fab fa-twitter" /></Link>
                  </li>
                </ul>
              </div>
              <div className="special-features">
                <span><i className="far fa-shipping-fast" />Free Shipping</span>
                <span><i className="far fa-box-open" />Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
        <div className="additional-information-wrapper" data-aos="fade-up" data-aos-delay={30} data-aos-duration={1000}>
          <div className="row">
            <div className="col-lg-5">
              <div className="additional-info-box mb-40">
                <h3>Additional Information:</h3>
                <ul>
                  <li>Fabric type <span>Georgette</span></li>
                  <li>Care instructions:<span>Machine Wash</span></li>
                  <li>Occasion type: <span>Casual</span></li>
                  <li>Sleeve type: <span>Long Sleeve</span></li>
                  <li>Pattern:<span>Solid</span></li>
                  <li>Closure type: <span>Georgette</span></li>
                  <li>Country of Origin<span>Bangladesh</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="description-wrapper mb-40">
                <div className="pesco-tabs style-two mb-50">
                  <ul className="nav nav-tabs">
                    <li>
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#description">Description</button>
                    </li>
                    <li>
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#reviews">Reviews</button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="description">
                    <h4>Description</h4>
                    <p>Cargo shorts: Rugged, casual shorts with multiple pockets for utility, often in khaki or olive green.
                      Sundress with drawstring: A breezy, summery dress with a flowy skirt, often made from light, patterned fabric. It has a drawstring waist for a comfortable, adjustable fit. Designed for practicality, cargo shorts boast numerous pockets on the legs and hips. everyday wear for someone who needs to carry a lot.</p>
                    <h4>Features</h4>
                    <ul className="list">
                      <li>Function First</li>
                      <li>Summer Breeze </li>
                      <li>Casual and Rugged</li>
                      <li>Possible Interpretations</li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="reviews">
                    <div className="pesco-comment-area mb-80">
                      <h4>Total Reviews (90)</h4>
                      <ul>
                        <li className="comment">
                          <div className="pesco-reviews-item">
                            <div className="author-thumb-info">
                              <div className="author-thumb">
                                <img src="/images/review-1.jpg" alt="Auhthor" />
                              </div>
                              <div className="author-info">
                                <h5>Amelia Rodriguez</h5>
                                <div className="author-meta">
                                  <ul className="ratings">
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                  </ul>
                                  <span>20 March 2024</span>
                                </div>
                              </div>
                            </div>
                            <div className="author-review-content">
                              <p>Men’s Slim Fit Dress Shirt is an excellent choice for those who value modern style and impeccable tailoring. Crafted from a high-quality blend of cotton and polyester, this shirt offers a smooth, wrinkle-resistant finish that stays crisp throughout the day.</p>
                            </div>
                            <Link to="#" className="reply"><i className="fas fa-reply-all" />Reply</Link>
                          </div>
                        </li>
                        <li className="comment">
                          <div className="pesco-reviews-item">
                            <div className="author-thumb-info">
                              <div className="author-thumb">
                                <img src="/images/review-2.jpg" alt="Auhthor" />
                              </div>
                              <div className="author-info">
                                <h5>Amelia Rodriguez</h5>
                                <div className="author-meta">
                                  <ul className="ratings">
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                  </ul>
                                  <span>20 March 2024</span>
                                </div>
                              </div>
                            </div>
                            <div className="author-review-content">
                              <p>Men’s Slim Fit Dress Shirt is an excellent choice for those who value modern style and impeccable tailoring. Crafted from a high-quality blend of cotton and polyester, this shirt offers a smooth, wrinkle-resistant finish that stays crisp throughout the day.</p>
                            </div>
                            <Link to="#" className="reply"><i className="fas fa-reply-all" />Reply</Link>
                          </div>
                          <ul className="reviews-reply">
                            <li className="comment">
                              <div className="pesco-reviews-item">
                                <div className="author-thumb-info">
                                  <div className="author-thumb">
                                    <img src="/images/review-3.jpg" alt="Auhthor" />
                                  </div>
                                  <div className="author-info">
                                    <h5>Amelia Rodriguez</h5>
                                    <div className="author-meta">
                                      <ul className="ratings">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                      </ul>
                                      <span>20 March 2024</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="author-review-content">
                                  <p>Men’s Slim Fit Dress Shirt is an excellent choice for those who value modern style and impeccable tailoring. Crafted from a high-quality blend of cotton and polyester, this shirt offers a smooth, wrinkle-resistant finish that stays crisp throughout the day.</p>
                                </div>
                                <Link to="#" className="reply"><i className="fas fa-reply-all" />Reply</Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="reviews-contact-area">
                      <h4>Write Comment</h4>
                      <ul className="ratings rating5 mb-40">
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><Link to="#">(10)</Link></li>
                      </ul>
                      <form className="pesco-contact-form">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input type="text" placeholder="Name" className="form_control" name="name" required />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input type="email" placeholder="Email" className="form_control" name="Email" required />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <textarea className="form_control" placeholder="Write Reviews" name="message" cols={5} rows={10} defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <button className="theme-btn style-one">Submit Review</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Shop Details Section ======*/}
  {/*====== Related Product Section ======*/}
  <section className="releted-product-section pb-90">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/*=== Section Title ===*/}
          <div className="section-title mb-50" data-aos="fade-right" data-aos-delay={50} data-aos-duration={1000}>
            <div className="sub-heading d-inline-flex align-items-center">
              <i className="flaticon-sparkler" />
              <span className="sub-title">Releted Products</span>
            </div>
            <h2>Customers also purchased</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="releted-product-arrows style-one mb-50" data-aos="fade-left" data-aos-delay={70} data-aos-duration={1300} />
        </div>
      </div>
      <div className="releted-product-slider">
        {/*=== Project Item  ===*/}
        <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={90} data-aos-duration={1500}>
          <div className="product-thumbnail">
            <img src="/images/feature-product-1.png" alt="Products" />
            <div className="discount">80% Off</div>
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
        <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={90} data-aos-duration={1700}>
          <div className="product-thumbnail">
            <img src="/images/feature-product-2.png" alt="Products" />
            <div className="discount">80% Off</div>
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
        <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={110} data-aos-duration={1900}>
          <div className="product-thumbnail">
            <img src="/images/feature-product-3.png" alt="Products" />
            <div className="discount">40% Off</div>
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
        <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={130} data-aos-duration={2100}>
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
        <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={150} data-aos-duration={2300}>
          <div className="product-thumbnail">
            <img src="/images/feature-product-2.png" alt="Products" />
            <div className="discount">80% Off</div>
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
  </section>{/*====== End Product Section ======*/}
  {/*====== Start Newsletter Sections  ======*/}
  <section className="newsletter-section pb-95">
    <div className="container">
      {/*=== Newsletter Wrapper  ===*/}
      <div className="newsletter-wrapper white-bg p-r z-1" data-aos="fade-up" data-aos-duration={1000}>
        <div className="newsletter-shape pattern-one"><span><img src="/images/pattern-1.png" alt="Pattern Shape" /></span></div>
        <div className="newsletter-shape pattern-two"><span><img src="/images/pattern-2.png" alt="Pattern Shape" /></span></div>
        <div className="newsletter-shape shape-one"><span><img src="/images/shape-1.png" alt="Shape" /></span></div>
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

export default ProductDetailPage;