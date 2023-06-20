import './app.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Home } from './components/home';
import { Login } from './components/Login/login';
export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login/*" element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}
