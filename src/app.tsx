import './app.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Home } from './components/home';
import { Login } from './components/Login/login';
import { UserStorage } from '../src/contexts/user-context';
import { User } from './components/User/user';
import { ProtectedRoute } from './components/Helpers/protected-route';
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
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	);
}
