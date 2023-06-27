import { PHOTOS_GET } from '../../api/api';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../Error/error';
import { Loading } from '../Helpers/loading';
import { FeedPhotoItem } from './feed-photo-item';
import { useEffect } from 'react';
import styles from './feed-photos.module.css';

interface FeedPhotosProps {
	handleModalPhoto: (photo: Photo) => void;
}

export function FeedPhotos({ handleModalPhoto }: FeedPhotosProps) {
	const { data, error, loading, request } = useFetch<Photo[]>();

	useEffect(() => {
		async function getPhotos() {
			const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
			const { json } = await request(url, options);
		}
		getPhotos();
	}, []);

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	if (data)
		return (
			<ul className={`${styles.feed} animeLeft`}>
				{data.map((item) => (
					<FeedPhotoItem
						photo={item}
						key={item.id}
						handleModalPhoto={handleModalPhoto}
					/>
				))}
			</ul>
		);
	else return null;
}
