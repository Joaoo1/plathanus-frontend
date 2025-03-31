import { Box, Flex, Heading } from '@chakra-ui/react';
import { SignInForm } from './components/SignInForm';

export const SignIn: React.FC = () => {
	return (
		<Flex alignItems={'center'} justifyContent="center" height="100vh">
			<Box
				bg="gray.800"
				borderRadius="8px"
				padding="10"
				border="1px solid"
				borderColor="gray.600"
			>
				<Heading size="lg" mb="10">
					Plathanus - Portal de notícias
				</Heading>

				<SignInForm />
			</Box>
		</Flex>
	);
};
