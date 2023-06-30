import { DogsFooter } from '../icons/dogs-footer';
import styles from './footer.module.css';

export function Footer() {
	return (
		<footer className={styles.footer}>
			<DogsFooter />
			<p>Dogs. Alguns direitos reservados.</p>
		</footer>
	);
}
