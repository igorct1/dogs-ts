import { FormEvent } from 'react';

import { useForm } from '../../hooks/useForm';
import { Button } from '../Form/button';
import { Input } from '../Form/input';
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';
import { Error } from '../Error/error';
import { Link } from 'react-router-dom';

import styles from './login-form.module.css';
import stylesBtn from '../Form/button.module.css';
import { Head } from '../Helpers/head';

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
		<section className="animeLeft">
			<Head title="Login" />
			<h1 className="title">Login</h1>
			<form className={styles.form} onSubmit={handleLogin}>
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
				{error && <Error error={error} />}
			</form>
			<Link className={styles.lost} to="/login/lost">
				Perdeu a senha?
			</Link>
			<div className={styles.signIn}>
				<h2 className={styles.subtitle}>Cadastre-se</h2>
				<p>Ainda não possui conta? Cadastre-se no site.</p>
				<Link className={stylesBtn.button} to="/login/create">
					Cadastro
				</Link>
			</div>
		</section>
	);
}
