import { ChadHeader } from "~/libs/components/components";
import styles from "./styles.module.css"

const NotFound: React.FC = () => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["card"]}>
        <ChadHeader/>
        <div className={styles["text"]}>
          <span className={styles["header"]}>This page not found!</span>
        </div>
      </div>
    </div>
  )
}

export { NotFound };