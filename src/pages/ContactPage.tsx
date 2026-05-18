import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
      <main className="main-bg">
  {/*====== Start Page Banner  ======*/}
  <section className="page-banner">
    {/*===  Page Banner Wrapper  ===*/}
    <div className="page-banner-wrapper p-r z-1">
      <svg className="lineanm" viewBox="0 0 1920 347" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="line" d="M-39 345.187C70 308.353 397.628 293.477 436 145.186C490 -63.5 572 -57.8156 688 255.186C757.071 441.559 989.5 -121.315 1389 98.6856C1708.6 274.686 1940.33 156.519 1964.5 98.6856" stroke="white" strokeWidth={3} strokeDasharray="2 2" />
      </svg>
      <div className="page-image"><img src="/images/bg/page-img-1.png" alt="image" /></div>
      <svg className="page-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.1742 33.0065C14.029 35.2507 7.5486 39.0636 0 40.7339V86H1937V64.9942C1933.1 60.1623 1912.65 65.1777 1904.51 62.6581C1894.22 59.4678 1884.93 55.0079 1873.77 52.7742C1861.2 50.2585 1823.41 36.3854 1811.99 39.9252C1805.05 42.0727 1796.94 37.6189 1789.36 36.6007C1769.18 33.8879 1747.19 31.1848 1726.71 29.7718C1703.81 28.1919 1678.28 27.0012 1657.53 34.4442C1636.45 42.005 1606.07 60.856 1579.5 55.9191C1561.6 52.5906 1543.41 47.0959 1528.45 56.9075C1510.85 68.4592 1485.74 74.2518 1460.44 76.136C1432.32 78.2297 1408.53 70.6879 1384.73 62.2987C1339.52 46.361 1298.19 27.1677 1255.08 9.28534C1242.58 4.10111 1214.68 15.4762 1200.55 16.6533C1189.77 17.5509 1181.74 15.4508 1172.12 12.8795C1152.74 7.70033 1133.23 2.88525 1111.79 2.63621C1088.85 2.36971 1073.94 7.88289 1056.53 15.8446C1040.01 23.3996 1027.48 26.1777 1007.8 26.1777C993.757 26.1777 975.854 25.6887 962.844 28.9632C941.935 34.2258 932.059 38.7874 914.839 28.6037C901.654 20.8061 866.261 -2.56499 844.356 7.12886C831.264 12.9222 820.932 21.5146 807.663 27.5255C798.74 31.5679 779.299 42.0561 766.33 39.1166C758.156 37.2637 751.815 31.6349 745.591 28.2443C730.967 20.2774 715.218 13.2948 695.846 10.723C676.168 8.11038 658.554 23.1787 641.606 27.4357C617.564 33.4742 602.283 27.7951 579.244 27.7951C568.142 27.7951 548.414 30.4002 541.681 23.6618C535.297 17.2722 530.162 9.74921 523.263 3.71444C517.855 -1.01577 505.798 -0.852017 498.318 2.09709C479.032 9.7007 453.07 10.0516 431.025 9.64475C407.556 9.21163 368.679 1.61612 346.618 10.3636C319.648 21.0575 291.717 53.8338 254.67 45.2266C236.134 40.9201 225.134 37.5813 204.78 40.7339C186.008 43.6415 171.665 50.7785 156.051 57.3567C146.567 61.3523 152.335 52.6281 151.12 47.9222C149.535 41.7853 139.994 34.5585 132.991 30.4008C120.206 22.8098 90.2848 24.3246 74.2546 24.6502C55.5552 25.0301 37.9201 27.747 21.1742 33.0065Z" fill="#FFFAF3" />
      </svg>
      <div className="shape shape-one"><span /></div>
      <div className="shape shape-two"><span /></div>
      <div className="shape shape-three"><span><img src="/images/shape/curved-arrow.png"  /></span></div>
      <div className="shape shape-four"><span><img src="/images/shape/stars.png"  /></span></div>                
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/*===  Page Banner Content  ===*/}
            <div className="page-banner-content">
              <h1>Liên hệ</h1>
              <ul className="breadcrumb-link">
                <li><Link to="/">Trang chủ</Link></li>
                <li><i className="far fa-long-arrow-right" /></li>
                <li className="active">Liên hệ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Page Banner  ======*/}
  {/*====== Start Animated-headline Section ======*/}
  <section className="animated-headline-area pt-90 pb-95">
    <div className="headline-wrap style-two pt-25 pb-25 white-bg">
      <span className="marquee-wrap">
        <span className="marquee-inner left">
          <span className="marquee-item"><b>ĐỊA CHỈ VĂN PHÒNG TOÀN CẦU CỦA CHÚNG TÔI</b><i className="flaticon-star-2" /></span>
          <span className="marquee-item"><b>ĐỊA CHỈ VĂN PHÒNG TOÀN CẦU CỦA CHÚNG TÔI</b><i className="flaticon-star-2" /></span>
        </span>
        <span className="marquee-inner left">
          <span className="marquee-item"><b>ĐỊA CHỈ VĂN PHÒNG TOÀN CẦU CỦA CHÚNG TÔI</b><i className="flaticon-star-2" /></span>
          <span className="marquee-item"><b>ĐỊA CHỈ VĂN PHÒNG TOÀN CẦU CỦA CHÚNG TÔI</b><i className="flaticon-star-2" /></span>
        </span>
        <span className="marquee-inner left">
          <span className="marquee-item"><b>ĐỊA CHỈ VĂN PHÒNG TOÀN CẦU CỦA CHÚNG TÔI</b><i className="flaticon-star-2" /></span>
          <span className="marquee-item"><b>ĐỊA CHỈ VĂN PHÒNG TOÀN CẦU CỦA CHÚNG TÔI</b><i className="flaticon-star-2" /></span>
        </span>
      </span>
    </div>
  </section>{/*====== End Animated-headline Section ======*/}
  {/*====== Start Contact Information Section ======*/}
  <section className="contact-information-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="single-information-wrapper">
            <div className="single-information-item d-flex justify-content-between mb-15" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={50}>
              <div className="content mb-20">
                <h4>Văn phòng Úc:</h4>
                <p>Apt. 695 763 Cartwright Villages, East Deanland, MI 69269, Australia </p>
              </div>
              <div className="content mb-20">
                <h4>Số điện thoại</h4>
                <p><a href="tel:+011234567890">+01 123 456 7890</a></p>
                <p><a href="tel:+011234567890">+01 123 456 7890</a></p>
              </div>
              <div className="content mb-20">
                <h4>Email</h4>
                <p><a href="mailto:help@domain.com">help@domain.com</a></p>
              </div>
            </div>
            <div className="single-information-item d-flex justify-content-between mb-15" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={70}>
              <div className="content mb-20">
                <h4>Văn phòng Anh:</h4>
                <p>69093 Bahringer Square, Gradytown, KY 62192
                  Florida, United States</p>
              </div>
              <div className="content mb-20">
                <h4>Số điện thoại</h4>
                <p><a href="tel:+011234567890">+01 123 456 7890</a></p>
                <p><a href="tel:+011234567890">+01 123 456 7890</a></p>
              </div>
              <div className="content mb-20">
                <h4>Email</h4>
                <p><a href="mailto:help@domain.com">help@domain.com</a></p>
              </div>
            </div>
            <div className="single-information-item d-flex justify-content-between mb-15" data-aos="fade-up" data-aos-duration={1400} data-aos-delay={90}>
              <div className="content mb-20">
                <h4>Văn phòng Canada:</h4>
                <p>931 Carroll Squares, North Mireya, VA 48458,
                  Ontario Canada</p>
              </div>
              <div className="content mb-20">
                <h4>Số điện thoại</h4>
                <p><a href="tel:+011234567890">+01 123 456 7890</a></p>
                <p><a href="tel:+011234567890">+01 123 456 7890</a></p>
              </div>
              <div className="content mb-20">
                <h4>Email</h4>
                <p><a href="mailto:help@domain.com">help@domain.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Contact Information Section ======*/}
  {/*====== Start Contact Section ======*/}
  <section className="contact-section pt-75 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="contact-wrapper p-r z-1 mb-50" data-aos="fade-right" data-aos-delay={10} data-aos-duration={1000}>
            <div className="shape shape-one"><span><img src="/images/shape/cl-line.png" alt="Line Shape" /></span></div>
            <h3>Liên hệ với chúng tôi</h3>
            <form className="pesco-contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" placeholder="Họ và tên" className="form_control" name="name" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="email" placeholder="Địa chỉ Email" className="form_control" name="Email" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea className="form_control" placeholder="Nội dung tin nhắn..." name="message" cols={5} rows={9} defaultValue={""} required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form_group">
                    <button className="theme-btn style-one">Gửi tin nhắn</button>
                  </div>
                </div>
              </div>
            </form>
          </div> 
        </div>
        <div className="col-lg-4">
          <div className="contact-img-text text-center mb-50 d-none d-lg-block" data-aos="fade-left" data-aos-delay={15} data-aos-duration={1500}>
            <img src="/images/contact/text-img.png" alt="Text" />
          </div>
        </div>
      </div>
    </div>
  </section>{/*====== End Contact Section ======*/}
</main>

    )
}

export default ContactPage;