import { IconName } from "~/libs/types/types";
import ChadLogo from "~/assets/images/chad-logo.svg?react";
import CheckIcon from "~/assets/images/check.svg?react";
import CheckOutlinedIcon from "~/assets/images/check-outlined.svg?react";
import EyeClose from "~/assets/images/eye-close.svg?react";
import EyeOpen from "~/assets/images/eye-open.svg?react";
import GoogleIcon from "~/assets/images/google-icon.svg?react";
import GoogleIconSquare from "~/assets/images/google-icon-square.svg?react";
import RacoonImage from "~/assets/images/racoon-image.svg?react";
import TimelinePointActive from "~/assets/images/timeline-point-active.svg?react";
import TimelinePointNonActive from "~/assets/images/timeline-point-non-active.svg?react";

const iconNameToSvg: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  chad: ChadLogo,
  check: CheckIcon,
  checkOutlined: CheckOutlinedIcon,
  eyeClose: EyeClose,
  eyeOpen: EyeOpen,
  googleIcon: GoogleIcon,
  googleIconSquare: GoogleIconSquare,
  racoon: RacoonImage,
  timelinePointActive: TimelinePointActive,
  timelinePointNonActive: TimelinePointNonActive,
};

export { iconNameToSvg };
