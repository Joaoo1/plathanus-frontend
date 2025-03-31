import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import localforage from 'localforage';
import { ToastContainer } from 'react-toastify';
import { Router } from './Router';
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
				<Router />
			</ChakraProvider>
		</QueryClientProvider>
	);
}
