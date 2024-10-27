import { IconName } from "~/libs/types/types";
import RacoonImage from "~/assets/images/racoon-image.svg?react";
import ChadLogo from "~/assets/images/chad-logo.svg?react";
import CheckIcon from "~/assets/images/check.svg?react";
import CheckOutlinedIcon from "~/assets/images/check-outlined.svg?react";

const iconNameToSvg: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  chad: ChadLogo,
  check: CheckIcon,
  checkOutlined: CheckOutlinedIcon,
  racoon: RacoonImage,
};

export { iconNameToSvg };
