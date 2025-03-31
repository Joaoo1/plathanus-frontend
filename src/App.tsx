import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './Router';
import theme from './styles/theme';

export function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router />
		</ChakraProvider>
	);
}
