import { FormEvent } from 'react';

import { useForm } from '../../hooks/useForm';
import { Button } from '../Form/button';
import { Input } from '../Form/input';
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';

export function LoginForm() {
	const { userLogin, error, loading } = useContext(UserContext);

	const username = useForm();
	const password = useForm();

	async function handleLogin(event: FormEvent) {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value);
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
				{loading ? (
					<Button disabled>Carregando</Button>
				) : (
					<Button>Entrar</Button>
				)}
				{error && <p>{error}</p>}
			</form>
		</section>
	);
}
