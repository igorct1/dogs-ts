import { ReactNode, useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
	children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { login } = useContext(UserContext);

	if (login) return children;
	else if (!login) return <Navigate to="login" />;
	else return <></>;
}
