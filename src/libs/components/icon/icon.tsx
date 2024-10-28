import { type IconName } from "~/libs/types/types.js";

import { iconNameToSvg } from "./libs/maps/maps";

type Properties = {
	name: IconName;
	className?: string;
};

const Icon: React.FC<Properties> = ({ name, className }: Properties) => {
	const Icon = iconNameToSvg[name];

	return <Icon className={className} />;
};

export { Icon };
