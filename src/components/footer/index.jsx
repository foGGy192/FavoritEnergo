import styles from './footer.module.css';
import {Link, useNavigate,} from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
        <div className={`globalWrapper ${styles.globalWrapper}`}>
            <Link to={"/"}>
                <p className={styles.logo}>Favorit <span>Energo</span></p>
            </Link>
            <div className={styles.footerLists}>
                <div className={styles.footerList}>
                    <p className={`text ${styles.text}`}>Техника</p>
                    <ul className={styles.footerLinks}>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Генераторы Macwel</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Винтовые компрессоры</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Мини-экскаваторы</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Сварочные агрегаты denyo</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Запчасти для компрессорного оборудования</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Моторные и Индустриальные масла</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Воздуходовки LUTOS</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>AIRMAN</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.footerList}>
                    <p className={`text ${styles.text}`}>Аренда</p>
                    <ul className={styles.footerLinks}>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Аренда компрессора и дизельного генератора</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Ремонт и сервисное обслуживание</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.footerList}>
                    <p className={`text ${styles.text}`}>Компания</p>
                    <ul className={styles.footerLinks}>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Новости</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Отзывы</li>
                        </Link>
                        <Link>
                        <li className={`text ${styles.footerItem}`}>Контакты</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

  );
}