import styles from './button.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	);
}
