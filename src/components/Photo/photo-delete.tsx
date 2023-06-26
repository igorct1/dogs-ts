import { PHOTO_DELETE } from '../../api/api';
import { useFetch } from '../../hooks/useFetch';
import styles from './photo-delete.module.css';

export function PhotoDelete({ id }: { id: number }) {
	const { request, loading } = useFetch();

	async function handleDelete() {
		const confirm = window.confirm(
			'Tem certeza que deseja deletar essa foto?',
		);

		if (confirm) {
			const { url, options } = PHOTO_DELETE(id);

			const { response } = await request(url, options);
			if (response && response.ok) {
				window.location.reload();
			}
		}
	}
	return (
		<div>
			{loading ? (
				<button disabled className={styles.delete}>
					Deletando
				</button>
			) : (
				<button className={styles.delete} onClick={handleDelete}>
					Deletar
				</button>
			)}
		</div>
	);
}
