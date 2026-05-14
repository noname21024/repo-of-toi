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
      title: 'From Clicks to Closets: Mastering the Art of Fashion E-commerce Marketing',
      excerpt: 'dives into the world of fashion e-commerce marketing, guiding readers on how to turn online interest into sales. It likely explores strategies to attract potential customers, showcase products effectively, and create a smooth buying journey that converts clicks into clothes hanging in closets',
      image: '/images/blog-big-1.png',
      author: 'Admin',
      date: 'Jan 12, 2024',
      category: 'Marketing',
      content: 'Growing your Shopify store requires a two-pronged approach: attracting more customers and converting them into loyal buyers. This blog post dives into 10 easy-to-implement strategies that will help you achieve both. First impressions matter! Ensure your Shopify store has a clean, user-friendly design that showcases your products beautifully.\n\nCreate valuable content that informs, educates, and entertains your target audience. This could be blog posts, infographics, videos, or even social media content. By establishing yourself as a thought leader, you\'ll attract potential customers who are genuinely interested in what you offer.',
      tags: ['fashion', 'marketing', 'ecommerce'],
      commentsCount: 45
    },
    {
      id: 2,
      title: 'Slay the Summer Style Game Must-Have Trends You Can Shop Online',
      excerpt: 'Discover the hottest summer fashion trends that you can easily find and purchase from the comfort of your home.',
      image: '/images/blog-sm-1.png',
      author: 'Admin',
      date: 'Jan 12, 2024',
      category: 'WordPress',
      content: 'Summer is here, and it\'s time to update your wardrobe with the latest styles. From breezy linen dresses to stylish swimwear, we\'ve curated a list of must-have items for the season.',
      tags: ['summer', 'style', 'fashion'],
      commentsCount: 20
    },
    {
      id: 3,
      title: 'Insider Tips on Finding Affordable Fashion Gems Online',
      excerpt: 'Learn the secrets to scoring high-quality fashion pieces without breaking the bank by shopping smart online.',
      image: '/images/blog-sm-2.png',
      author: 'Admin',
      date: 'May 4, 2024',
      category: 'WordPress',
      content: 'Finding great deals online requires patience and a bit of know-how. We share our top tips for navigating online marketplaces and finding those hidden gems.',
      tags: ['affordable', 'fashion', 'tips'],
      commentsCount: 15
    },
    {
      id: 4,
      title: 'Eco-Friendly Fashion E-commerce You Can Feel Good About',
      excerpt: 'Explore the rise of sustainable fashion and how you can support ethical brands while shopping online.',
      image: '/images/blog-sm-3.png',
      author: 'Admin',
      date: 'Feb 10, 2024',
      category: 'WordPress',
      content: 'Sustainability is no longer just a buzzword; it\'s a movement. Learn how e-commerce is adapting to the demand for eco-friendly products and what you can do to be a conscious consumer.',
      tags: ['eco-friendly', 'sustainable', 'fashion'],
      commentsCount: 30
    },
    {
      id: 5,
      title: 'A Guide to Streamlining the Online Fashion Shopping Experience',
      excerpt: 'Make your online shopping sessions more efficient and enjoyable with these simple yet effective tips.',
      image: '/images/blog-sm-4.png',
      author: 'Admin',
      date: 'Aug 29, 2024',
      category: 'WordPress',
      content: 'From using filters to reading reviews, there are many ways to make your online shopping experience smoother. We break down the best practices for a stress-free spree.',
      tags: ['shopping', 'guide', 'fashion'],
      commentsCount: 12
    },
    {
      id: 6,
      title: '3 unexpected hacks to unleash your hidden creativity.',
      excerpt: 'Feeling like your well of creativity has run dry? This post dives into surprising strategies to spark your imagination.',
      image: '/images/blog-sm-5.png',
      author: 'Admin',
      date: 'March 12, 2024',
      category: 'Shopify',
      content: 'Creativity isn\'t just for artists. We explore unconventional methods to help you think outside the box and find inspiration in the most unexpected places.',
      tags: ['creativity', 'hacks', 'inspiration'],
      commentsCount: 8
    },
    {
      id: 7,
      title: 'The ultimate guide to ecommerce in 2024: everything you need to know',
      excerpt: 'Welcome to your one-stop shop for everything related to Ecommerce in 2024! This comprehensive guide covers the latest trends.',
      image: '/images/blog-sm-6.png',
      author: 'Admin',
      date: 'July 21, 2024',
      category: 'Fashion',
      content: 'The world of e-commerce is constantly evolving. Stay ahead of the curve with our in-depth guide to the trends and technologies shaping the industry in 2024.',
      tags: ['ecommerce', 'guide', '2024'],
      commentsCount: 55
    },
    {
      id: 8,
      title: 'Do delivery? you\'re not alone! here\'s how to fix it fast',
      excerpt: 'You\'re definitely not the only one! This post acknowledges a widespread issue and offers quick and effective solutions.',
      image: '/images/blog-sm-7.png',
      author: 'Admin',
      date: '10 Apr 2024',
      category: 'Shopify',
      content: 'Delivery issues can be a major headache for both sellers and buyers. We provide a step-by-step guide to resolving common delivery problems quickly.',
      tags: ['delivery', 'logistics', 'solutions'],
      commentsCount: 10
    }
  ],
  setPosts: (posts) => set({ posts }),
  getPostById: (id) => get().posts.find((post) => post.id === id),
}));
