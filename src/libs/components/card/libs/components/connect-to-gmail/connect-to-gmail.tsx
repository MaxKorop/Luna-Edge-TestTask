import { Icon, ChadHeader } from "~/libs/components/components";

import styles from "./styles.module.css";

type Properties = {
  onConnect: () => void;
  setNotUsingGmail: (payload: boolean) => void;
}

const ConnectToGmail: React.FC<Properties> = ({ onConnect, setNotUsingGmail }) => {
  return (
    <div className={styles["container"]}>
      <ChadHeader />
      <span className={styles["header"]}>Connect your customer support email</span>
      <span className={styles["text"]}>Allows Chad to send automated responses on your behalf
        from your usual support mailbox
      </span>
      <div className={styles["list-container"]}>
        <div className={styles["list-item"]}>
          <div><Icon name="checkOutlined" /></div>
          <div className={styles["list-item-text"]}>
            <span>Contextual responses</span>
            <span>Custom responses to any support situation from “where’s my stuff?” to “I want a refund”</span>
          </div>
        </div>
        <div className={styles["list-item"]}>
          <div><Icon name="checkOutlined" /></div>
          <div className={styles["list-item-text"]}>
            <span>Reply from anywhere</span>
            <span>Respond to your customers via email or Chad chat—it’s all saved in the same thread</span>
          </div>
        </div>
        <div className={styles["list-item"]}>
          <div><Icon name="checkOutlined" /></div>
          <div className={styles["list-item-text"]}>
            <span>Categorical inbox tags</span>
            <span>Tags your emails by category so you know what
              to expect before even opening an email
            </span>
          </div>
        </div>
      </div>
      <div onClick={onConnect} className={styles["button"]}>
        <div className={styles["button-icon"]}><Icon name="googleIcon" /></div>
        <div className={styles["button-text"]}><span>Connect Gmail account</span></div>
      </div>
      <span onClick={() => setNotUsingGmail(true)} className={styles["text-bottom"]}>I don’t use Gmail</span>
    </div>
  );
}

export { ConnectToGmail };
