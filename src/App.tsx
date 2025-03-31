import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import localforage from 'localforage';
import { Router } from './Router';
import theme from './styles/theme';

localforage.config({
	name: 'Plathanus frontend',
	version: 1.0,
});

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<Router />
			</ChakraProvider>
		</QueryClientProvider>
	);
}
