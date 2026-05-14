import { Link, useParams } from 'react-router-dom';
import { useBlogStore } from '../store/useBlogStore';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getPostById } = useBlogStore();
  const post = getPostById(Number(id));

  if (!post) {
    return (
      <main className="main-bg">
        <section className="page-banner">
          <div className="container">
            <h1>Post not found</h1>
            <Link to="/blog">Back to Blogs</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="main-bg">
      {/*====== Start Page Banner  ======*/}
      <section className="page-banner">
        {/*===  Page Banner Wrapper  ===*/}
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
          <div className="shape shape-three"><span><img src="/images/curved-arrow.png" /></span></div>
          <div className="shape shape-four"><span><img src="/images/stars.png" /></span></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/*===  Page Banner Content  ===*/}
                <div className="page-banner-content">
                  <h1>Blogs Details</h1>
                  <ul className="breadcrumb-link">
                    <li><Link to="/">Home</Link></li>
                    <li><i className="far fa-long-arrow-right" /></li>
                    <li className="active">Blogs Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/*====== End Page Banner  ======*/}
      {/*====== Start Blog Details Section  ======*/}
      <section className="blog-details-section pt-120 pb-60">
        <div className="container">
          {/*=== Blog Details Wrapper ===*/}
          <div className="blog-details-wrapper">
            <div className="row">
              <div className="col-xl-8">
                {/*=== Blog Details Content ===*/}
                <div className="blog-details-content">
                  <div className="blog-post-item mb-60">
                    <div className="post-content" data-aos="fade-up" data-aos-delay={10} data-aos-duration={1000}>
                      <h3 className="title">{post.title}</h3>
                      <div className="post-meta">
                        <span><Link to="#"><i className="far fa-user" />By {post.author}</Link></span>
                        <span><Link to="#"><i className="far fa-calendar-alt" />{post.date}</Link></span>
                        <span><Link to="#"><i className="far fa-comment" />{post.commentsCount} Comments</Link></span>
                      </div>
                      <p>{post.excerpt}</p>
                      <figure className="main-post-image mb-40" data-aos="fade-up" data-aos-delay={20} data-aos-duration={1000}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', maxHeight: '500px' }} />
                      </figure>
                      <div className="post-body-content" style={{ whiteSpace: 'pre-line' }}>
                        {post.content}
                      </div>
                      <blockquote className="blockquote mb-40">
                        <h4>But the load will be too heavy for us if we the a carry yesterday’s burden over again today</h4>
                        <span className="cite">Tomas Alison</span>
                        <div className="quote"><i className="flaticon-right-quote" /></div>
                      </blockquote>
                      <div className="row">
                        <div className="col-md-6">
                          <figure data-aos="fade-up" data-aos-delay={10} data-aos-duration={1000}>
                            <img src="/images/blog-single-2.jpg" alt="Post Thumbnail" />
                          </figure>
                        </div>
                        <div className="col-md-6">
                          <figure data-aos="fade-up" data-aos-delay={10} data-aos-duration={1000}>
                            <img src="/images/blog-single-3.jpg" alt="Post Thumbnail" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="entry-footer">
                      <div className="tag-links">
                        <span>Tag:</span>
                        {post.tags.map(tag => (
                          <Link key={tag} to="#">{tag}</Link>
                        ))}
                      </div>
                      <div className="social-share">
                        <span>share:</span>
                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                        <Link to="#"><i className="fab fa-instagram" /></Link>
                        <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                        <Link to="#"><i className="fab fa-twitter" /></Link>
                      </div>
                    </div>
                  </div>
                  {/*=== Post Navigation ===*/}
                  <div className="post-navigation mb-80" data-aos="fade-up" data-aos-delay={20} data-aos-duration={800}>
                    <div className="post-nav-item prev-post">
                      <div className="thumb">
                        <img src="/images/post-thumb-4.jpg" alt="Thumbnail" />
                      </div>
                      <div className="content">
                        <Link to="#" className="post-link"><i className="far fa-arrow-left" />Prev Post</Link>
                        <h6><Link to="/blog-detail">3 Unexpected Hacks to Unleash Your Hidden Creativity.</Link></h6>
                      </div>
                    </div>
                    <div className="post-nav-item next-post item-rtl">
                      <div className="thumb">
                        <img src="/images/post-thumb-4.jpg" alt="Thumbnail" />
                      </div>
                      <div className="content">
                        <Link to="#" className="post-link"><i className="far fa-arrow-right" />Next Post</Link>
                        <h6><Link to="/blog-detail">Do Delevery? You're Not Alone! Here's How to Fix It Fast</Link></h6>
                      </div>
                    </div>
                  </div>
                  {/*=== Reviews Area ===*/}
                  <div className="pesco-comment-area mb-40" data-aos="fade-up" data-aos-delay={30} data-aos-duration={1000}>
                    <h4 className="mb-40">Total Reviews ({post.commentsCount + 45})</h4>
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
                  </div>
                  {/*=== Contact Form ===*/}
                  <div className="pesco-contact-area mb-50" data-aos="fade-up" data-aos-delay={30} data-aos-duration={1200}>
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
                            <textarea className="form_control" placeholder="Write Comment" name="message" cols={5} rows={8} defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <button className="theme-btn style-one">Submit Review</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                {/*=== Sidebar Widget Area ===*/}
                <div className="sidebar-widget-area mb-50">
                  {/*=== Sidebar Widget ===*/}
                  <div className="sidebar-widget sidebar-search-widget mb-50" data-aos="fade-up" data-aos-delay={20} data-aos-duration={1000}>
                    <h4 className="widget-title">Search</h4>
                    <div className="widget-content">
                      <p>isn't as anything embarrassing hidden in the middle of text.</p>
                      <form>
                        <input type="search" className="form_control" placeholder="Search" required />
                      </form>
                    </div>
                  </div>
                  {/*=== Sidebar Widget ===*/}
                  <div className="sidebar-widget sidebar-category-widget mb-50" data-aos="fade-up" data-aos-delay={40} data-aos-duration={1200}>
                    <h4 className="widget-title">Categories</h4>
                    <div className="widget-content">
                      <ul className="widget-nav">
                        <li><Link to="#">Fashion <i className="far fa-arrow-right" /></Link></li>
                        <li><Link to="#">Casual <i className="far fa-arrow-right" /></Link></li>
                        <li><Link to="#">Life Style <i className="far fa-arrow-right" /></Link></li>
                        <li><Link to="#">Kids Toy <i className="far fa-arrow-right" /></Link></li>
                        <li><Link to="#">Products <i className="far fa-arrow-right" /></Link></li>
                        <li><Link to="#">Women <i className="far fa-arrow-right" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  {/*=== Sidebar Widget ===*/}
                  <div className="sidebar-widget sidebar-category-widget mb-40" data-aos="fade-up" data-aos-delay={60} data-aos-duration={1400}>
                    <h4 className="widget-title">Recent Posts</h4>
                    <div className="widget-content">
                      <ul className="recent-post-list">
                        {useBlogStore.getState().posts.slice(0, 3).map(recentPost => (
                          <li className="post-thumbnail-content" key={recentPost.id}>
                            <img src={recentPost.image} alt={recentPost.title} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '15px' }} />
                            <div className="post-title-date">
                              <h6><Link to={`/blog-detail/${recentPost.id}`}>{recentPost.title}</Link></h6>
                              <span className="posted-on"><Link to={`/blog-detail/${recentPost.id}`}>{recentPost.date}</Link></span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/*===  Sidebar Widget  ===*/}
                  <div className="sidebar-widget sidebar-tag-widget mb-40" data-aos="fade-up" data-aos-delay={80} data-aos-duration={1600}>
                    <h4 className="widget-title">Tags</h4>
                    <div className="widget-content">
                      <div className="tagcloud">
                        <Link to="#">Accessories</Link>
                        <Link to="#">Beauty</Link>
                        <Link to="#">Casual</Link>
                        <Link to="#">Fashion</Link>
                        <Link to="#">Product</Link>
                        <Link to="#">e-commerce</Link>
                        <Link to="#">Modern Meal</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/*====== End Blog Details Section  ======*/}
    </main>

  )
}

export default BlogDetailPage;