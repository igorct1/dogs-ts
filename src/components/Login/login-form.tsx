import { useForm } from '../../hooks/useForm';
import { Button } from '../Form/button';
import { Input } from '../Form/input';

export function LoginForm() {
	const username = useForm('email');
	const password = useForm();

	function handleLogin(event: React.FormEvent) {
		event.preventDefault();
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
