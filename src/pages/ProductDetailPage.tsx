import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useShopStore } from '../store/useShopStore';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById, addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShopStore();
  const product = getProductById(Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="main-bg">
        <section className="page-banner">
          <div className="container">
            <h1>Product not found</h1>
            <Link to="/shop">Back to Shop</Link>
          </div>
        </section>
      </main>
    );
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, quantity);
  };

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
          <div className="shape shape-three"><span><img src="/images/curved-arrow.png" alt="" /></span></div>
          <div className="shape shape-four"><span><img src="/images/stars.png" alt="" /></span></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="page-banner-content">
                  <h1>Shop Details</h1>
                  <ul className="breadcrumb-link">
                    <li><Link to="/">Home</Link></li>
                    <li><i className="far fa-long-arrow-right"></i></li>
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
              <div className="col-xl-5">
                {/*=== Product Gallery ===*/}
                <div className="product-gallery-area mb-50" data-aos="fade-up" data-aos-duration={1200} style={{ width: '100%' }}>
                  <div className="product-big-slider mb-30" style={{ width: '100%' }}>
                    <div className="product-img" style={{ width: '100%' }}>
                      <a href={product.image} className="img-popup" style={{ display: 'block', width: '100%' }}>
                        <img 
                          src={product.image} 
                          alt="Product" 
                          style={{ 
                            width: '100%', 
                            height: 'auto',
                            aspectRatio: '1/1',
                            borderRadius: '15px', 
                            display: 'block',
                            objectFit: 'cover'
                          }} 
                        />
                      </a>
                    </div>
                  </div>
                  <div className="product-thumb-slider">
                    <div className="product-img">
                      <img src={product.image} alt="Product" style={{ width: '100px', borderRadius: '10px' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="product-info mb-50" data-aos="fade-up" data-aos-duration={1400}>
                  <span className="sale"><i className="fas fa-tags"></i>{product.discount} OFF</span>
                  <h4 className="title">{product.title}</h4>
                  <ul className="ratings rating5">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}><i className={`${i < product.rating ? 'fas' : 'far'} fa-star`}></i></li>
                    ))}
                    <li><Link to="#">({product.reviewsCount} Reviews)</Link></li>
                  </ul>
                  <p>Experience the perfect blend of style and comfort with our premium collection. Designed for practicality and everyday wear.</p>
                  <div className="product-price">
                    <span className="price prev-price"><span className="currency">$</span>{product.prevPrice}</span>
                    <span className="price new-price"><span className="currency">$</span>{product.newPrice}</span>
                  </div>
                  <div className="product-color">
                    <h4 className="mb-15">Color</h4>
                    <ul className="color-list mb-20">
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio" defaultValue="black" id="color1" />
                          <label className="form-check-label" htmlFor="color1">
                            <span className="color1"></span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio" defaultValue="red" id="color2" />
                          <label className="form-check-label" htmlFor="color2">
                            <span className="color2"></span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio" defaultValue="blue" id="color3" />
                          <label className="form-check-label" htmlFor="color3">
                            <span className="color3"></span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="product-size">
                    <h4 className="mb-15">Size</h4>
                    <ul className="size-list mb-30">
                      {['S', 'M', 'L', 'XL', '2XL'].map(size => (
                        <li key={size}>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="size-radio" defaultValue={size} id={`size-${size}`} />
                            <label className="form-check-label" htmlFor={`size-${size}`}>
                              {size}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-cart-variation">
                    <ul>
                      <li>
                        <div className="quantity-input">
                          <button className="quantity-down" onClick={() => setQuantity(Math.max(1, quantity - 1))}><i className="far fa-minus"></i></button>
                          <input className="quantity" type="text" value={quantity} readOnly name="quantity" />
                          <button className="quantity-up" onClick={() => setQuantity(quantity + 1)}><i className="far fa-plus"></i></button>
                        </div>
                      </li>
                      <li>
                        <Link to="#" className="theme-btn style-one" onClick={handleAddToCart}>Add To cart</Link>
                      </li>
                      <li>
                        <button 
                          className={`icon-btn ${isInWishlist(product.id) ? 'active' : ''}`} 
                          onClick={(e) => {
                            e.preventDefault();
                            if (isInWishlist(product.id)) {
                              removeFromWishlist(product.id);
                            } else {
                              addToWishlist(product);
                            }
                          }}
                          style={{ 
                            width: '55px', 
                            height: '55px', 
                            borderRadius: '50%', 
                            border: '1px solid #eee', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            fontSize: '20px',
                            transition: 'all 0.3s ease',
                            backgroundColor: isInWishlist(product.id) ? '#ff4d4d' : 'transparent',
                            color: isInWishlist(product.id) ? '#fff' : '#333'
                          }}
                        >
                          <i className={isInWishlist(product.id) ? "fas fa-heart" : "far fa-heart"} />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-meta">
                    <ul>
                      <li><span>Category :</span>{product.category || 'Women Cloths'}</li>
                      <li><span>Share :</span>
                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                      </li>
                    </ul>
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
                      <li>Fabric type <span>Premium Material</span></li>
                      <li>Care instructions:<span>Machine Wash</span></li>
                      <li>Occasion type: <span>Casual</span></li>
                      <li>Pattern:<span>Solid</span></li>
                      <li>Country of Origin<span>Vietnam</span></li>
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
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane fade active show" id="description">
                        <h4>Description</h4>
                        <p>This product represents the pinnacle of modern fashion design. Carefully selected materials and expert craftsmanship ensure that every piece is not only stylish but also durable and comfortable for all-day wear.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Related Product Section ======*/}
      <section className="releted-product-section pb-90">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-50">
                <div className="sub-heading d-inline-flex align-items-center">
                  <i className="flaticon-sparkler" />
                  <span className="sub-title">Related Products</span>
                </div>
                <h2>Customers also purchased</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {useShopStore.getState().products.slice(0, 4).map(related => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={related.id}>
                <div className="product-item style-one mb-40">
                  <div className="product-thumbnail">
                    <img src={related.image} alt={related.title} style={{ width: '100%', borderRadius: '15px' }} />
                    <div className="cart-button">
                      <Link to={`/product-detail/${related.id}`} className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">View Details</span></Link>
                    </div>
                  </div>
                  <div className="product-info-wrap">
                    <div className="product-info">
                      <h4 className="title"><Link to={`/product-detail/${related.id}`}>{related.title}</Link></h4>
                      <div className="product-price">
                        <span className="price new-price">${related.newPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;