import { Card, TimeLineWrapper } from "~/libs/components/components";
import styles from "./styles.module.css";

const SignUp: React.FC = () => {
  return (
    <>
      <div className={styles["sign-up__wrapper"]}>
        <TimeLineWrapper />
        <Card />
      </div>
    </>
  )
}

export { SignUp }