import styles from './button.module.css';
import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
}
