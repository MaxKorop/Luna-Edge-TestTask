import { Card, TimeLineContainer } from "~/libs/components/components";
import styles from "./styles.module.css";

const SignUp: React.FC = () => {
  return (
    <>
      <div className={styles["sign-up__wrapper"]}>
        <TimeLineContainer />
        <Card />
      </div>
    </>
  )
}

export { SignUp }