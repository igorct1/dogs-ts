import { Route, Routes } from 'react-router-dom';
import { UserHeader } from './user-header';
import { Feed } from '../Feed/feed';
import { UserPhotoPost } from './user-photo-post';
import { UserStatistics } from './user-statistics';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
export function User() {
	const { data: user } = useContext(UserContext);

	return (
		<section className="container">
			<UserHeader />
			<Routes>
				<Route path="/" element={<Feed user={user.id} />} />
				<Route path="/post" element={<UserPhotoPost />} />
				<Route path="/statistics" element={<UserStatistics />} />
			</Routes>
		</section>
	);
}
