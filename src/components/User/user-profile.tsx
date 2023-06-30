import { useParams } from 'react-router-dom';
import { Feed } from '../Feed/feed';
import { Head } from '../Helpers/head';

export function UserProfile() {
	let { user } = useParams();

	if (!user) return null;

	return (
		<section className="container mainContainer">
			<Head title={user} />
			<Feed user={user} />
		</section>
	);
}
