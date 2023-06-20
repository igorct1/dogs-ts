import { FormEvent, useState } from 'react';

export interface TargetProps {
	target: HTMLInputElement;
}

const types = {
	email: {
		regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		message: 'Preencha um e-mail válido!',
	},
};

export function useForm(type?: 'email') {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	function onChange(event: FormEvent) {
		const target = event.target;
		if (target instanceof HTMLInputElement) {
			if (error) {
				validate(target.value);
			}
			setValue(target.value);
		}
	}

	function validate(value: string) {
		if (value.length === 0) {
			setError('Preencha um valor.');
			return false;
		} else if (type && types[type] && !types[type].regex.test(value)) {
			setError(types[type].message);
			return false;
		} else {
			setError('');
			return true;
		}
	}
	return {
		value,
		error,
		setValue,
		onChange,
		validate: () => validate(value),
		onBlur: () => validate(value),
	};
}
