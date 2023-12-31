import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styles from './photo-content.module.css';
import { PhotoComments } from './photo-comments';
import { UserContext } from '../../contexts/user-context';
import { PhotoDelete } from './photo-delete';
import { Image } from '../Helpers/image';

interface PhotoContentProps {
	data: Data;
	single: boolean;
}

export function PhotoContent({ data, single }: PhotoContentProps) {
	const user = useContext(UserContext);

	const { photo, comments } = data;

	if (photo)
		return (
			<div className={`${styles.photo} ${single ? styles.single : ''}`}>
				<div className={styles.img}>
					<Image src={photo.src} alt={photo.title} />
				</div>
				<div className={styles.details}>
					<p className={styles.author}>
						{user.data && user.data.username === photo.author ? (
							<PhotoDelete id={photo.id} />
						) : (
							<Link to={`/profile/${photo.author}`}>
								@{photo.author}
							</Link>
						)}

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
				<PhotoComments
					single={single}
					id={photo.id}
					comments={comments}
				/>
			</div>
		);
}
