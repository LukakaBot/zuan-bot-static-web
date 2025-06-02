import Image from 'next/image';
import { Icon } from '@iconify/react';
import { CSSProperties, useMemo } from 'react';

interface BaseIconProps extends React.HTMLAttributes<HTMLElement> {
	name: string;
	size?: number;
	color?: string;
}

function BaseIcon(props: BaseIconProps) {
	const { className, name, size = 16, color } = props;

	const iconStyle = useMemo(
		(): CSSProperties => ({
			width: `${size}px`,
			height: `${size}px`,
			color: color ? color : undefined,
		}),
		[]
	);

	const isLocalIcon = useMemo(() => {
		return name.startsWith('svg-');
	}, [name]);

	const isCSSIcon = useMemo(() => {
		return name.startsWith('icon-');
	}, [name]);

	if (isLocalIcon) {
		return (
			<Image
				className={className}
				src={`/svg/${name}.svg`}
				alt={name}
				width={size}
				height={size}
			/>
		);
	}

	if (isCSSIcon) {
		return <span className={`${name} ${className}`} style={iconStyle} />;
	}

	return (
		<Icon
			className={className}
			icon={name}
			width={size}
			height={size}
			color={color ? color : undefined}
		/>
	);
}

export default BaseIcon;
