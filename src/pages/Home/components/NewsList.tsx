import { Grid, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router';
import { Loading } from '../../../components/Loading';
import { useFetchNews } from '../../../hooks/api/useFetchNews';
import { useAuth } from '../../../hooks/context/useAuth';
import { NewsItem } from './NewsItem';

export const NewsList: React.FC = () => {
	const { isAuthenticated } = useAuth();
	const [searchParams] = useSearchParams();
	const search = searchParams.get('search') || '';
	const { data: news = [], isLoading, error } = useFetchNews({ search });

	const renderList = () => {
		if (isLoading) {
			return <Loading />;
		}

		if (error) {
			return (
				<Text textAlign="center" fontSize="2xl" w="100%" mt="10">
					Ocorreu um erro ao buscar notícias.
				</Text>
			);
		}

		if (news.length === 0) {
			return (
				<Text textAlign="center" fontSize="2xl" w="100%" mt="10">
					Nenhum notícia encontrada.
				</Text>
			);
		}

		return news.map(item => <NewsItem key={item.id} news={item} />);
	};

	return (
		<Grid
			gap="4"
			gridTemplateColumns={{
				base: 'repeat(auto-fit, minmax(350px, 1fr))',
				md: 'repeat(auto-fit, minmax(550px, 1fr))',
			}}
			mt={{ base: isAuthenticated ? '150px' : '100px', sm: '100px' }}
			px="6"
			pb="10"
		>
			{renderList()}
		</Grid>
	);
};
