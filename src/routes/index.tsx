import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { RouteWrapper } from './RouteWrapper';

export const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route
				path="/sign-in"
				element={
					<RouteWrapper isSignInPage>
						<SignIn />
					</RouteWrapper>
				}
			/>

			<Route
				path="/"
				element={
					<RouteWrapper>
						<Home />
					</RouteWrapper>
				}
			/>
		</Routes>
	</BrowserRouter>
);
