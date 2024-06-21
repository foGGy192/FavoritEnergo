import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./review.module.css";
import "swiper/css";

const reviews = [
  {
    name: "Андрей Владимирович",
    comment: "Не вижу причин для беспокойства отправил деньги получил товар",
    photos: [
      "src/assets/images/reviewImage2.png",
      "src/assets/images/reviewImage.png",
      "src/assets/images/reviewImage3.png",
    ],
  },
  {
    name: "Максим",
    comment:
      "Отличная компания! Быстро доставили генератор, установили и всё подробно объяснили. Рекомендую!",
    photos: [
      "src/assets/images/reviewImage3.png",
      "src/assets/images/reviewImage2.png",
      "src/assets/images/reviewImage.png",
    ],
  },
  {
    name: "Мотя",
    comment:
      "Пользуюсь услугами уже несколько месяцев. Генераторы всегда в отличном состоянии, сервис на высоте.",
    photos: [
      "src/assets/images/reviewImage.png",
      "src/assets/images/reviewImage3.png",
      "src/assets/images/reviewImage2.png",
    ],
  },
];

export const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => {
    if (currentReview === reviews.length - 1) return;
    setCurrentReview(currentReview + 1);
  };

  const handlePrev = () => {
    if (currentReview === 0) return;
    setCurrentReview(currentReview - 1);
  };

  const animationVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <section className={styles.review}>
      <div className={`globalWrapper ${styles.wrapper}`}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>ОТЗЫВЫ О НАШЕЙ РАБОТЕ</h2>
          <p className={styles.text}>
            Мы ценим мнение наших клиентов и держим качество обслуживание на
            наивысшем уровне
          </p>
        </div>
        <div className={styles.reviewSlider}>
          <div className={styles.buttons}>
            <button className={styles.buttonPrev} onClick={handlePrev}>
              <img src="src/assets/images/whiteArrow.svg" alt="Previous" />
            </button>
            <button className={styles.buttonNext} onClick={handleNext}>
              <img src="src/assets/images/whiteArrow.svg" alt="Next" />
            </button>
          </div>
          <AnimatePresence
            mode="wait"
          >
            <motion.div
              key={currentReview}
              className={styles.reviewContent}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className={styles.reviewText}>
                <motion.p
                  className={styles.subtitle}
                  variants={animationVariants}
                  transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
                >
                  Аренда топливных генераторов
                </motion.p>
                <motion.p
                  className={styles.name}
                  variants={animationVariants}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                >
                  {reviews[currentReview].name}
                </motion.p>
                <motion.p
                  className={styles.comment}
                  variants={animationVariants}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
                >
                  {reviews[currentReview].comment}
                </motion.p>
              </div>
              <div className={styles.reviewPhotos}>
                {reviews[currentReview].photos.map((photo, index) => (
                  <motion.img
                    key={index}
                    className={styles.photo}
                    src={photo}
                    alt="Review"
                    variants={animationVariants}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.2,
                      ease: "easeInOut",
                    }} // Adjusted transition duration
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
