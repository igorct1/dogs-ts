import { FormEvent, useEffect } from 'react';
import { TOKEN_POST, USER_GET } from '../../api/api';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Form/button';
import { Input } from '../Form/input';

export function LoginForm() {
	const username = useForm();
	const password = useForm();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			getUser(token);
		}
	}, []);

	async function getUser(token: string) {
		const { url, options } = USER_GET(token);

		const res = await fetch(url, options);
		const json = await res.json();

		console.log(json);
	}

	async function handleLogin(event: FormEvent) {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			const { url, options } = TOKEN_POST({
				username: username.value,
				password: password.value,
			});
			const res = await fetch(url, options);
			const json = await res.json();
			localStorage.setItem('token', json.token);
			getUser(json.token);
		}
	}

	return (
		<section>
			<h1>Login</h1>
			<form action="" onSubmit={handleLogin}>
				<Input
					label="Usuário"
					type="text"
					name="username"
					{...username}
				/>
				<Input
					label="Senha"
					type="password"
					name="password"
					{...password}
				/>
				<Button>Entrar</Button>
			</form>
		</section>
	);
}
