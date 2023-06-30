import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './login-form';
import { LoginCreate } from './login-create';
import { LoginPasswordLost } from './login-password-lost';
import { LoginPasswordReset } from './login-password-reset';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';

import styles from './login.module.css';
import { NotFound } from '../not-found';

export function Login() {
	const { login } = useContext(UserContext);

	if (login) return <Navigate to="/account" />;
	return (
		<section className={styles.login}>
			<div className={styles.forms}>
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="/create" element={<LoginCreate />} />
					<Route path="/lost" element={<LoginPasswordLost />} />
					<Route path="/reset" element={<LoginPasswordReset />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</section>
	);
}
