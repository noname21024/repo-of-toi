import { Link } from 'react-router-dom';
import { useShopStore } from '../store/useShopStore';
import { useState } from 'react';

const CartPage = () => {
    const { 
        cart, 
        removeFromCart, 
        clearCart, 
        getCartTotal, 
        shippingMethod, 
        setShippingMethod, 
        getShippingCost, 
        updateCartQuantity,
        couponApplied,
        couponDiscount,
        applyCoupon
    } = useShopStore();

    const [couponCode, setCouponCode] = useState('');
    const [email, setEmail] = useState('');

    const subtotal = getCartTotal();
    const shippingCost = getShippingCost();
    
    // Calculate total discount
    const discountAmount = subtotal * (couponDiscount / 100);
    const totalAmount = Math.max(0, subtotal - discountAmount + shippingCost);

    const handleApplyCoupon = (e: React.FormEvent) => {
        e.preventDefault();
        const success = applyCoupon(couponCode);
        if (success) {
            alert('Áp dụng mã giảm giá 20% thành công!');
        } else {
            alert('Mã giảm giá không hợp lệ. Hãy thử dùng mã: giam20');
        }
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Cảm ơn bạn đã đăng ký nhận bản tin với email: ${email}`);
        setEmail('');
    };

    const handleQuantityChange = (productId: number, valStr: string) => {
        const val = parseInt(valStr, 10);
        if (!isNaN(val) && val > 0) {
            updateCartQuantity(productId, val);
        }
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const displayCount = cartCount < 10 ? `0${cartCount}` : cartCount.toString();

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
                                    <h1>Giỏ hàng</h1>
                                    <ul className="breadcrumb-link">
                                        <li><Link to="/">Trang chủ</Link></li>
                                        <li><i className="far fa-long-arrow-right" /></li>
                                        <li className="active">Giỏ hàng</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== End Page Banner Section ======*/}

            {/*====== Start Cart Section ======*/}
            <section className="cart-page-section pt-120 pb-80">
                <div className="container">
                    {cart.length === 0 ? (
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center py-5">
                                <div className="empty-cart-view" style={{ padding: '40px 20px', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                                    <i className="fas fa-shopping-bag mb-3" style={{ fontSize: '64px', color: '#F7941F' }}></i>
                                    <h3 className="mb-20">Giỏ hàng của bạn đang trống</h3>
                                    <p className="mb-30" style={{ color: '#777' }}>Hãy tiếp tục mua sắm để tìm kiếm những sản phẩm tuyệt vời nhất dành cho bạn!</p>
                                    <Link to="/shop" className="theme-btn style-one">Quay lại cửa hàng</Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="cart-wrapper mb-40" data-aos="fade-up" data-aos-duration="1200">
                                    <h3 className="mb-20">Tổng số sản phẩm trong giỏ: {displayCount}</h3>
                                    <div className="cart-list table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th><i className="fas fa-tshirt"></i>Chi tiết sản phẩm</th>
                                                    <th><i className="fas fa-sack-dollar"></i>Giá</th>
                                                    <th style={{ textAlign: 'center' }}><i className="fas fa-eye"></i>Số lượng</th>
                                                    <th style={{ textAlign: 'right' }}><i className="fas fa-money-bill"></i>Tổng cộng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <div className="product-thumb-item">
                                                                <div className="product-img">
                                                                    <img src={item.image} alt={item.title} />
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="title"><Link to={`/product-detail/${item.id}`}>{item.title}</Link></h4>
                                                                    <div className="product-meta">
                                                                        {item.category && <span>{item.category}</span>}
                                                                        <span>Màu ngẫu nhiên</span>
                                                                        <span>Freesize</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="price"><span className="currrency">$</span> {parseFloat(item.newPrice).toFixed(2)}</div>
                                                        </td>
                                                        <td>
                                                            <div className="action-cart" style={{ justifyContent: 'center' }}>
                                                                <div className="quantity-input">
                                                                    <button className="quantity-down" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                                                                        <i className="far fa-minus"></i>
                                                                    </button>
                                                                    <input 
                                                                        className="quantity" 
                                                                        type="text" 
                                                                        value={item.quantity} 
                                                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                                                                        name="quantity"
                                                                    />
                                                                    <button className="quantity-up" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                                                                        <i className="far fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                                <div className="cart-remove" onClick={() => removeFromCart(item.id)} style={{ cursor: 'pointer' }}>
                                                                    <i className="far fa-times"></i>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="total-price" style={{ textAlign: 'right' }}>
                                                                <span className="currrency">$</span> {(parseFloat(item.newPrice) * item.quantity).toFixed(2)}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="cart-bottom d-flex align-items-center justify-content-between mt-40">
                                        <div className="ct-shopping">
                                            <Link to="/shop" className="theme-btn style-one" style={{ display: 'inline-block' }}>Tiếp tục mua sắm</Link>
                                        </div>
                                        <div className="cl-cart">
                                            <button className="theme-btn style-one" onClick={clearCart}>Xóa giỏ hàng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                {/*=== Cart Sidebar Area ===*/}
                                <div className="cart-sidebar-area">
                                    {/*=== Coupon Box ===*/}
                                    <div className="cart-widget coupon-box-widget mb-40" data-aos="fade-up" data-aos-duration="1200">
                                        <h4>Nhập mã giảm giá</h4>
                                        <p>Nhập mã giảm giá của bạn để nhận thêm ưu đãi đặc biệt.</p>
                                        <form onSubmit={handleApplyCoupon}>
                                            <input 
                                                type="text" 
                                                className="form_control" 
                                                placeholder="Ví dụ: giam20"
                                                value={couponCode} 
                                                onChange={(e) => setCouponCode(e.target.value)} 
                                                disabled={couponApplied}
                                                required 
                                            />
                                            <button type="submit" className="theme-btn style-one" style={{ border: 'none', width: '100%', marginTop: '15px' }} disabled={couponApplied}>
                                                {couponApplied ? 'Đã áp dụng' : 'Áp dụng'}
                                            </button>
                                        </form>
                                    </div>
                                    {/*=== Cart Totals ===*/}
                                    <div className="cart-widget cart-total-widget mb-40" data-aos="fade-up" data-aos-duration="1400">
                                        <h4>Tổng cộng giỏ hàng</h4>
                                        <div className="sub-total">
                                            <h5>Tạm tính <span className="price">${subtotal.toFixed(2)}</span></h5>
                                        </div>
                                        {couponApplied && (
                                            <div className="sub-total" style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginTop: '15px' }}>
                                                <h5>Giảm giá (20%) <span className="price" style={{ color: '#e74c3c' }}>-${discountAmount.toFixed(2)}</span></h5>
                                            </div>
                                        )}
                                        <div className="shipping-cart">
                                            <h4>Vận chuyển</h4>
                                            <div className="single-radio">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="shipping-radio" 
                                                    checked={shippingMethod === 'free'} 
                                                    onChange={() => setShippingMethod('free')}
                                                    id="radio1" 
                                                />
                                                <label className="form-check-label" htmlFor="radio1">
                                                    Giao hàng miễn phí <span className="price">$0.00</span>
                                                </label>
                                            </div>
                                            <div className="single-radio">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="shipping-radio" 
                                                    checked={shippingMethod === 'flat'} 
                                                    onChange={() => setShippingMethod('flat')}
                                                    id="radio2" 
                                                />
                                                <label className="form-check-label" htmlFor="radio2">
                                                    Phí cố định <span className="price">$10.00</span>
                                                </label>
                                            </div>
                                            <div className="single-radio">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="shipping-radio" 
                                                    checked={shippingMethod === 'local'} 
                                                    onChange={() => setShippingMethod('local')}
                                                    id="radio3" 
                                                />
                                                <label className="form-check-label" htmlFor="radio3">
                                                    Khu vực lân cận <span className="price">$15.00</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="price-total">
                                            <h5>Tổng cộng <span className="price">${totalAmount.toFixed(2)}</span></h5>
                                        </div>
                                        <div className="proceced-checkout">
                                            <Link to="/checkout" className="theme-btn style-one" style={{ display: 'block', textAlign: 'center' }}>Tiến hành thanh toán</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/*====== End Cart Section ======*/}

            {/*====== Start Newsletter Sections ======*/}
            <section className="newsletter-section pb-95">
                <div className="container">
                    <div className="newsletter-wrapper white-bg p-r z-1" data-aos="fade-up" data-aos-duration="1000">
                        <div className="newsletter-shape pattern-one"><span><img src="/images/pattern-1.png" alt="Pattern Shape" /></span></div>
                        <div className="newsletter-shape pattern-two"><span><img src="/images/pattern-2.png" alt="Pattern Shape" /></span></div>
                        <div className="newsletter-shape shape-one"><span><img src="/images/shape-1_1.png" alt="Shape" /></span></div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="newsletter-content-box">
                                    <span className="sub-text">Bản tin của chúng tôi</span>
                                    <h3>Nhận cập nhật hàng tuần. Đăng ký ngay để nhận ưu đãi giảm tới <span>20%</span> cho đơn hàng đầu tiên</h3>
                                    <form onSubmit={handleSubscribe}>
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                className="form_control" 
                                                placeholder="Nhập địa chỉ Email của bạn..." 
                                                name="email" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required 
                                            />
                                            <button className="theme-btn style-one" type="submit">Đăng ký</button>
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
            {/*====== End Newsletter Sections ======*/}
        </main>
    );
};

export default CartPage;
