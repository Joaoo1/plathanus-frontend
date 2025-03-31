import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';

export const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-in" element={<SignIn />} />
		</Routes>
	</BrowserRouter>
);
