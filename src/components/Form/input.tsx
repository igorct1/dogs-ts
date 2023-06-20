import styles from './input.module.css';

interface InputProps {
	label: string;
	type: string;
	name: string;
}

export function Input({ label, type, name }: InputProps) {
	return (
		<div className={styles.wrapper}>
			<label htmlFor={name} className={styles.label}>
				{label}
			</label>
			<input id={name} name={name} className={styles.input} type={type} />
			<p className={styles.error}>Error</p>
		</div>
	);
}
