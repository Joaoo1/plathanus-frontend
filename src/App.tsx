import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import localforage from 'localforage';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import { Router } from './routes';
import theme from './styles/theme';
import { toastStyles } from './styles/toast';

localforage.config({
	name: 'Plathanus frontend',
	version: 1.0,
});

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ToastContainer
				theme="dark"
				autoClose={3000}
				position="bottom-center"
				toastStyle={toastStyles}
			/>

			<ChakraProvider theme={theme}>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</ChakraProvider>
		</QueryClientProvider>
	);
}
