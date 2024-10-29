import styles from "./styles.module.css";

const CarouselItem: React.FC = () => {
  return (
    <div className={styles["carousel-item"]}>
      <span className={styles["carousel-item-label"]}>5X</span>
      <span className={styles["carousel-item-text"]}>Acquiring a new customer is 5x more costly than making an unhappy customer happy</span>
    </div>
  )
}

export { CarouselItem }