import { MouseEvent, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api/api';
import { Error } from '../Error/error';

import { Loading } from '../Helpers/loading';
import { PhotoContent } from '../Photo/photo-content';
import styles from './feed-modal.module.css';

interface FeedModalProps {
	photo: Photo;
	handleModalPhoto: (photo?: Photo) => void;
}

export function FeedModal({ photo, handleModalPhoto }: FeedModalProps) {
	const { error, loading, request, data } = useFetch<Data>();

	if (!data) return null;

	function handleOutsideClick(event: MouseEvent) {
		const { target, currentTarget } = event;
		if (target === currentTarget) {
			handleModalPhoto();
		}
	}

	useEffect(() => {
		const { url, options } = PHOTO_GET(photo.id);

		request(url, options);
	}, [photo]);

	return (
		<div className={styles.modal} onClick={handleOutsideClick}>
			{error && <Error error={error} />}
			{loading && <Loading />}
			{data && <PhotoContent single={false} data={data} />}
		</div>
	);
}
