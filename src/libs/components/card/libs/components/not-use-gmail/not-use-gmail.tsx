import { Link } from "react-router-dom";
import { Button, ChadHeader } from "~/libs/components/components";

import styles from "./styles.module.css";

type Properties = {
  onContinue: () => void;
  setNotUsingGmail: (payload: boolean) => void;
}

const NotUseGmail: React.FC<Properties> = ({ onContinue, setNotUsingGmail }) => {
  return (
    <div className={styles["container"]}>
      <ChadHeader />
      <span className={styles["header"]}>Don’t use Gmail?</span>
      <span className={styles["text"]}>Chad Beta is currently only integrated with Gmail.
        We’ll send you an email when Chad becomes compatible with your support ticket platform.
      </span>
      <div className={styles["select-wrapper"]}>
        <label className={styles["label"]}>Platform</label>
        <select className={styles["select"]}>
          <option disabled selected hidden>Select platform</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div className={styles["button"]}><Button label="Create account" onClick={onContinue} /></div>
      <span className={styles["text-bottom"]}>Actually use Gmail? <Link onClick={() => setNotUsingGmail(false)} to={"/sign-up"} className={styles["link"]}>Connect</Link></span>
    </div>
  );
}

export { NotUseGmail };
