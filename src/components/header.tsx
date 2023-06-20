import { Dogs } from '../icons/dogs';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<Link to="/" aria-label="Dogs - Home" className={styles.logo}>
					<Dogs />
				</Link>
				<Link to="/login" className={styles.login}>
					Login / Criar
				</Link>
			</nav>
		</header>
	);
}
