import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export interface CartItem extends Product {
  quantity: number;
}

interface ShopState {
  products: Product[];
  featuredProducts: Product[];
  cart: CartItem[];
  wishlist: Product[];
  lastWishlistProduct: Product | null;
  lastAddedProduct: Product | null;
  showToast: boolean;
  showWishlistToast: boolean;
  searchQuery: string;
  selectedCategory: string;
  selectedSort: string;
  shippingMethod: 'free' | 'flat' | 'local';
  couponApplied: boolean;
  couponDiscount: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  setProducts: (products: Product[]) => void;
  getProductById: (id: number) => Product | undefined;
  addToCart: (product: Product, quantity?: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getShippingCost: () => number;
  setShippingMethod: (method: 'free' | 'flat' | 'local') => void;
  setShowToast: (show: boolean) => void;
  setShowWishlistToast: (show: boolean) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedSort: (sort: string) => void;
}

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      products: [
        {
          id: 1,
          image: '/images/feature-product-2.png',
          popupImage: '/images/feature-product-2.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 65,
          title: 'Đầm hè chất linen nhẹ mát kèm đai lưng',
          prevPrice: '80.00',
          newPrice: '40.00',
          category: "Thời trang Nữ"
        },
        {
          id: 2,
          image: '/images/feature-product-1.png',
          popupImage: '/images/feature-product-1.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 20,
          title: 'Áo len dệt kim ấm áp có túi',
          prevPrice: '50.00',
          newPrice: '20.00',
          category: "Áo len"
        },
        {
          id: 3,
          image: '/images/feature-product-4.png',
          popupImage: '/images/feature-product-4.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 36,
          title: 'Quần legging thể thao phối lưới',
          prevPrice: '70.00',
          newPrice: '40.00',
          category: "Thời trang Nữ"
        },
        {
          id: 4,
          image: '/images/product-1.png',
          popupImage: '/images/product-1.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 33,
          title: 'Áo khoác da biker cổ điển có khóa kéo',
          prevPrice: '85.00',
          newPrice: '35.00',
          category: "Áo khoác"
        },
        {
          id: 5,
          image: '/images/product-2.png',
          popupImage: '/images/product-2.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 15,
          title: 'Đầm hai dây họa tiết hoa xinh xắn',
          prevPrice: '67.00',
          newPrice: '26.00',
          category: "Thời trang Nữ"
        },
        {
          id: 6,
          image: '/images/product-3.png',
          popupImage: '/images/product-3.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 30,
          title: 'Quần Jeans denim ống suông rách cá tính',
          prevPrice: '50.00',
          newPrice: '30.00',
          category: "Quần Jeans"
        },
        {
          id: 7,
          image: '/images/feature-product-3.png',
          popupImage: '/images/feature-product-3.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 45,
          title: 'Quần shorts túi hộp năng động kèm dây rút',
          prevPrice: '40.00',
          newPrice: '20.00',
          category: "Thời trang Nam"
        },
        {
          id: 8,
          image: '/images/product-4.png',
          popupImage: '/images/product-4.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 80,
          title: 'Đầm lụa sang trọng đính kim sa lấp lánh',
          prevPrice: '89.00',
          newPrice: '34.00',
          category: "Đầm dạ hội"
        },
        {
          id: 9,
          image: '/images/product-5.png',
          popupImage: '/images/product-5.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 80,
          title: 'Áo len cổ chữ V chất liệu Cashmere cao cấp',
          prevPrice: '56.00',
          newPrice: '07.00',
          category: "Áo len"
        }
      ],
      featuredProducts: [
        {
          id: 101,
          image: '/images/feature-product-1.png',
          popupImage: '/images/feature-product-1.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 80,
          title: 'Đầm hè chất linen nhẹ mát kèm đai lưng',
          prevPrice: '80.00',
          newPrice: '40.00'
        },
        {
          id: 102,
          image: '/images/feature-product-2.png',
          popupImage: '/images/feature-product-2.png',
          discount: 'Giảm 40%',
          rating: 5,
          reviewsCount: 80,
          title: 'Áo len dệt kim ấm áp có túi',
          prevPrice: '67.00',
          newPrice: '23.00'
        },
        {
          id: 103,
          image: '/images/feature-product-3.png',
          popupImage: '/images/feature-product-3.png',
          discount: 'Giảm 10%',
          rating: 5,
          reviewsCount: 80,
          title: 'Quần legging thể thao phối lưới',
          prevPrice: '80.00',
          newPrice: '40.00'
        },
        {
          id: 104,
          image: '/images/feature-product-4.png',
          popupImage: '/images/feature-product-4.png',
          discount: 'Giảm 40%',
          rating: 5,
          reviewsCount: 80,
          title: 'Áo khoác da biker cổ điển có khóa kéo',
          prevPrice: '67.00',
          newPrice: '23.00'
        }
      ],
      cart: [],
      wishlist: [],
      lastAddedProduct: null,
      lastWishlistProduct: null,
      showToast: false,
      showWishlistToast: false,
      searchQuery: '',
      selectedCategory: '',
      selectedSort: 'default',
      shippingMethod: 'free',
      couponApplied: false,
      couponDiscount: 0,
      setProducts: (products) => set({ products }),
      getProductById: (id) => {
        const state = get();
        return state.products.find(p => p.id === id) || state.featuredProducts.find(p => p.id === id);
      },
      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          let newCart;
          if (existingItem) {
            newCart = state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            newCart = [...state.cart, { ...product, quantity }];
          }
          return { 
            cart: newCart,
            lastAddedProduct: product,
            showToast: true
          };
        });
        // Auto hide toast after 3 seconds
        setTimeout(() => {
          set({ showToast: false });
        }, 3000);
      },
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },
      clearCart: () => set({ cart: [], couponApplied: false, couponDiscount: 0 }),
      getCartTotal: () => {
        const state = get();
        return state.cart.reduce(
          (total, item) => total + parseFloat(item.newPrice) * item.quantity,
          0
        );
      },
      setShowToast: (show) => set({ showToast: show }),
      setShowWishlistToast: (show) => set({ showWishlistToast: show }),
      addToWishlist: (product) => {
        set((state) => {
          if (state.wishlist.find((item) => item.id === product.id)) {
            return state;
          }
          return { 
            wishlist: [...state.wishlist, product],
            lastWishlistProduct: product,
            showWishlistToast: true
          };
        });
        setTimeout(() => {
          set({ showWishlistToast: false });
        }, 3000);
      },
      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== productId),
        }));
      },
      isInWishlist: (productId) => {
        return get().wishlist.some((item) => item.id === productId);
      },
      updateCartQuantity: (productId, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
      },
      getShippingCost: () => {
        const method = get().shippingMethod;
        if (method === 'flat') return 10.0;
        if (method === 'local') return 15.0;
        return 0.0;
      },
      setShippingMethod: (method) => set({ shippingMethod: method }),
      applyCoupon: (code) => {
        if (code.trim().toLowerCase() === 'giam20') {
          set({ couponApplied: true, couponDiscount: 20 });
          return true;
        }
        return false;
      },
      removeCoupon: () => set({ couponApplied: false, couponDiscount: 0 }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setSelectedSort: (sort) => set({ selectedSort: sort }),
    }),
    {
      name: 'shop-storage',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        shippingMethod: state.shippingMethod,
        couponApplied: state.couponApplied,
        couponDiscount: state.couponDiscount,
      }),
    }
  )
);
