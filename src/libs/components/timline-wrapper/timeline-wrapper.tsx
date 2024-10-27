import { useContext } from "react";
// import { TimeLine } from "./libs/components/timeline/timeline";
import { Context } from "~/libs/components/app/app";
import styles from "./styles.module.css";

const TimeLineWrapper: React.FC = () => {
  const { stages: _ } = useContext(Context);

  return (
    <div className={styles["timeline-wrapper"]} >
      {/* <TimeLine stages={stages} /> */}
    </div>
  )
}

export { TimeLineWrapper };