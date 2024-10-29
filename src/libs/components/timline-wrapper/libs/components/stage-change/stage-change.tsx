import { useCallback, useContext } from "react"; 
import { Button, Icon } from "~/libs/components/components";
import styles from "./styles.module.css";
import { Context } from "~/libs/components/app/app";
import { useNavigate } from "react-router-dom";
import { Stage } from "~/libs/types/types";

const StageChange: React.FC = () => {
  const { currentStage, setCurrentStage, stages, changeStage } = useContext(Context);
  const navigate = useNavigate();

  const backHandler = useCallback(() => {
    if (currentStage > 1) {
      changeStage?.(currentStage, (stage: Stage) => ({ ...stage, active: false }));
      changeStage?.(currentStage - 1, (stage: Stage) => ({ ...stage, active: true }));
      setCurrentStage?.(currentStage - 1);
    }
  }, [currentStage, changeStage, navigate]);

  const nextHandler = useCallback(() => {
    if (currentStage < stages.length) {
      changeStage?.(currentStage, (stage: Stage) => ({ ...stage, active: false }));
      changeStage?.(currentStage + 1, (stage: Stage) => ({ ...stage, active: true }));
      setCurrentStage?.(currentStage + 1);
    }
  }, [currentStage, changeStage, navigate, stages.length]);

  const isBackDisabled = currentStage === 1;
  const isNextDisabled =
    !stages[currentStage - 1]?.finished || currentStage >= stages.length;

  return (
    <div className={styles["stage-change-container"]}>
      <div
        className={styles[`${isBackDisabled ? "button-disabled" : "back-button"}`]}
        onClick={backHandler}
      >
        <Icon name="leftArrow" />
        <Button
          className={styles["button"]}
          disabled={isBackDisabled}
          label="Back"
          onClick={()=>{}}
        />
      </div>
      <div
        className={styles[`${isNextDisabled ? "button-disabled" : "next-button"}`]}
        onClick={nextHandler}
      >
        <Button
          className={styles["button"]}
          disabled={isNextDisabled}
          label="Next"
          onClick={()=>{}}
        />
        <Icon name="rightArrow" />
      </div>
    </div>
  );
};

export { StageChange };
