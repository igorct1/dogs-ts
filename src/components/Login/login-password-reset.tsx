import { FormEvent, useEffect, useState } from 'react';
import { Input } from '../Form/input';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Form/button';
import { PASSWORD_RESET } from '../../api/api';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../Error/error';
import { useNavigate } from 'react-router-dom';

export function LoginPasswordReset() {
	const [login, setLogin] = useState('');
	const [key, setKey] = useState('');
	const password = useForm();
	const { error, loading, request } = useFetch();
	const navigate = useNavigate();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		const { url, options } = PASSWORD_RESET({
			login,
			key,
			password: password.value,
		});
		const { response } = await request(url, options);

		if (response && response.ok) navigate('/login');
	}

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);

		const key = params.get('key');
		const login = params.get('login');
		if (key) setKey(key);
		if (login) setLogin(login);
	}, []);

	return (
		<div>
			<h1 className="title">Resete a senha</h1>

			<form onSubmit={handleSubmit}>
				<Input
					label="Nova senha"
					type="password"
					name="password"
					{...password}
				/>
				{loading ? (
					<Button disabled>Resetando</Button>
				) : (
					<Button>Resetar</Button>
				)}
				{error && <Error error={error} />}
			</form>
		</div>
	);
}
