import { TextField } from "@mui/material";
import { ChadHeader } from "../chad-header/chad-header";
import styles from "./styles.module.css";

const SignUpForm: React.FC = () => {
  return (
    <div className={styles["sign-up-form__wrapper"]}>
      <ChadHeader />
      <span className={styles["header"]}>Welcome to Chad</span>
      <span className={styles["text"]}>Go live in 10 minutes! 
        Our self-service widget empowers your customers 
        to manage orders and track shipments 24/7 without driving you crazy.
      </span>
      <div className={styles["input-wrapper"]}>
        <label className={styles["label"]} htmlFor="email-input">Email</label>
        <TextField size="small" id="email-input" variant="outlined" className={styles["input"]} placeholder="megachad@trychad.com" />
      </div>
      <div className={styles["input-wrapper"]}>
        <label className={styles["label"]} htmlFor="name-input">Your name</label>
        <TextField id="name-input" variant="outlined" className={styles["input"]} placeholder="Mega Chad" />
      </div>
      <div className={styles["input-wrapper"]}>
        <label className={styles["label"]} htmlFor="password-input">Password</label>
        <TextField id="password-input" variant="outlined" className={styles["input"]} placeholder="megachad@trychad.com" />
      </div>
    </div>
  )
}

export { SignUpForm };