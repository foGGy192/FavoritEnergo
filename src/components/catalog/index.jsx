import styles from "./catalog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link, useNavigate,} from "react-router-dom";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import "./swiper.css";
import { useState } from "react";

export const Catalog = () => {
  return (
    <section className={styles.catalogSection}>
      <div className={`globalWrapper ${styles.globalWrapper}`}>
        <h1 className={styles.sectionTitle}>Каталог</h1>
        <section className={styles.catalog}>
          <CatalogMenu />
          <CatalogWidgets />
        </section>
      </div>
    </section>
  );
};

export const CatalogMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(0);

  const handlePrev = () => {
    setCurrentProduct((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  const handleNext = () => {
    setCurrentProduct((prevIndex) => (prevIndex + 1) % content.length);
  };

  const content = [
    {
      id: 0,
      title: "AIRMAN —",
      subtitle: "ЭКОЛОГИЧЕСКАЯ ЭСТЕТИКА",
      menuText: [
        "Топ 10 лучших генераторов находятся именно у нас.",
        "Имеем под своим крылом более сотни генераторов, используемых повседневно в каждом заказе.",
      ],
      images: [
        { src: "src/assets/images/products/Airman SDG25S/sdg25s.png", link: "/product/1" },
        { src: "src/assets/images/products/Airman SDG45S/download.jpg", link: "/product/2" },
        { src: "src/assets/images/products/Airman SDG60S/download.jpg", link: "/product/3" },
        { src: "src/assets/images/products/Airman SDG100S/qwe.jpg", link: "/product/4" },
        { src: "src/assets/images/products/Airman SDG150S/8104df08.png", link: "/product/5" },
        { src: "src/assets/images/products/Airman SDG220S/download.jpg", link: "/;product/6" },
        { src: "src/assets/images/products/Airman SDG300S/download.jpg", link: "/product/7" },
      ],
    },
    {
      id: 1,
      title: "WILSON —",
      subtitle: "МОЩНОСТЬ",
      menuText: [
        "Наши генераторы идеально подходят для домашнего использования.",
        "Они обеспечивают стабильное электроснабжение в любых условиях.",
      ],
      images: [
        { src: "src/assets/images/products/Wilson P320/CM20230503-7bbe7-82369.jpg", link: "/product/8" },
        { src: "src/assets/images/products/Wilson P400/bca9b1a8097921aa242cf31ae414fd68-500x500.jpg", link: "/product/9" },
        { src: "src/assets/images/products/Wilson P500/fg_wilson_p500_3s_v_kojuhe_bg.jpg", link: "/product/10" },
        { src: "src/assets/images/products/Wilson P700/fg-wilson-p700_1.jpg", link: "/product/11" },
      ],
    },
    {
      id: 2,
      title: "Компрессоры AIRMAN —",
      subtitle: "ПРОИЗВОДИТЕЛЬНОСТЬ",
      menuText: [
        "Наши промышленные генераторы гарантируют бесперебойную работу на производстве.",
        "Они выдерживают высокие нагрузки и обеспечивают долговечность.",
      ],
      images: [
        { src: "src/assets/images/products/Компрессор Airman PDS185S/21c8c9891c707f0ec05891069c8ec6ef.jpg", link: "/product/12" },
        { src: "src/assets/images/products/Компрессор Airman PDS265S/download.jpg", link: "/product/13" },
        { src: "src/assets/images/products/Компрессор Airman PDS400S/download.jpg", link: "/product/14" },
      ],
    },
  ];

  const { title, subtitle, menuText, images } = content[currentProduct];

  const handleChangeSlider = (e) => {
    setActiveIndex(e.realIndex);
  };

  return (
    <div className={styles.catalogMenu}>
      <div className={styles.switchArrows}>
        <img
          className={styles.catalogArrow}
          src="src/assets/images/swiperCatalog.svg"
          alt=""
          onClick={handlePrev}
        />
        <img
          className={styles.catalogArrow}
          src="src/assets/images/swiperCatalog.svg"
          alt=""
          onClick={handleNext}
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={`${styles.menuText} ${styles.text}`}>{menuText[0]}</p>
      <p className={`${styles.menuText} ${styles.text}`}>{menuText[1]}</p>
      <Swiper
        spaceBetween={20}
        loop={true}
        slidesPerView={"auto"}
        className={styles.catalogSwiper}
        onSlideChange={handleChangeSlider}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={image.src}
              alt={`Generator ${index + 1}`}
              className={styles.image}
            />
            <Link to={image.link}>
              <img
                src="src/assets/images/arrow-right.svg"
                alt=""
                className={styles.arrowSlide}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.pagination}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.paginationBar} ${activeIndex === index && styles.activeBar}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
export const CatalogWidgets = () => {
  return (
    <div className={styles.widgets}>
      <div className={styles.widget}>
        <h1 className={styles.widgetTitle}>
          Генераторы <br /> Mcwel
        </h1>
        <img
          className={styles.widgetImage}
          src="src/assets/images/TopWidgetImage.png"
          alt=""
        />
      </div>
      <div className={styles.widget}>
        <div className={styles.widgetContent}>
          <p className={styles.textWidget}>
            Невероятно экологичный <br /> и невероятно мощный
          </p>
          <div className={styles.widgetButtons}>
            <a className={styles.widgetButton} href="*">
              Подробнее
            </a>
            <a className={styles.widgetButton} href="*">
              <img src="src/assets/images/arrow-right.svg" alt="arrow-svg" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.widget}>
        <div className={styles.widgetsContent}>
          <p className={styles.textsWidget}>Установим, настроим и запустим</p>
          <div className={styles.widgetButtons}>
            <a className={styles.widgetButton} href="*">
              К услуге
            </a>
            <a className={styles.widgetButton} href="*">
              <img src="src/assets/images/arrow-right.svg" alt="arrow-svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
