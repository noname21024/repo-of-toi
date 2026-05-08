import { Link } from 'react-router-dom';
import type { Product } from '../store/useShopStore';

interface ProductItemProps {
  product: Product;
  delay?: number;
  duration?: number;
}

const ProductItem = ({ product, delay = 25, duration = 400 }: ProductItemProps) => {
  return (
    <div className="product-item style-one mb-40" data-aos="fade-up" data-aos-delay={delay} data-aos-duration={duration}>
      <div className="product-thumbnail">
        <img src={product.image} alt={product.title} />
        <div className="discount">{product.discount}</div>
        <div className="hover-content">
          <Link to="#" className="icon-btn"><i className="fa fa-heart" /></Link>
          <a href={product.popupImage} className="img-popup icon-btn"><i className="fa fa-eye" /></a>
        </div>
        <div className="cart-button">
          <Link to="#" className="cart-btn"><i className="far fa-shopping-basket" /> <span className="text">Add To Cart</span></Link>
        </div>
      </div>
      <div className="product-info-wrap">
        <div className="product-info">
          <ul className={`ratings rating${product.rating}`}>
            {[...Array(5)].map((_, i) => (
              <li key={i}><i className={`${i < product.rating ? 'fas' : 'far'} fa-star`} /></li>
            ))}
            <li><Link to="#">({product.reviewsCount})</Link></li>
          </ul>
          <h4 className="title"><Link to="/product-detail">{product.title}</Link></h4>
        </div>
        <div className="product-price">
          <span className="price prev-price"><span className="currency">$</span>{product.prevPrice}</span>
          <span className="price new-price"><span className="currency">$</span>{product.newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
