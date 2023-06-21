import styles from 'login-create.module.css';
import { FormEvent, useContext } from 'react';
import { Input } from '../Form/input';
import { Button } from '../Form/button';
import { useForm } from '../../hooks/useForm';
import { USER_POST } from '../../api/api';
import { UserContext } from '../../contexts/user-context';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../Error/error';

export function LoginCreate() {
	const username = useForm();
	const email = useForm('email');
	const password = useForm();
	const { userLogin } = useContext(UserContext);
	const { loading, error, request } = useFetch();

	async function createNewUser(event: FormEvent) {
		event.preventDefault();
		try {
			const { url, options } = USER_POST({
				username: username.value,
				email: email.value,
				password: password.value,
			});

			const { response } = await request(url, options);
			if (response && response.ok) {
				userLogin(username.value, password.value);
			}
		} catch (error) {
		} finally {
		}
	}

	return (
		<section className={`animeLeft`}>
			<h1 className="title">Cadastre-se</h1>
			<form onSubmit={createNewUser}>
				<Input
					label="Usuário"
					type="text"
					name="username"
					{...username}
				/>
				<Input label="E-mail" type="email" name="email" {...email} />
				<Input
					label="Senha"
					type="password"
					name="password"
					{...password}
				/>

				{loading ? (
					<Button disabled>Cadastrando...</Button>
				) : (
					<Button>Cadastrar</Button>
				)}
				<Error error={error} />
			</form>
		</section>
	);
}
