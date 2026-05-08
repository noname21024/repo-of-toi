import { create } from 'zustand';

export interface Product {
  id: number;
  image: string;
  popupImage: string;
  discount: string;
  rating: number;
  reviewsCount: number;
  title: string;
  prevPrice: string;
  newPrice: string;
  category?: string;
}

interface ShopState {
  products: Product[];
  featuredProducts: Product[];
  setProducts: (products: Product[]) => void;
}

export const useShopStore = create<ShopState>((set) => ({
  products: [
    {
      id: 1,
      image: '/images/feature-product-2.png',
      popupImage: 'images/products/feature-product-2.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 65,
      title: 'Lightweight linen summer dress with belt',
      prevPrice: '80.00',
      newPrice: '40.00',
      category: "Women's Clothing"
    },
    {
      id: 2,
      image: '/images/feature-product-1.png',
      popupImage: 'images/products/feature-product-1.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 20,
      title: 'Cozy knit sweater with pockets',
      prevPrice: '50.00',
      newPrice: '20.00',
      category: "Sweaters"
    },
    {
      id: 3,
      image: '/images/feature-product-4.png',
      popupImage: 'images/products/feature-product-4.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 36,
      title: 'Athletic leggings with mesh panels',
      prevPrice: '70.00',
      newPrice: '40.00',
      category: "Women's Clothing"
    },
    {
      id: 4,
      image: '/images/product-1.png',
      popupImage: 'images/products/product-1.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 33,
      title: 'Classic leather biker jacket with zippers',
      prevPrice: '85.00',
      newPrice: '35.00',
      category: "Jackets"
    },
    {
      id: 5,
      image: '/images/product-2.png',
      popupImage: 'images/products/product-2.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 15,
      title: 'Floral print sundress with adjustable straps',
      prevPrice: '67.00',
      newPrice: '26.00',
      category: "Women's Clothing"
    },
    {
      id: 6,
      image: '/images/product-3.png',
      popupImage: 'images/products/product-3.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 30,
      title: 'Relaxed fit denim jeans with distressing',
      prevPrice: '50.00',
      newPrice: '30.00',
      category: "Denim Jeans"
    },
    {
      id: 7,
      image: '/images/feature-product-3.png',
      popupImage: 'images/products/feature-product-3.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 45,
      title: 'Cargo shorts with pockets and drawstring',
      prevPrice: '40.00',
      newPrice: '20.00',
      category: "Men's Clothing"
    },
    {
      id: 8,
      image: '/images/product-4.png',
      popupImage: 'images/products/product-4.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 80,
      title: 'Elegant silk dress with sequins',
      prevPrice: '89.00',
      newPrice: '34.00',
      category: "Formal Wear"
    },
    {
      id: 9,
      image: '/images/product-5.png',
      popupImage: 'images/products/product-5.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 80,
      title: 'Cashmere v-neck sweater with ribbed cuffs',
      prevPrice: '56.00',
      newPrice: '07.00',
      category: "Sweaters"
    }
  ],
  featuredProducts: [
    {
      id: 101,
      image: '/images/feature-product-1.png',
      popupImage: 'images/products/feature-product-2.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 80,
      title: 'Lightweight linen summer dress with belt',
      prevPrice: '80.00',
      newPrice: '40.00'
    },
    {
      id: 102,
      image: '/images/feature-product-2.png',
      popupImage: 'images/products/feature-product-2.png',
      discount: '40% Off',
      rating: 5,
      reviewsCount: 80,
      title: 'Cozy knit sweater with pockets',
      prevPrice: '67.00',
      newPrice: '23.00'
    },
    {
      id: 103,
      image: '/images/feature-product-3.png',
      popupImage: 'images/products/feature-product-2.png',
      discount: '10% Off',
      rating: 5,
      reviewsCount: 80,
      title: 'Athletic leggings with mesh panels',
      prevPrice: '80.00',
      newPrice: '40.00'
    },
    {
      id: 104,
      image: '/images/feature-product-4.png',
      popupImage: 'images/products/feature-product-2.png',
      discount: '40% Off',
      rating: 5,
      reviewsCount: 80,
      title: 'Classic leather biker jacket with zippers',
      prevPrice: '67.00',
      newPrice: '23.00'
    }
  ],
  setProducts: (products) => set({ products }),
}));
