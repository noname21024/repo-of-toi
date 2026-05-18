import { Link } from 'react-router-dom';

const AboutPage = () => {
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
              <h1>Về chúng tôi</h1>
              <ul className="breadcrumb-link">
                <li><Link to="/">Trang chủ</Link></li>
                <li><i className="far fa-long-arrow-right" /></li>
                <li className="active">Về chúng tôi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Page Banner Section ======*/}
  {/*====== Start About Us Section ======*/}
  <section className="about-us-section pt-120">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          {/*====== Section Image Box ======*/}
          <div className="section-image-box style-one mb-50" data-aos="fade-up" data-aos-delay={30} data-aos-duration={1000}>
            <div className="image-one">
              <img src="/images/about-1.jpg" alt="About Image" />
              <div className="img-shape" />
            </div>
            <div className="image-two">
              <img src="/images/about-2.jpg" alt="About Image" />
              <span className="line" />
            </div>
            <div className="experience-box">
              <div className="icon">
                <img src="/images/star.svg" alt="Icon" />
              </div>
              <div className="text">
                <div className="year">
                  25
                </div>
                <div className="duration">
                  Năm <br /> Kinh nghiệm
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          {/*====== Section Content Box ======*/}
          <div className="section-content-box style-one" data-aos="fade-up" data-aos-delay={50} data-aos-duration={1200}>
            <div className="section-title mb-30">
              <div className="sub-heading d-inline-flex align-items-center">
                <i className="flaticon-sparkler" />
                <span className="sub-title">Về chúng tôi</span>
              </div>
              <h2>Mua sắm trực tuyến là mua sắm mọi thứ từ các cửa hàng qua Internet.</h2>
            </div>
            <p>Chúng tôi mang đến giải pháp thời trang chất lượng vượt trội. Với uy tín và kinh nghiệm tích lũy, các sản phẩm luôn được thiết kế tỉ mỉ, đa dạng để phù hợp với mọi phong cách cá nhân độc đáo.</p>
            <div className="row">
              <div className="col-sm-6">
                <ul className="list mb-25">
                  <li><i className="flaticon-star-3" /> Cung cấp sản phẩm chất lượng tốt nhất 100%</li>
                  <li><i className="flaticon-star-3" />Mức giá linh hoạt và phù hợp túi tiền</li>
                  <li><i className="flaticon-star-3" />Tất cả sản phẩm đều được tuyển chọn kỹ</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-6">
                    <div className="thumbnail-img mb-25">
                      <img src="/images/about-3.png" alt="thumbnail img" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="thumbnail-img mb-25">
                      <img src="/images/about-4.png" alt="thumbnail img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-wrap-box d-flex mt-25">
              <div className="author-item">
                <div className="author-thumb">
                  <img src="/images/author-3.png" alt="author image" />
                </div>
                <div className="author-info">
                  <h5>Thomas Alison</h5>
                  <span className="position">CEO tại PESCO</span>
                </div>
              </div>
              <div className="divider">
                <img src="/images/divider.png" alt="divider" />
              </div>
              <div className="signature">
                <img src="/images/signature.png" alt="divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End About Us Section ======*/}
  {/*====== Start Features Section ======*/}
  <section className="features-section pt-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/*=== Features Wrapper ===*/}
          <div className="features-wrapper" data-aos="fade-up" data-aos-delay={70} data-aos-duration={1400}>
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
              <img src="/images/divider_1.png" alt="divider" />
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
              <img src="/images/divider_1.png" alt="divider" />
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
              <img src="/images/divider_1.png" alt="divider" />
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
  {/*====== Start Team Section ======*/}
  <section className="team-section pt-125 pb-60">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/*=== Section Title  ===*/}
          <div className="section-title text-center mb-60" data-aos="fade-up" data-aos-delay={10} data-aos-duration={800}>
            <div className="sub-heading d-inline-flex align-items-center">
              <i className="flaticon-sparkler" />
              <span className="sub-title">Đội ngũ của chúng tôi</span>
              <i className="flaticon-sparkler" />
            </div>
            <h2>Ban quản trị sáng lập</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="team-slider-one">
      <div className="team-item style-one" data-aos="fade-up" data-aos-delay={15} data-aos-duration={600}>
        <div className="member-info">
          <h5>Davis Liam </h5>
          <span className="position">Chuyên gia Marketing</span>
        </div>
        <div className="member-img">
          <img src="/images/team-1.jpg" alt="Team Image" />
          <div className="hover-content">
            <ul className="social-link">
              <li><Link to="#"><i className="flaticon-facebook" /></Link></li>
              <li><Link to="#"><i className="flaticon-linkedin" /></Link></li>
              <li><Link to="#"><i className="flaticon-instagram" /></Link></li>
              <li><Link to="#"><i className="flaticon-twitter" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="team-item style-one" data-aos="fade-up" data-aos-delay={20} data-aos-duration={800}>
        <div className="member-info">
          <h5>Michael Davis</h5>
          <span className="position">Chuyên gia Tiếp thị số</span>
        </div>
        <div className="member-img">
          <img src="/images/team-2.jpg" alt="Team Image" />
          <div className="hover-content">
            <ul className="social-link">
              <li><Link to="#"><i className="flaticon-facebook" /></Link></li>
              <li><Link to="#"><i className="flaticon-linkedin" /></Link></li>
              <li><Link to="#"><i className="flaticon-instagram" /></Link></li>
              <li><Link to="#"><i className="flaticon-twitter" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="team-item style-one" data-aos="fade-up" data-aos-delay={25} data-aos-duration={1000}>
        <div className="member-info">
          <h5>Sarah Jones</h5>
          <span className="position">Trưởng bộ phận Sản phẩm</span>
        </div>
        <div className="member-img">
          <img src="/images/team-3.jpg" alt="Team Image" />
          <div className="hover-content">
            <ul className="social-link">
              <li><Link to="#"><i className="flaticon-facebook" /></Link></li>
              <li><Link to="#"><i className="flaticon-linkedin" /></Link></li>
              <li><Link to="#"><i className="flaticon-instagram" /></Link></li>
              <li><Link to="#"><i className="flaticon-twitter" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="team-item style-one" data-aos="fade-up" data-aos-delay={30} data-aos-duration={1200}>
        <div className="member-info">
          <h5>Emily Garcia</h5>
          <span className="position">Chuyên viên Truyền thông</span>
        </div>
        <div className="member-img">
          <img src="/images/team-4.jpg" alt="Team Image" />
          <div className="hover-content">
            <ul className="social-link">
              <li><Link to="#"><i className="flaticon-facebook" /></Link></li>
              <li><Link to="#"><i className="flaticon-linkedin" /></Link></li>
              <li><Link to="#"><i className="flaticon-instagram" /></Link></li>
              <li><Link to="#"><i className="flaticon-twitter" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="team-item style-one" data-aos="fade-up" data-aos-delay={35} data-aos-duration={1400}>
        <div className="member-info">
          <h5>Olivia Michael</h5>
          <span className="position">Đại diện Dịch vụ Khách hàng</span>
        </div>
        <div className="member-img">
          <img src="/images/team-5.jpg" alt="Team Image" />
          <div className="hover-content">
            <ul className="social-link">
              <li><Link to="#"><i className="flaticon-facebook" /></Link></li>
              <li><Link to="#"><i className="flaticon-linkedin" /></Link></li>
              <li><Link to="#"><i className="flaticon-instagram" /></Link></li>
              <li><Link to="#"><i className="flaticon-twitter" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="team-item style-one" data-aos="fade-up" data-aos-delay={40} data-aos-duration={1600}>
        <div className="member-info">
          <h5>Davidthy Phillips</h5>
          <span className="position">Lập trình viên Cao cấp</span>
        </div>
        <div className="member-img">
          <img src="/images/team-6.jpg" alt="Team Image" />
          <div className="hover-content">
            <ul className="social-link">
              <li><Link to="#"><i className="flaticon-facebook" /></Link></li>
              <li><Link to="#"><i className="flaticon-linkedin" /></Link></li>
              <li><Link to="#"><i className="flaticon-instagram" /></Link></li>
              <li><Link to="#"><i className="flaticon-twitter" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="team-item style-one" data-aos="fade-up" data-aos-delay={45} data-aos-duration={1700}>
        <div className="member-info">
          <h5>Sarah Jones</h5>
          <span className="position">Trưởng bộ phận Sản phẩm</span>
        </div>
        <div className="member-img">
          <img src="/images/team-3.jpg" alt="Team Image" />
          <div className="hover-content">
            <ul className="social-link">
              <li><Link to="#"><i className="flaticon-facebook" /></Link></li>
              <li><Link to="#"><i className="flaticon-linkedin" /></Link></li>
              <li><Link to="#"><i className="flaticon-instagram" /></Link></li>
              <li><Link to="#"><i className="flaticon-twitter" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="team-dots-arrows d-flex align-items-center justify-content-between">
        <div className="team-slider-dots mt-25" />
        <div className="team-arrows style-one mt-25" />
      </div>
    </div>
  </section>
  {/*====== End Team Section ======*/}
  {/*====== Start Testimonial Section ======*/}
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
              <div className="testimonial-arrows style-one justif" />
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
  </section>{/*====== End Working Section  ======*/}
  {/*====== Start Working Section  ======*/}
  <section className="work-processing-section pt-60 pb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/*=== Section Title  ===*/}
          <div className="section-title text-center mb-60" data-aos="fade-up" data-aos-delay={30} data-aos-duration={800}>
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
          <div className="iconic-box-item style-two mb-40" data-aos="fade-up" data-aos-delay={50} data-aos-duration={1000}>
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
          <div className="iconic-box-item style-two mb-40" data-aos="fade-up" data-aos-delay={70} data-aos-duration={1200}>
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
          <div className="iconic-box-item style-two mb-40" data-aos="fade-up" data-aos-delay={90} data-aos-duration={1400}>
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
          <div className="iconic-box-item style-two mb-40" data-aos="fade-up" data-aos-delay={110} data-aos-duration={1600}>
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

    )
}

export default AboutPage;