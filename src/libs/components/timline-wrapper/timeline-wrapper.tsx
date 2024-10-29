import { useContext } from "react";
import { Context } from "~/libs/components/app/app";
import styles from "./styles.module.css";
import { Carousel, StageChange, TimeLine } from "./libs/components/components";

const TimeLineContainer: React.FC = () => {
  const { stages } = useContext(Context);

  return (
    <div className={styles["timeline-container"]}>
      <div className={styles["timeline-wrapper"]}>
        <TimeLine stages={stages} />
      </div>
      <StageChange />
      <Carousel />
    </div>
  )
}

export { TimeLineContainer };