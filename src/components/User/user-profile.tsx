import { useParams } from 'react-router-dom';
import { Feed } from '../Feed/feed';

export function UserProfile() {
	let { user } = useParams();

	if (!user) return null;

	return (
		<section className="container mainContainer">
			<Feed user={user} />
		</section>
	);
}
