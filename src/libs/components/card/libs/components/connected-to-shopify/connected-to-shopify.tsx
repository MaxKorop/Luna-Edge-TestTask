import { Link } from "react-router-dom";
import { Button, Icon } from "~/libs/components/components";

import styles from "./styles.module.css";

type Properties = {
  connected?: boolean;
  onContinue: () => void;
  onConnectAnother: () => void;
}

const ConnectedToShopify: React.FC<Properties> = ({ onContinue, onConnectAnother, connected = true}) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["icon-racoon"]}><Icon name="racoon"/></div>
      {connected
        ? (
          <div className={styles["text"]}>
            <span className={styles["text-title"]}>Store connected</span>
            <span className={styles["text-subtitle"]}>Chad is now able to manage customer support requests for [STORE-NAME].</span>
          </div>
        )
        : (
          <div className={styles["text"]}>
            <span className={styles["text-title"]}>[STORE-NAME]</span>
            <span className={styles["text-title"]}>already connected</span>
          </div>  
        )
      }
      <div className={styles["button"]}><Button label="Continue" onClick={onContinue}/></div>
      {connected
        ? (
          <span className={styles["text-bottom"]}>Wrong store? <Link to={"/sign-up"} onClick={onConnectAnother} className={styles["link"]}>Connect another one</Link></span>
        )
        : (
          <span className={styles["text-bottom"]}>Not your store? <Link to={"/sign-up"} onClick={onConnectAnother} className={styles["link"]}>Connect another one</Link></span>
        )
      }
    </div>
  );
}

export { ConnectedToShopify };
