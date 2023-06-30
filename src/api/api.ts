export const API_URL = 'https://dogsapi.origamid.dev/json';

interface TokenPostProps {
	username: string;
	password: string;
}

export function TOKEN_POST(body: TokenPostProps) {
	return {
		url: API_URL + '/jwt-auth/v1/token',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
	};
}

export function TOKEN_VALIDATE_POST(token: string) {
	return {
		url: API_URL + '/jwt-auth/v1/token/validate',
		options: {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		},
	};
}

export function USER_GET(token: string) {
	return {
		url: API_URL + '/api/user',
		options: {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		},
	};
}

interface UserPostProps extends TokenPostProps {
	email: string;
}

export function USER_POST(body: UserPostProps) {
	return {
		url: API_URL + '/api/user',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
	};
}

export function PHOTO_POST(formData: FormData, token: string) {
	return {
		url: API_URL + '/api/photo',
		options: {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
			},
			body: formData,
		},
	};
}

interface PhotosGetPost {
	page: number;
	total: number;
	user: string;
}

export function PHOTOS_GET({ page, total, user }: PhotosGetPost) {
	return {
		url:
			API_URL + `/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
		options: {
			method: 'GET',
			cache: 'no-store',
		},
	};
}

export function PHOTO_GET(id: number | string) {
	return {
		url: `${API_URL}/api/photo/${id}`,
		options: {
			method: 'GET',
			cache: 'no-store',
		},
	};
}

export function COMMENT_POST(id: number, body: { comment: string }) {
	return {
		url: `${API_URL}/api/comment/${id}`,
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(body),
		},
	};
}

export function PHOTO_DELETE(id: number) {
	return {
		url: API_URL + `/api/photo/${id}`,
		options: {
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		},
	};
}

interface PasswordLostProps {
	login: string;
	url: string;
}

export function PASSWORD_LOST(body: PasswordLostProps) {
	return {
		url: API_URL + '/api/password/lost',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
	};
}

interface PasswordResetProps {
	login: string;
	key: string;
	password: string;
}

export function PASSWORD_RESET(body: PasswordResetProps) {
	return {
		url: API_URL + '/api/password/reset',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
	};
}
