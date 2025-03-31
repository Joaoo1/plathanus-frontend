import { Flex } from '@chakra-ui/react';
import { Header } from './components/Header';
import { NewsList } from './components/NewsList';

export const Home: React.FC = () => {
	return (
		<Flex flexDir="column">
			<Header />

			<NewsList />
		</Flex>
	);
};
