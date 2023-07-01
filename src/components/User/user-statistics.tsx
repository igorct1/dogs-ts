import { lazy, useEffect, Suspense } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Head } from '../Helpers/head';
import { STATS_GET } from '../../api/api';
import { Loading } from '../Helpers/loading';
import { Error } from '../Error/error';
import { UserStatsGraphsProps } from './user-stats-graphs';

const UserStatsGraphs = lazy(() => import('./user-stats-graphs'));

export function UserStatistics() {
	const { data, error, loading, request } =
		useFetch<UserStatsGraphsProps[]>();

	useEffect(() => {
		async function getData() {
			const { url, options } = STATS_GET();
			await request(url, options);
		}

		getData();
	}, [request]);

	console.log(data);

	if (loading) return <Loading />;
	if (error) return <Error error={error} />;
	if (data)
		return (
			<div>
				<Head title="Estatísticas" />
				<Suspense fallback={<Loading />}>
					<UserStatsGraphs data={data} />
				</Suspense>
			</div>
		);
	else return null;
}
