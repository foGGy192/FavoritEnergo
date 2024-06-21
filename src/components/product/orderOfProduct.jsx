import styles from './product.module.css';
import './ProductSlider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productData } from './data';

export const OrderOfProduct = ({product}) => {

  const scrollToPhoneForm = () => {
    const element = document.getElementById('phoneForm');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.productInfo}>
      <div className={styles.productInfoHeader}>
        <h1 className={styles.title}>{product.name}</h1>
        <div className={styles.benefits}>
          {product.benefits.map((benefits, index) => (
            <p key={index} className={styles.text}>{benefits}</p>
          ))}
        </div>
      </div>
      <div className={styles.productInfoMain}>
        <p className={styles.price}>{product.price}</p>
        <div className={styles.tableOfPrice}>
          <p className={styles.titleOfTable}>Срок аренды</p>
          {product.rentalPeriods.map((period, index) => (
            <p key={index} className={styles.textOfRent}>{period.duration}</p>
          ))}
          <p className={styles.titleOfTable}>Цена за сутки</p>
          {product.rentalPeriods.map((period, index) => (
            <p key={index} className={styles.textOfPrice}>{period.price}</p>
          ))}
        </div>
      </div>
      <div className={styles.productInfoFooter}>
        <button onClick={scrollToPhoneForm} className={styles.orderButton}>
          Заказать доставку
        </button>
        <p className={styles.text}>Перезвоним и уточним детали заказа</p>
      </div>
    </div>
  );
};
