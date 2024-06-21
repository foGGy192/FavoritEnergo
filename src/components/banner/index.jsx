import styles from './banner.module.css';
import arrow_right from './../../assets/images/arrow-right.svg'

export const Banner =() => {
  return (
    <section className={styles.banner}>
        <div className={`globalWrapper ${styles.globalWrapper}`}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerBenefits}>
                    <span className={`text ${styles.text}`}>Команда лучших</span>
                    <span className={`text ${styles.text}`}>Лучшая техника</span>
                </div>
                <h1 className={styles.bannerTitle}>Работа на профессиональном <br /> уровне</h1>
                <p className={`text ${styles.text}`}>Работаем в одной команде, достигая лучших результатов вместе с Заказчиком</p>
                <div className={styles.bannerButtons}>
                    <a className={`text ${styles.text, styles.bannerButton}`} href="">Перейти к услугам</a>
                    <a className={`text ${styles.text} ${styles.bannerButton}`} href="">
                        <img src={arrow_right} alt="arrow svg"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}