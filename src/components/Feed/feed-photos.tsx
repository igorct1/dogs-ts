import { PHOTOS_GET } from '../../api/api';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../Error/error';
import { Loading } from '../Helpers/loading';
import { FeedPhotoItem } from './feed-photo-item';
import { useEffect } from 'react';
import styles from './feed-photos.module.css';

interface FeedPhotosProps {
	handleModalPhoto: (photo: Photo) => void;
	user?: string;
	page: number;
	setInfinite: (arg: boolean) => void;
}

export function FeedPhotos({
	handleModalPhoto,
	user,
	page,
	setInfinite,
}: FeedPhotosProps) {
	const { data, error, loading, request } = useFetch<Photo[]>();

	useEffect(() => {
		async function getPhotos() {
			const defaultUserValue = '0';

			const total = 6;
			const { url, options } = PHOTOS_GET({
				page,
				total,
				user: user ? user : defaultUserValue,
			});
			const { response, json } = await request(url, options);

			if (response && response.ok && json.length < total)
				setInfinite(false);
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
