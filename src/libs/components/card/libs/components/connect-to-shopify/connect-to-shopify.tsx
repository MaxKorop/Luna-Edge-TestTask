import { useCallback, useContext } from "react";

import { ChadHeader, Button, Icon } from "~/libs/components/components";
import { Context } from "~/libs/components/app/app";

import styles from "./styles.module.css";

type Properties = {
  setNotUsingShopify?: (payload: boolean) => void;
}

const ConnectToShopify: React.FC<Properties> = ({ setNotUsingShopify }) => {
  const { changeIsStoreConnected } = useContext(Context);

  const connectToChopify = useCallback(
    () => {
      changeIsStoreConnected?.(true);
    },
    [changeIsStoreConnected]
  );

  return (
    <div className={styles["container"]}>
      <ChadHeader/>
      <span className={styles["header"]}>Connect your Shopify store</span>
      <span className={styles["text"]}>Installs the Chad widget in your Shopify 
          store and sets it up to display your customers’ 
          order information and self-serve options.
      </span>
      <div className={styles["list-container"]}>
        <div className={styles["list-item"]}>
          <div><Icon name="checkOutlined"/></div>
          <div className={styles["list-item-text"]}>
            <span>Track orders and shipping</span>
            <span>Global coverage with 600+ couriers supported</span>
          </div>     
        </div>
        <div className={styles["list-item"]}>
          <div><Icon name="checkOutlined"/></div>
          <div className={styles["list-item-text"]}>
            <span>Manage orders</span>
            <span>Allow customers to track, return, exchange, or report 
              problems with their orders
            </span>
          </div>     
        </div>
        <div className={styles["list-item"]}>
          <div><Icon name="checkOutlined"/></div>
          <div className={styles["list-item-text"]}>
            <span>Process returns and exchanges</span>
            <span>Automatically checks your store policy and existing inventory 
              before resolving or escalating each request
            </span>
          </div>     
        </div>
      </div>
      <div className={styles["button"]}><Button label="Create account" onClick={connectToChopify} /></div>
      <span onClick={() => setNotUsingShopify?.(true)} className={styles["text-bottom"]}>I don’t use Shopify</span>
    </div>
  );
}

export { ConnectToShopify };
