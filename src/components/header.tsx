import styles from './header.module.css';
import { Link } from 'react-router-dom';
export function Header() {
	return (
		<header className={styles.header}>
			<nav className="container">
				<Link to="/">Home</Link>
				<Link to="/login">Login / Criar</Link>
			</nav>
		</header>
	);
}
