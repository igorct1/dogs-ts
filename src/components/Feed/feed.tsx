import { FeedModal } from './feed-modal';
import { FeedPhotos } from './feed-photos';

import { useState } from 'react';

export function Feed() {
	const [modalPhoto, setModalPhoto] = useState<Photo | null>(null);

	function handleModalPhoto(photo?: Photo) {
		if (photo) {
			setModalPhoto(photo);
		} else {
			setModalPhoto(null);
		}
	}

	return (
		<div>
			{modalPhoto && (
				<FeedModal
					handleModalPhoto={handleModalPhoto}
					photo={modalPhoto}
				/>
			)}
			<FeedPhotos handleModalPhoto={handleModalPhoto} />
		</div>
	);
}
