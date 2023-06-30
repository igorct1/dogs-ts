import { useEffect } from 'react';

interface HeadProps {
	title: string;
	description?: string;
}

export function Head(props: HeadProps) {
	useEffect(() => {
		document.title = 'Dogs | ' + props.title;

		document
			.querySelector('meta[name="description"]')
			?.setAttribute('content', props.description || '');
	}, [props]);
	return <></>;
}
