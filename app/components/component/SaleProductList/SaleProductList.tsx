import React from 'react';
import styles from './SaleProductList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


interface ProductCardProps {
  product: {
    image: string;
    name: string;
    discount: number;
    currentPrice: number;
    originalPrice: number;
    rating: number;
    reviews: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles['card']}>
      {/* discount */}
      {product.discount > 0 && (
        <span className={styles['discount']}>-{product.discount}%</span>
      )}

      {/* img */}
      <img className={styles['image']} src={product.image} alt={product.name} />

      {/* name */}
      <h3>{product.name}</h3>

      {/* price */}
      <div className={styles['price']}>
        <span className={styles['currentPrice']}>${product.currentPrice}</span>
        <span className={styles['originalPrice']}>${product.originalPrice}</span>
      </div>

      {/* rating */}
      <div className={styles['rating']}>
        {Array(Math.round(product.rating))
          .fill(null)
          .map((_, index) =>(
            <FontAwesomeIcon key={index} icon={faStar}  />
        ))}{' '}
        ({product.reviews})
      </div>

      {/* btn add to cart */}
      <button className={styles['addToCartBtn']}>Add To Cart</button>

      {/* like & view */}
      <div className={styles['iconContainer']}>
        <button className={styles['icon']}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className={styles['icon']}>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
