import { useCallback, useContext, useRef, useState } from "react";
import { 
  ConnectedToShopify, 
  ConnectToShopify,
  ConnectToGmail,
  NotUseGmail, 
  NotUseShopify, 
  ResponseRecieved, 
  SignUpForm, 
} from "./libs/components/components";

import styles from "./styles.module.css";
import { Context } from "~/libs/components/app/app";
import { useNavigate } from "react-router-dom";
import { type Stage } from "~/libs/types/stage.type";

const Card: React.FC = () => {
  const { 
    stages,
    currentStage,
    isStoreConnected, 
    isCustomerSupportEmailConnected,
    setCurrentStage,
    changeIsStoreConnected,
    changeIsCustomerSupportEmailConnected,
    changeStage,
  } = useContext(Context);
  const navigate = useNavigate();

  const [notUsingShopify, setNotUsingShopify] = useState<boolean>(false);
  const isStoreAlreadyConnected = useRef(isStoreConnected);
  const [notUsingGmail, setNotUsingGmail] = useState<boolean>(false);

  const renderStageComponent = () => {
    switch (currentStage) {
      case 1:
        return <SignUpForm />;
      
      case 2:
        return isStoreAlreadyConnected.current
          ? <ConnectedToShopify
              connected={false}
              onContinue={() => {
                handleFinish();
                handleContinue();
              }}
              onConnectAnother={handleConnectAnotherStore}
            />
          : isStoreConnected
            ? (notUsingShopify
                ? <ResponseRecieved
                    onContinue={() => {
                      handleFinish();
                      handleContinue();
                      changeIsStoreConnected?.(true);
                    }}
                  />
                : <ConnectedToShopify
                    onContinue={() => {
                      handleFinish();
                      handleContinue();
                    }}
                    onConnectAnother={handleConnectAnotherStore}
                  />
              )
            : (notUsingShopify
                ? <NotUseShopify
                    onContinue={handleFinish}
                    setNotUsingShopify={setNotUsingShopify}
                  />
                : <ConnectToShopify setNotUsingShopify={setNotUsingShopify} />
              );

      case 3:
        return isCustomerSupportEmailConnected
          ? (notUsingGmail
              ? <ResponseRecieved
                  onContinue={() => {
                    handleFinish();
                    handleContinue();
                  }}
                />
              : <>{ (handleFinish(), handleContinue())}</>
            )
          : (notUsingGmail
              ? <NotUseGmail
                  onContinue={() => {
                    changeIsCustomerSupportEmailConnected?.(true);
                  }}
                  setNotUsingGmail={setNotUsingGmail}
                />
              : <ConnectToGmail
                  onConnect={() => {
                    handleFinish();
                    handleContinue();
                  }}
                  setNotUsingGmail={setNotUsingGmail}
                />
            );
      
      case 4: 
        return <>{navigate("/welcome")}</>
        
      default:
        return null;
    }
  };

  const handleFinish = useCallback(
    () => {
      setCurrentStage?.(currentStage + 1);
      changeStage?.(currentStage, (stage: Stage) => {
        stage.finished = true;
        stage.active = false;
        return stage;
      });
    },
    [currentStage, setCurrentStage, changeStage]
  );

  const handleContinue = useCallback(
    () => {
      if (currentStage !== stages.length) {
        changeStage?.(currentStage + 1, (stage: Stage) => {
          stage.active = true;
          return stage;
        });
      } else {
        navigate("/welcome");
      }
    },
    [currentStage, stages, changeStage, navigate]
  );

  const handleConnectAnotherStore = useCallback(
    () => {
      changeIsStoreConnected?.(false);
      isStoreAlreadyConnected.current = false;
    },
    []
  );

  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["card"]}>
        {renderStageComponent()}
      </div>
    </div>
  );
};

export { Card };
