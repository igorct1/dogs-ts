import { FormEvent, useState, useEffect } from 'react';
import { Input } from '../Form/input';
import { Button } from '../Form/button';
import { useForm } from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';
import { PHOTO_POST } from '../../api/api';
import { Error } from '../Error/error';
import styles from './user-photo-post.module.css';
import { useNavigate } from 'react-router-dom';

export function UserPhotoPost() {
	const name = useForm();
	const weight = useForm();
	const age = useForm();
	const token = localStorage.getItem('token')!;
	const navigate = useNavigate();
	const { data, error, loading, request } = useFetch();

	useEffect(() => {
		if (data) navigate('/account');
	}, [data]);

	const [img, setImg] = useState(
		{} as {
			raw: File;
			preview: {};
		},
	);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();

		const formData = new FormData();
		formData.append('img', img.raw);
		formData.append('nome', name.value);
		formData.append('peso', weight.value);
		formData.append('idade', age.value);
		const { url, options } = PHOTO_POST(formData, token);
		request(url, options);
	}

	function handleImgChange(event: FormEvent) {
		const target = event.target;

		if (target instanceof HTMLInputElement && target.files) {
			setImg({
				preview: URL.createObjectURL(target.files[0]),
				raw: target.files[0],
			});
		}
	}
	return (
		<section className={`${styles.photoPost} animeLeft`}>
			<form onSubmit={handleSubmit}>
				<Input label="Nome" type="text" name="name" {...name} />
				<Input label="Peso" type="number" name="weight" {...weight} />
				<Input label="Idade" type="number" name="age" {...age} />
				<input
					type="file"
					name="img"
					id="img"
					onChange={handleImgChange}
					className={styles.file}
				/>
				{loading ? (
					<Button disabled>Enviando</Button>
				) : (
					<Button>Enviar</Button>
				)}
				{error && <Error error={error} />}
			</form>
			<div>
				{img.preview && (
					<div
						className={styles.preview}
						style={{ backgroundImage: `url(${img.preview})` }}
					></div>
				)}
			</div>
		</section>
	);
}
