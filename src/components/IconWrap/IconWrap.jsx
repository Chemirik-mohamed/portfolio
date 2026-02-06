import { Menu, X } from "lucide-react";

const iconMap = {
	Menu,
	X,
};

export function IconWrap({
	name,
	size = 20,
	color = "currentColor",
	strokeWidth = 2,
	className,
	"aria-label": ariaLabel,
}) {
	const Icon = iconMap[name];

	if (!Icon) {
		return null;
	}

	return (
		<Icon
			size={size}
			color={color}
			strokeWidth={strokeWidth}
			className={className}
			aria-label={ariaLabel}
			aria-hidden={ariaLabel ? undefined : true}
			focusable="false"
		/>
	);
}
