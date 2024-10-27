import { IconName } from "~/libs/types/types";
import RacoonImage from "~/assets/images/racoon-image.svg?react";
import ChadLogo from "~/assets/images/chad-logo.svg?react";

const iconNameToSvg: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  racoon: RacoonImage,
  chad: ChadLogo,
};

export { iconNameToSvg };
