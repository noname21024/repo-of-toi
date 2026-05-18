import { create } from 'zustand';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  content: string;
  tags: string[];
  commentsCount: number;
}

interface BlogState {
  posts: BlogPost[];
  setPosts: (posts: BlogPost[]) => void;
  getPostById: (id: number) => BlogPost | undefined;
}

export const useBlogStore = create<BlogState>((set, get) => ({
  posts: [
    {
      id: 1,
      title: 'Từ lượt click đến tủ đồ: Làm chủ nghệ thuật tiếp thị thời trang điện tử',
      excerpt: 'Đi sâu vào thế giới tiếp thị thương mại điện tử thời trang, hướng dẫn cách chuyển đổi lượt click trực tuyến thành đơn hàng thực tế. Khám phá các chiến lược thu hút khách hàng tiềm năng, trưng bày sản phẩm hiệu quả và tạo hành trình mua sắm mượt mà.',
      image: '/images/blog-big-1.png',
      author: 'Quản trị viên',
      date: '12 Tháng 1, 2024',
      category: 'Tiếp thị',
      content: 'Tăng trưởng cửa hàng trực tuyến của bạn đòi hỏi sự tiếp cận đồng bộ: thu hút nhiều khách hàng hơn và chuyển đổi họ thành những người mua hàng trung thành. Bài viết này đi sâu vào 10 chiến lược dễ triển khai giúp bạn đạt được cả hai mục tiêu này.\n\nĐầu tiên, ấn tượng ban đầu cực kỳ quan trọng! Hãy đảm bảo cửa hàng của bạn có thiết kế sạch sẽ, giao diện thân thiện phô diễn sản phẩm đẹp mắt, chuyên nghiệp.\n\nTạo ra những nội dung giá trị để thông tin, giáo dục và giải trí cho khán giả mục tiêu của bạn. Đây có thể là các bài đăng trên blog, hình ảnh thông tin, video hoặc nội dung mạng xã hội. Bằng cách tự định vị mình là người dẫn đầu xu hướng, bạn sẽ thu hút những khách hàng tiềm năng thực sự quan tâm đến những gì bạn cung cấp.',
      tags: ['thời trang', 'tiếp thị', 'thương mại điện tử'],
      commentsCount: 45
    },
    {
      id: 2,
      title: 'Thống trị phong cách mùa hè với những xu hướng phải sắm ngay trực tuyến',
      excerpt: 'Khám phá những xu hướng thời trang mùa hè hot nhất mà bạn có thể dễ dàng tìm kiếm và mua sắm ngay từ sự tiện nghi ở nhà.',
      image: '/images/blog-sm-1.png',
      author: 'Quản trị viên',
      date: '12 Tháng 1, 2024',
      category: 'Xu hướng',
      content: 'Mùa hè đã đến, và đây là lúc cập nhật tủ đồ của bạn với những phong cách thời trang mới nhất. Từ những bộ váy linen mát mẻ, quần shorts năng động đến đồ bơi sành điệu, chúng tôi đã tuyển chọn danh sách những món đồ bắt buộc phải có cho mùa này.',
      tags: ['mùa hè', 'phong cách', 'thời trang'],
      commentsCount: 20
    },
    {
      id: 3,
      title: 'Mẹo tìm kiếm những sản phẩm thời trang giá hời trực tuyến',
      excerpt: 'Học cách săn lùng những món đồ thời trang chất lượng cao mà không tốn quá nhiều ngân sách bằng cách mua sắm trực tuyến thông minh.',
      image: '/images/blog-sm-2.png',
      author: 'Quản trị viên',
      date: '4 Tháng 5, 2024',
      category: 'Mua sắm',
      content: 'Săn tìm ưu đãi tốt trực tuyến đòi hỏi sự kiên nhẫn và một chút bí quyết mua sắm. Chúng tôi chia sẻ những mẹo hàng đầu để bạn duyệt qua các sàn thương mại điện tử lớn, tận dụng mã giảm giá và tìm thấy những món đồ thiết kế ẩn giấu với mức giá cực kỳ hấp dẫn.',
      tags: ['giá rẻ', 'thời trang', 'mẹo hay'],
      commentsCount: 15
    },
    {
      id: 4,
      title: 'Thời trang thân thiện với môi trường mà bạn có thể an tâm mua sắm',
      excerpt: 'Khám phá sự trỗi dậy của thời trang bền vững và cách hỗ trợ các thương hiệu thời trang nhân văn khi mua sắm trực tuyến.',
      image: '/images/blog-sm-3.png',
      author: 'Quản trị viên',
      date: '10 Tháng 2, 2024',
      category: 'Thời trang xanh',
      content: 'Bền vững không còn chỉ là một khẩu hiệu; đó là một phong trào thời đại. Tìm hiểu cách ngành thương mại điện tử thời trang đang thích ứng với nhu cầu tiêu dùng thông thái và những gì bạn có thể làm để trở thành một người tiêu dùng có ý thức bảo vệ môi trường.',
      tags: ['thân thiện', 'bền vững', 'thời trang'],
      commentsCount: 30
    },
    {
      id: 5,
      title: 'Hướng dẫn tối ưu hóa trải nghiệm mua sắm thời trang trực tuyến',
      excerpt: 'Làm cho các buổi mua sắm trực tuyến của bạn hiệu quả và vui vẻ hơn với những mẹo đơn giản và hữu ích này.',
      image: '/images/blog-sm-4.png',
      author: 'Quản trị viên',
      date: '29 Tháng 8, 2024',
      category: 'Cẩm nang',
      content: 'Từ việc sử dụng tối đa bộ lọc thông minh đến đọc kỹ đánh giá thực tế của khách hàng đi trước, có rất nhiều cách giúp trải nghiệm mua sắm của bạn mượt mà. Chúng tôi đúc kết những phương pháp tốt nhất để bạn có một buổi mua sắm hoàn toàn không căng thẳng.',
      tags: ['mua sắm', 'hướng dẫn', 'thời trang'],
      commentsCount: 12
    },
    {
      id: 6,
      title: '3 mẹo bất ngờ để khai phá khả năng sáng tạo tiềm ẩn trong bạn',
      excerpt: 'Cảm thấy nguồn cảm hứng sáng tạo của bạn đã cạn kiệt? Bài viết này đi sâu vào các chiến lược bất ngờ để đánh thức trí tưởng tượng.',
      image: '/images/blog-sm-5.png',
      author: 'Quản trị viên',
      date: '12 Tháng 3, 2024',
      category: 'Ý tưởng',
      content: 'Sáng tạo không chỉ dành riêng cho nghệ sĩ hay nhà thiết kế thời trang. Chúng tôi khám phá những phương pháp tư duy độc đáo giúp bạn suy nghĩ đột phá và tìm kiếm nguồn cảm hứng trong những góc khuất bất ngờ nhất của cuộc sống hàng ngày.',
      tags: ['sáng tạo', 'mẹo hay', 'cảm hứng'],
      commentsCount: 8
    },
    {
      id: 7,
      title: 'Cẩm nang toàn diện về thương mại điện tử năm 2024: Mọi thứ bạn cần biết',
      excerpt: 'Chào mừng bạn đến với cẩm nang tổng hợp về Thương mại điện tử năm 2024! Hướng dẫn chi tiết này bao trùm các xu hướng mới nhất.',
      image: '/images/blog-sm-6.png',
      author: 'Quản trị viên',
      date: '21 Tháng 7, 2024',
      category: 'Thời trang',
      content: 'Thế giới thương mại điện tử không ngừng thay đổi với tốc độ chóng mặt. Hãy luôn đi trước thời đại với phân tích chuyên sâu của chúng tôi về xu hướng công nghệ, thói quen tiêu dùng và các nền tảng thời trang đang định hình tương lai mua sắm trong năm nay.',
      tags: ['ecommerce', 'hướng dẫn', '2024'],
      commentsCount: 55
    },
    {
      id: 8,
      title: 'Sự cố giao hàng? Bạn không cô đơn! Đây là cách khắc phục nhanh chóng',
      excerpt: 'Bạn chắc chắn không phải người duy nhất gặp phải sự cố này! Chúng tôi phân tích và đưa ra giải pháp xử lý cực nhanh.',
      image: '/images/blog-sm-7.png',
      author: 'Quản trị viên',
      date: '10 Tháng 4, 2024',
      category: 'Vận chuyển',
      content: 'Sự cố giao hàng chậm hay thất lạc có thể là một cơn đau đầu lớn cho cả người bán và người mua. Chúng tôi cung cấp hướng dẫn giải quyết từng bước để xử lý nhanh gọn các trục trặc vận chuyển phổ biến nhất hiện nay.',
      tags: ['giao hàng', 'vận tải', 'giải pháp'],
      commentsCount: 10
    }
  ],
  setPosts: (posts) => set({ posts }),
  getPostById: (id) => get().posts.find((post) => post.id === id),
}));
