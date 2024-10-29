import { Button, Icon } from "~/libs/components/components";

import styles from "./styles.module.css";

type Properties = {
    onContinue: () => void;
}

const ResponseRecieved: React.FC<Properties> = ({ onContinue }) => {
  return (
    <div className={styles["container"]}>
      <div><Icon name="check" /></div>
      <span className={styles["header"]}>Response received</span>
      <span className={styles["text"]}>Thank you for your interest in Chad! We’ll be
        hard at work building integrations to support your platform.
      </span>
      <div className={styles["button"]}><Button label="Done" onClick={onContinue} /></div>
    </div>
  );
}

export { ResponseRecieved };
