import { FeedModal } from './feed-modal';
import { FeedPhotos } from './feed-photos';

import { useState, useEffect } from 'react';

type FeedProps = {
	user: number;
};

export function Feed({ user }: FeedProps) {
	const [modalPhoto, setModalPhoto] = useState<Photo | null>(null);
	const [infinite, setInfinite] = useState(true);
	const [pages, setPages] = useState([1]);

	useEffect(() => {
		let wait = false;

		function infiniteScroll() {
			const scroll = window.scrollY;
			const height = document.body.offsetHeight - window.innerHeight;

			if (infinite) {
				if (scroll > height * 0.75 && !wait) {
					setPages((prev) => [...prev, prev.length + 1]);
					wait = true;

					setTimeout(() => {
						wait = false;
					}, 500);
				}
			}
		}

		const events = ['wheel', 'scroll'];
		events.forEach((event) => {
			window.addEventListener(event, infiniteScroll);
		});

		return () => {
			events.forEach((event) => {
				window.removeEventListener(event, infiniteScroll);
			});
		};
	}, [infinite]);

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
			{pages.map((page) => (
				<FeedPhotos
					key={page}
					page={page}
					user={user}
					handleModalPhoto={handleModalPhoto}
					setInfinite={setInfinite}
				/>
			))}
		</div>
	);
}
