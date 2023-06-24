import { Link } from 'react-router-dom';

import styles from './photo-content.module.css';
import { PhotoComments } from './photo-comments';

export function PhotoContent({ data }: any) {
	const { photo, comments } = data;
	if (photo)
		return (
			<div className={styles.photo}>
				<div className={styles.img}>
					{photo && photo.src && <img src={photo.src} />}
				</div>
				<div className={styles.details}>
					<p className={styles.author}>
						<Link to={`/profile/${photo.author}`}>
							@{photo.author}
						</Link>
						<span className={styles.views}>{photo.acessos}</span>
					</p>
					<h1 className="title">
						<Link to={`/photo/${photo.id}`}>{photo.title}</Link>
					</h1>
					<ul className={styles.attributes}>
						<li>{photo.peso} kg</li>
						<li>{photo.idade} anos</li>
					</ul>
				</div>
				<PhotoComments id={photo.id} comments={comments} />
			</div>
		);
}
