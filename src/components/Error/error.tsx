interface ErrorProps {
	error: string;
}

export function Error({ error }: ErrorProps) {
	if (!error) return null;

	return <p className="error">{error}</p>;
}
