import { SyntheticEvent, useState } from 'react';
import styles from './image.module.css';

interface ImageProps {
	alt: string;
	src: string;
}

export function Image({ alt, src, ...props }: ImageProps) {
	const [skeleton, setSkeleton] = useState(true);

	function handleLoad(event: SyntheticEvent) {
		setSkeleton(false);
		const target = event.target;
		if (target instanceof HTMLImageElement) {
			target.style.opacity = '1';
		}
	}
	return (
		<div className={styles.wrapper}>
			{skeleton && <div className={styles.skeleton}></div>}
			<img
				onLoad={handleLoad}
				alt={alt}
				className={styles.img}
				src={src}
				{...props}
			/>
		</div>
	);
}
