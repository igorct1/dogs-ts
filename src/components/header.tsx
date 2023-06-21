import { Dogs } from '../icons/dogs';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/user-context';

export function Header() {
	const { data } = useContext(UserContext);

	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<Link to="/" aria-label="Dogs - Home" className={styles.logo}>
					<Dogs />
				</Link>
				{data.id ? (
					<div className={styles.loginDiv}>
						<Link to="/account" className={styles.login}>
							{data.nome}
						</Link>
					</div>
				) : (
					<Link to="/login" className={styles.login}>
						Login / Criar
					</Link>
				)}
			</nav>
		</header>
	);
}
