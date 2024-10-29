import { ChadHeader } from "~/libs/components/components";
import styles from "./styles.module.css";
import { useContext, useEffect } from "react";
import { Context } from "~/libs/components/app/app";
import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.name) {
      navigate("/sign-up");
    }
  }, [user, navigate]);

  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["card"]}>
        <ChadHeader/>
        <div className={styles["text"]}>
          <span className={styles["header"]}>Hello Luna Edge, </span>
          <span className={styles["header"]}>My name is {user?.name}.</span>
        </div>
      </div>
    </div>
  )
}

export { WelcomePage }