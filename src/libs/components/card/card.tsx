import { SignUpForm } from "./libs/components/sign-up-form/sign-up-form";
import styles from "./styles.module.css";

const Card: React.FC = () => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["card"]}>
        <SignUpForm />
      </div>
    </div>
  )
}

export { Card };