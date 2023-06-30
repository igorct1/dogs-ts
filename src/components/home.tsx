import { Feed } from './Feed/feed';
import { Head } from './Helpers/head';

export function Home() {
	return (
		<div className="container mainContainer">
			<Head title="Home" />

			<Feed />
		</div>
	);
}
