import { FormEvent } from 'react';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Form/button';
import { Input } from '../Form/input';
import { useFetch } from '../../hooks/useFetch';
import { PASSWORD_LOST } from '../../api/api';
import { Error } from '../Error/error';

export function LoginPasswordLost() {
	const login = useForm();
	const { data, error, loading, request } = useFetch<string>();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (login.validate()) {
			const { options, url } = PASSWORD_LOST({
				login: login.value,
				url: 'https://localhost:3000/login/reset',
			});

			const { json, response } = await request(url, options);
		}
	}

	return (
		<section>
			<h1 className="title">Perdeu a senha?</h1>
			{data.length ? (
				<p style={{ color: '#4c1' }}>{data}</p>
			) : (
				<form onSubmit={handleSubmit}>
					<Input
						label="Email / Usuário"
						type="text"
						name="login"
						{...login}
					/>
					{loading ? (
						<Button disabled>Enviando</Button>
					) : (
						<Button>Enviar Email</Button>
					)}
					{error && <Error error={error} />}
				</form>
			)}
		</section>
	);
}
