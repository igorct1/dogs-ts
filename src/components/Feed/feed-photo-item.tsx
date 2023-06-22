interface FeedPhotoItemProps {
	photo: Photo;
}

import styles from './feed-photo-item.module.css';

export function FeedPhotoItem({ photo }: FeedPhotoItemProps) {
	return (
		<li className={styles.photo}>
			<img src={photo.src} alt={photo.title} />
			<span>{photo.acessos}</span>
		</li>
	);
}
