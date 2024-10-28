import { Stage } from '~/libs/types/types';
import "./styles.css";
import { Timeline } from 'rsuite';
import { getTimelineDot } from './libs/helpers/getTimelineDot.helper';

type Properties = {
  stages: Stage[];
}

const TimeLine: React.FC<Properties> = ({ stages }) => {
  return (
    <Timeline className="custom-timeline">
      {
        stages.map((stage: Stage, index: number) => (
          <Timeline.Item
            key={stage.number}
            dot={getTimelineDot(stage, stages, index)}
          >
            <span className={stage.active ? "timeline-label-active" : "timeline-label-non-active"}>
              {stage.label}
            </span>
          </Timeline.Item>
        ))
      }
    </Timeline>
  )
}

export { TimeLine };