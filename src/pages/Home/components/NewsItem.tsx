import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { useDeleteNews } from '../../../hooks/api/useDeleteNews';
import { useAuth } from '../../../hooks/context/useAuth';
import type { News } from '../../../interfaces';

interface NewsItemProps {
	news: News;
}

export const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
	const { isAuthenticated } = useAuth();

	const { mutate: deleteNews, isPending: isLoading } = useDeleteNews();

	const handleDelete = () => {
		deleteNews(news.id, {
			onSuccess: () => {
				toast.success('Notícia excluída com sucesso.');
			},
			onError: () => {
				toast.error('Erro ao excluir notícia.');
			},
		});
	};

	return (
		<Flex p="4" borderWidth="1px" borderRadius="md" minW="200px" maxW="400px">
			<Box>
				<Heading fontWeight="bold" fontSize="lg">
					{news.title}
				</Heading>

				<Text mt="2">{news.content}</Text>
			</Box>

			{isAuthenticated && (
				<Box>
					<IconButton
						aria-label="Excluir"
						icon={<DeleteIcon />}
						colorScheme="red"
						variant="outline"
						isLoading={isLoading}
						onClick={handleDelete}
					/>
				</Box>
			)}
		</Flex>
	);
};
