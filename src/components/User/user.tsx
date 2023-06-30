import { Route, Routes } from 'react-router-dom';
import { UserHeader } from './user-header';
import { Feed } from '../Feed/feed';
import { UserPhotoPost } from './user-photo-post';
import { UserStatistics } from './user-statistics';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import { NotFound } from '../not-found';
import { Head } from '../Helpers/head';

export function User() {
	const { data } = useContext(UserContext);

	return (
		<section className="container">
			<Head title="Minha conta" />
			<UserHeader />
			<Routes>
				<Route path="/" element={<Feed user={data.username} />} />
				<Route path="/post" element={<UserPhotoPost />} />
				<Route path="/statistics" element={<UserStatistics />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</section>
	);
}
