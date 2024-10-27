import { Icon } from "~/libs/components/icon/icon";
import styles from "./styles.module.css";

const ChadHeader: React.FC = () => {
  return (
    <div className={styles["chad-header"]}>
      <Icon name="chad" />
      <span className={styles["chad"]}>Chad</span>
    </div>
  )
}

export { ChadHeader }