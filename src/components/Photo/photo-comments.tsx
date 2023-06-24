import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user-context';
import { PhotoCommentsForm } from './photo-comments-form';
import styles from './photo-comments.module.css';

interface PhotoCommentsProps {
	id: number;
	comments: Comment[];
}

export function PhotoComments(props: PhotoCommentsProps) {
	const [comments, setComments] = useState<Comment[]>(() => props.comments);
	const { login } = useContext(UserContext);

	function handleNewComment(comment: Comment) {
		setComments((state) => [...state, comment]);
	}

	return (
		<div>
			<>
				<ul className={styles.comment}>
					{comments.map((comment) => (
						<li key={comment.comment_ID}>
							<strong>{comment.comment_author}: </strong>
							<span>{comment.comment_content}</span>
						</li>
					))}
				</ul>
			</>
			{login && (
				<PhotoCommentsForm
					id={props.id}
					handleNewComment={handleNewComment}
				/>
			)}
		</div>
	);
}
