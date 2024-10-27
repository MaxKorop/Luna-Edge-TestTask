import { TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useParams } from 'react-router-dom';
import { Stage } from '~/libs/types/types';
import styles from "./styles.module.css";

type Properties = {
  stages: Stage[];
}

const TimeLine: React.FC<Properties> = ({ stages }) => {
  const { stage: currentStage } = useParams();

  return (
    <div>
      {
        stages.map((stage: Stage, index: number) => (
          <>
            <div
              className={styles["timeline-dot__wrapper"]}
            >
              <TimelineDot
                variant='outlined'
                style={{
                  borderColor: stage.number === Number(currentStage) || stage.finished
                    ? "var(--color-brand-primary)"
                    : "var(--color-brand-primary-non-active)",
                }}
                className={styles["timeline-dot"]}
              >
                {
                  stage.finished ? <CheckCircleIcon fontSize='large' className={styles["check-icon"]} /> : <></>
                } 
              </TimelineDot>
              <TimelineContent>
                <Typography
                  variant='body2'
                >
                  {stage.label}
                </Typography>
              </TimelineContent>
            </div>
            {
              (stage.number !== stages.length)
                ? <TimelineConnector
                    style={{
                      backgroundColor: (stages[stage.number].active && stage.finished)
                        ? "var(--color-brand-primary)"
                        : "var(--color-brand-primary-non-active)",
                    }}
                    className={styles["timeline-connector"]}
                  />
                : <></>
            }
          </>
        ))
      }
    </div>
  )
}

export { TimeLine };