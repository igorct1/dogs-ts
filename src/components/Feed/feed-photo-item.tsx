interface FeedPhotoItemProps {
	photo: Photo;
	handleModalPhoto: (photo: Photo) => void;
}

import { Image } from '../Helpers/image';
import styles from './feed-photo-item.module.css';

export function FeedPhotoItem({ photo, handleModalPhoto }: FeedPhotoItemProps) {
	function handleClickModal() {
		handleModalPhoto(photo);
	}
	return (
		<li className={styles.photo} onClick={handleClickModal}>
			<Image src={photo.src} alt={photo.title} />
			<span>{photo.acessos}</span>
		</li>
	);
}
