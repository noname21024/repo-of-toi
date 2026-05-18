import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useShopStore } from '../store/useShopStore';
import ProductItem from '../components/ProductItem';

const removeVietnameseTones = (str: string) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Bả|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Combine accents
  str = str.replace(/\u0300|\u0301|\u0309|\u0303|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  return str;
};

const ShopPage = () => {
  const { 
    products, 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    selectedSort, 
    setSelectedSort 
  } = useShopStore();

  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const sortSelectRef = useRef<HTMLSelectElement>(null);

  // Sync category selected in header search with sidebar checkbox on mount or query change
  useEffect(() => {
    if (selectedCategory) {
      setSelectedCats([selectedCategory]);
    } else {
      setSelectedCats([]);
    }
  }, [selectedCategory]);

  // Listen to nice-select value changes on sort dropdown
  useEffect(() => {
    const el = sortSelectRef.current;
    if (!el) return;
    const handleChange = () => {
      setSelectedSort(el.value);
    };
    el.addEventListener('change', handleChange);
    return () => el.removeEventListener('change', handleChange);
  }, [setSelectedSort]);

  // Sync selected sort inside dropdown markup
  useEffect(() => {
    if (sortSelectRef.current) {
      sortSelectRef.current.value = selectedSort;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const $ = (window as any).jQuery;
      if ($ && typeof $.fn.niceSelect === 'function') {
        $(sortSelectRef.current).niceSelect('update');
      }
    }
  }, [selectedSort]);

  const handleCategoryToggle = (categoryName: string) => {
    setSelectedCats(prev => {
      if (prev.includes(categoryName)) {
        const next = prev.filter(c => c !== categoryName);
        if (selectedCategory === categoryName) {
          setSelectedCategory('');
        }
        return next;
      } else {
        return [...prev, categoryName];
      }
    });
  };

  const handleClearAll = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedCats([]);
    setSelectedSort('default');
  };

  // Get unique categories dynamically with product count
  const categoryCounts = products.reduce((acc, product) => {
    if (product.category) {
      acc[product.category] = (acc[product.category] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  // 1. Filter by Search Query (diacritic/tone-mark-insensitive)
  let filtered = products.filter(product => {
    if (!searchQuery) return true;
    const normalizedTitle = removeVietnameseTones(product.title.toLowerCase());
    const normalizedQuery = removeVietnameseTones(searchQuery.toLowerCase());
    return normalizedTitle.includes(normalizedQuery);
  });

  // 2. Filter by Category Checkboxes
  if (selectedCats.length > 0) {
    filtered = filtered.filter(product => product.category && selectedCats.includes(product.category));
  }

  // 3. Sort products
  const sortedProducts = [...filtered].sort((a, b) => {
    if (selectedSort === 'price-asc') {
      return parseFloat(a.newPrice) - parseFloat(b.newPrice);
    }
    if (selectedSort === 'price-desc') {
      return parseFloat(b.newPrice) - parseFloat(a.newPrice);
    }
    if (selectedSort === 'newest') {
      return b.id - a.id;
    }
    return 0; // Default
  });

  // Refresh AOS after product list changes so newly rendered items become visible
  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.refresh();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [sortedProducts.length, searchQuery, selectedSort]);

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
          <div className="shape shape-three"><span><img src="/images/curved-arrow.png" alt="shape" /></span></div>
          <div className="shape shape-four"><span><img src="/images/stars.png" alt="shape" /></span></div>                
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="page-banner-content">
                  <h1>Cửa hàng</h1>
                  <ul className="breadcrumb-link">
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><i className="far fa-long-arrow-right" /></li>
                    <li className="active">Cửa hàng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    <h4 className="widget-title">Danh mục sản phẩm</h4>
                    <ul className="categories-list">
                      {Object.entries(categoryCounts).map(([catName, count]) => {
                        const isChecked = selectedCats.includes(catName);
                        return (
                          <li key={catName}>
                            <div className="form-check">
                              <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id={`cat-${catName}`}
                                checked={isChecked}
                                onChange={() => handleCategoryToggle(catName)}
                              />
                              <label className="form-check-label" htmlFor={`cat-${catName}`}>
                                {catName}<span>{count}</span>
                              </label>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                {/*=== Price Filter Widget ===*/}
                <div className="product-widget price-filter-widget mb-40" data-aos="fade-up" data-aos-delay={20} data-aos-duration={400}>
                  <div className="widget-content">
                    <h4 className="widget-title">Lọc theo giá</h4>
                    <div className="price-number">
                      <ul>
                        <li><input type="text" id="amount" readOnly /></li>
                      </ul>
                    </div>
                    <div id="slider-range" />
                  </div>
                </div>
                {/*=== Banner Widget ===*/}
                <div className="sidebar-banner-widget mb-40" data-aos="fade-up" data-aos-delay={50} data-aos-duration={1200}>
                  <div className="banner-widget-content">
                    <div className="banner-shape"><img src="/images/banner-shape-1.png" alt="shape" /></div>
                    <div className="banner-img"><img src="/images/banner-1.png" alt="image" /></div>
                    <div className="content">
                      <span className="sale">ĐẠI HẠ GIÁ</span>
                      <h3>Giảm 40% <span>cho tất cả sản phẩm</span></h3>
                      <Link to="/shop" className="theme-btn style-one">Mua sắm ngay</Link>
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
                        <p><span>Đang hiển thị</span> {sortedProducts.length === 0 ? 0 : 1}-{sortedProducts.length} của {sortedProducts.length} kết quả</p>
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
                        <select className="wide" ref={sortSelectRef} defaultValue={selectedSort}>
                          <option value="default">Mặc định</option>
                          <option value="newest">Mới nhất</option>
                          <option value="price-desc">Giá từ cao đến thấp</option>
                          <option value="price-asc">Giá từ thấp đến cao</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/*=== Active Filters Banner ===*/}
                {(searchQuery || selectedCats.length > 0) && (
                  <div className="active-filters mb-30 p-3 bg-light rounded d-flex align-items-center flex-wrap" style={{ gap: '10px' }}>
                    <span style={{ fontWeight: 600, fontSize: '14px', color: '#333' }}>Bộ lọc đang áp dụng:</span>
                    {searchQuery && (
                      <span className="badge bg-danger text-white p-2 d-inline-flex align-items-center" style={{ gap: '6px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>
                        Từ khóa: "{searchQuery}"
                        <i className="far fa-times-circle" style={{ cursor: 'pointer' }} onClick={() => setSearchQuery('')} />
                      </span>
                    )}
                    {selectedCats.map(cat => (
                      <span key={cat} className="badge bg-secondary text-white p-2 d-inline-flex align-items-center" style={{ gap: '6px', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>
                        Danh mục: {cat}
                        <i className="far fa-times-circle" style={{ cursor: 'pointer' }} onClick={() => handleCategoryToggle(cat)} />
                      </span>
                    ))}
                    <button 
                      className="btn btn-sm btn-link text-decoration-none text-danger p-0 ms-auto" 
                      style={{ fontWeight: 600, fontSize: '13px' }}
                      onClick={handleClearAll}
                    >
                      Xóa tất cả bộ lọc
                    </button>
                  </div>
                )}

                <div className="row">
                  {sortedProducts.length === 0 ? (
                    <div className="col-lg-12 text-center py-5">
                      <i className="far fa-search mb-3" style={{ fontSize: '48px', color: '#ccc' }} />
                      <h4>Không tìm thấy sản phẩm nào</h4>
                      <p className="text-muted">Vui lòng thử tìm kiếm lại với từ khóa hoặc bộ lọc khác.</p>
                      <button className="theme-btn style-one mt-3" onClick={handleClearAll}>
                        Xóa tất cả bộ lọc
                      </button>
                    </div>
                  ) : (
                    sortedProducts.map((product, index) => (
                      <div className="col-xl-4 col-md-6 col-sm-12" key={product.id}>
                        <ProductItem 
                          product={product} 
                          delay={25 + (index % 3) * 5} 
                          duration={400 + (index % 3) * 200} 
                        />
                      </div>
                    ))
                  )}
                </div>
                {/*=== Pagination ===*/}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="pesco-pagination mb-40" data-aos="fade-up" data-aos-delay={70} data-aos-duration={2200}>
                      <ul>
                        <li><Link to="#"><i className="far fa-angle-left" /></Link></li>
                        <li><Link to="#" className="active">01</Link></li>
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
      </section>
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-section pb-95">
        <div className="container">
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
      </section>
    </main>
  );
};

export default ShopPage;