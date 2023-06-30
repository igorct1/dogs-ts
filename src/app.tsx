import './app.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Home } from './components/home';
import { Login } from './components/Login/login';
import { UserStorage } from '../src/contexts/user-context';
import { User } from './components/User/user';
import { ProtectedRoute } from './components/Helpers/protected-route';
import { Photo } from './components/Photo/photo';
import { UserProfile } from './components/User/user-profile';
import { NotFound } from './components/not-found';

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login/*" element={<Login />} />
						<Route
							path="/account/*"
							element={
								<ProtectedRoute>
									<User />
								</ProtectedRoute>
							}
						/>
						<Route path="/photo/:id" element={<Photo />} />
						<Route
							path="/profile/:user"
							element={<UserProfile />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	);
}
