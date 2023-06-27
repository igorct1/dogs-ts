import { useCallback, useState } from 'react';

export function useFetch<T>() {
	const [data, setData] = useState<T>([] as T);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const request = useCallback(async (url: string, options: {}) => {
		let response;
		let json;
		try {
			setError('');
			setLoading(true);
			response = await fetch(url, options);
			json = await response.json();
			if (!response.ok) throw new Error(json.message);
		} catch (err) {
			if (err instanceof Error) {
				json = '';
				setError(err.message);
			}
		} finally {
			setData(json);
			setLoading(false);
			return { response, json };
		}
	}, []);

	return {
		data,
		error,
		loading,
		request,
	};
}
