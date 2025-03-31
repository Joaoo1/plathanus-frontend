import { Flex, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router';
import { Loading } from '../../../components/Loading';
import { useFetchNews } from '../../../hooks/api/useFetchNews';
import { NewsItem } from './NewsItem';

export const NewsList: React.FC = () => {
	const [searchParams] = useSearchParams();
	const search = searchParams.get('search') || '';
	const { data: news = [], isLoading, error } = useFetchNews({ search });

	const renderList = () => {
		if (isLoading) {
			return <Loading />;
		}

		if (error) {
			return (
				<Text textAlign="center" fontSize="2xl" w="100%">
					Ocorreu um erro ao buscar notícias.
				</Text>
			);
		}

		if (news.length === 0) {
			return (
				<Text textAlign="center" fontSize="2xl" w="100%">
					Nenhum notícia encontrada.
				</Text>
			);
		}

		return news.map(item => <NewsItem key={item.id} news={item} />);
	};

	return (
		<Flex
			gap="4"
			mt="100px"
			px="6"
			pb="10"
			justifyContent="center"
			flexWrap="wrap"
		>
			{renderList()}
		</Flex>
	);
};
