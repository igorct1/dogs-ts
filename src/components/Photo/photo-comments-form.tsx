import { FormEvent, useState } from 'react';
import { Send } from '../../icons/send';
import { useFetch } from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api/api';
import styles from './photo-comments-form.module.css';

interface PhotoCommentsFormProps {
	id: number;
	handleNewComment: (comment: any) => void;
	single: boolean;
}

export function PhotoCommentsForm({
	single,
	id,
	handleNewComment,
}: PhotoCommentsFormProps) {
	const { request } = useFetch();
	const [comment, setComment] = useState('');

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const { url, options } = COMMENT_POST(id, { comment });
		const { response, json } = await request(url, options);
		if (response && response.ok) handleNewComment(json);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={`${styles.form} ${single ? styles.single : ''}`}
		>
			<textarea
				className={styles.textarea}
				name="comment"
				id="comment"
				value={comment}
				onChange={({ target }) => setComment(target.value)}
				placeholder="Comente..."
			/>
			<button className={styles.sendButton}>
				<Send />
			</button>
		</form>
	);
}
