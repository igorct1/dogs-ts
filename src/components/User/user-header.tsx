import { UserHeaderNav } from './user-headernav';
import styles from './user-header.module.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function UserHeader() {
	const [title, setTitle] = useState('');

	const { pathname } = useLocation();

	useEffect(() => {
		const title = pathname.replace('/account/', '');

		switch (title) {
			case 'statistics':
				setTitle('Estatísticas');
				break;
			case 'post':
				setTitle('Poste sua foto');
				break;
			default:
				setTitle('Minha conta');
		}
	}, [pathname]);

	return (
		<header className={styles.header}>
			<h1 className="title">{title}</h1>
			<UserHeaderNav />
		</header>
	);
}
