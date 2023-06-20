import { Button } from '../Form/button';
import { Input } from '../Form/input';

export function LoginForm() {
	function handleLogin(event: React.FormEvent) {
		console.log(event);
	}

	return (
		<section>
			<h1>Login</h1>
			<form action="" onSubmit={handleLogin}>
				<Input label="Usuário" type="text" name="username" />
				<Input label="Senha" type="password" name="password" />
				<Button>Entrar</Button>
			</form>
		</section>
	);
}
