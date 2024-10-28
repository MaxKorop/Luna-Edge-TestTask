import { Icon } from "~/libs/components/components";
import { Stage } from "~/libs/types/types";

const getTimelineDot = (stage: Stage, stages: Stage[], index: number) => {
  if (stage.finished) {
    if (stage.active) {
      return (
        <div className="void-timeline-point-active" style={{ width: 42, height: 42 }}>
          <Icon name="timelinePointActive" className="icon-active" />
        </div>
      );
    } else {
      const hasNextActiveStage = stages.slice(index).some((nextStage) => nextStage.active);
      const hasPrevActiveStage = stages.slice(0, index).some((prevStage) => prevStage.active);

      if (hasNextActiveStage) {
        return <Icon name="timelinePointActive" className="icon-active" />;
      } else if (hasPrevActiveStage) {
        return <Icon name="timelinePointNonActive" className="icon-non-active" />;
      }
    }
  }
  return <div className={`void-timeline-point${stage.active ? "-active" : ""}`}></div>;
};

export { getTimelineDot };