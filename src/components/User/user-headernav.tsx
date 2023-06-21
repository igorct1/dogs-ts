import { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/user-context';
import { Feed } from '../../icons/feed';
import { Statistics } from '../../icons/statistics';
import { Add } from '../../icons/add';
import { Leave } from '../../icons/leave';
import styles from './user-headernav.module.css';

import { useWindowSize } from 'usehooks-ts';
import { List, DotsThree } from '@phosphor-icons/react';

export function UserHeaderNav() {
	const [mobile, setMobile] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const { userLogout } = useContext(UserContext);
	const { width } = useWindowSize();
	const { pathname } = useLocation();

	useEffect(() => {
		if (width <= 700) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	}, [width]);

	useEffect(() => {
		setMobileMenu(false);
	}, [pathname]);

	return (
		<>
			{mobile && (
				<button
					className={styles.mobileButton}
					aria-label="Menu"
					onClick={() => setMobileMenu((prev) => !prev)}
				>
					{mobileMenu ? (
						<DotsThree
							size={24}
							className={styles.menuMobileActive}
						/>
					) : (
						<List size={24} />
					)}
				</button>
			)}
			<nav
				className={`${mobile ? styles.navMobile : styles.nav} ${
					mobileMenu && styles.navMobileActive
				}`}
			>
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
		</>
	);
}
