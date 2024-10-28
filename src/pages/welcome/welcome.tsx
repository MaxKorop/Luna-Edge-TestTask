import { ChadHeader } from "~/libs/components/components";
import styles from "./styles.module.css";

const WelcomePage: React.FC = () => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["card"]}>
        <ChadHeader/>
        <div className={styles["text"]}>
          <span className={styles["header"]}>Hello Luna Edge, </span>
          <span className={styles["header"]}>My name is [your name].</span>
        </div>
      </div>
    </div>
  )
}

export { WelcomePage }