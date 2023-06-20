import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './login-form';
import { LoginCreate } from './login-create';
import { LoginPasswordLost } from './login-password-lost';
import { LoginPasswordReset } from './login-password-reset';

export function Login() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginForm />} />
				<Route path="create" element={<LoginCreate />} />
				<Route path="lost" element={<LoginPasswordLost />} />
				<Route path="reset" element={<LoginPasswordReset />} />
			</Routes>
		</div>
	);
}
