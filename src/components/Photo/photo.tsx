import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { User } from '../../types/User';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api/api';
import { Error } from '../Error/error';
import { Loading } from '../Helpers/loading';
import { PhotoContent } from './photo-content';
import { Head } from '../Helpers/head';

export function Photo() {
	const { id } = useParams();
	const { data, loading, error, request } = useFetch<Data>();
	console.log(data);
	useEffect(() => {
		if (id) {
			const { url, options } = PHOTO_GET(id);
			request(url, options);
		}
	}, []);
	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	if (data)
		return (
			<section className="container mainContainer">
				<Head title={data.photo.title} />
				<PhotoContent data={data} single={true} />
			</section>
		);
}
