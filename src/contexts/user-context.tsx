import { ReactNode, createContext, useState } from 'react';
import { User } from '../types/User';
import { TOKEN_POST, USER_GET } from '../api/api';

interface UserContextProps {
	userLogin: (username: string, password: string) => void;
	data: User;
}

interface UserStorageProps {
	children: ReactNode;
}

export const UserContext = createContext({} as UserContextProps);

export function UserStorage({ children }: UserStorageProps) {
	const [data, setData] = useState<User>({} as User);
	const [login, setLogin] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	async function getUser(token: string) {
		const { url, options } = USER_GET(token);
		const response = await fetch(url, options);
		const json = await response.json();

		setData(json);
		setLogin(true);
		console.log(json);
	}

	async function userLogin(username: string, password: string) {
		const { url, options } = TOKEN_POST({ username, password });
		const response = await fetch(url, options);
		const { token } = await response.json();

		localStorage.setItem('token', token);

		getUser(token);
	}

	return (
		<UserContext.Provider value={{ userLogin, data }}>
			{children}
		</UserContext.Provider>
	);
}
