import { Route, Routes } from 'react-router-dom';
import { UserHeader } from './user-header';
import { Feed } from '../Feed/feed';
import { UserPhotoPost } from './user-photo-post';
import { UserStatistics } from './user-statistics';

export function User() {
	return (
		<section className="container">
			<UserHeader />
			<Routes>
				<Route path="/" element={<Feed />} />
				<Route path="/post" element={<UserPhotoPost />} />
				<Route path="/statistics" element={<UserStatistics />} />
			</Routes>
		</section>
	);
}
