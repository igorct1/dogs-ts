import { FormEvent } from 'react';
import styles from './input.module.css';

interface InputProps {
	label: string;
	type: string;
	name: string;
	value: string;
	error: string;
	onBlur: () => boolean;
	onChange: (event: FormEvent) => void;
}

export function Input({
	label,
	type,
	name,
	value,
	error,
	onChange,
	onBlur,
}: InputProps) {
	return (
		<div className={styles.wrapper}>
			<label htmlFor={name} className={styles.label}>
				{label}
			</label>
			<input
				id={name}
				name={name}
				className={styles.input}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <p className={styles.error}>{error}</p>}
		</div>
	);
}
