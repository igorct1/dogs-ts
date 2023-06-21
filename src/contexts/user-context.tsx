import { ReactNode, createContext, useEffect, useState } from 'react';
import { User } from '../types/User';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/api';
import { useNavigate } from 'react-router-dom';

interface UserContextProps {
	userLogin: (username: string, password: string) => void;
	userLogout: () => void;
	data: User;
	error: string;
	login: boolean;
	loading: boolean;
}

interface UserStorageProps {
	children: ReactNode;
}

export const UserContext = createContext({} as UserContextProps);

export function UserStorage({ children }: UserStorageProps) {
	const [data, setData] = useState<User>({} as User);
	const [login, setLogin] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		async function autoLogin() {
			const token = localStorage.getItem('token');

			if (token) {
				try {
					setError('');
					setLoading(true);
					const { url, options } = TOKEN_VALIDATE_POST(token);
					const res = await fetch(url, options);
					if (!res.ok) {
						throw new Error('Token inválido!');
					}
					// const json = await res.json();

					await getUser(token);
				} catch (error) {
					userLogout();
				} finally {
					setLoading(false);
				}
			} else {
				setLogin(false);
			}
		}

		autoLogin();
	}, []);

	async function userLogout() {
		setData({} as User);
		setError('');
		setLoading(false);
		setLogin(false);
		localStorage.removeItem('token');
		navigate('/');
	}

	async function getUser(token: string) {
		const { url, options } = USER_GET(token);
		const response = await fetch(url, options);
		const json = await response.json();

		setData(json);
		setLogin(true);
	}

	async function userLogin(username: string, password: string) {
		try {
			setError('');
			setLoading(true);
			const { url, options } = TOKEN_POST({ username, password });
			const response = await fetch(url, options);

			if (!response.ok)
				throw new Error('Erro: Usuário ou senha inválido!');

			const { token } = await response.json();
			localStorage.setItem('token', token);

			getUser(token);
			navigate('/account');
		} catch (error) {
			if (error && error instanceof Error) {
				setError(error.message);
				setLogin(false);
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<UserContext.Provider
			value={{ userLogin, userLogout, data, error, loading, login }}
		>
			{children}
		</UserContext.Provider>
	);
}
