import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/user-context';
import { Feed } from '../../icons/feed';
import { Statistics } from '../../icons/statistics';
import { Add } from '../../icons/add';
import { Leave } from '../../icons/leave';
import styles from './user-headernav.module.css';

export function UserHeaderNav() {
	const [mobile, setMobile] = useState(null);

	const { userLogout } = useContext(UserContext);
	return (
		<nav className={styles.nav}>
			<NavLink to="/account" end>
				<Feed />
				{mobile && 'Minhas fotos'}
			</NavLink>
			<NavLink to="/account/statistics">
				<Statistics />
				{mobile && 'Minhas estatísticas'}
			</NavLink>
			<NavLink to="/account/post">
				<Add />
				{mobile && 'Adicionar foto'}
			</NavLink>
			<button onClick={userLogout}>
				<Leave />
				{mobile && 'Sair'}
			</button>
		</nav>
	);
}
