import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDeleteNews } from '../../../hooks/api/useDeleteNews';
import { useAuth } from '../../../hooks/context/useAuth';
import type { News } from '../../../interfaces';
import { UpdateNewsModal } from './UpdateNewsModal';

interface NewsItemProps {
	news: News;
}

export const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
	const { isAuthenticated } = useAuth();

	const [showUpdateModal, setShowUpdateModal] = useState(false);

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

	const handleUpdate = () => {
		setShowUpdateModal(true);
	};

	return (
		<Flex
			p="4"
			borderWidth="1px"
			borderRadius="md"
			minW="200px"
			maxW="400px"
			justifyContent="space-between"
			gap="2"
			overflow="hidden"
		>
			{showUpdateModal && (
				<UpdateNewsModal
					onClose={() => setShowUpdateModal(false)}
					news={news}
				/>
			)}

			<Box>
				<Heading fontWeight="bold" fontSize="lg">
					{news.title}
				</Heading>

				<Text mt="2">{news.content}</Text>
			</Box>

			{isAuthenticated && (
				<VStack>
					<IconButton
						aria-label="Editar"
						icon={<EditIcon />}
						colorScheme="brand"
						variant="outline"
						isLoading={isLoading}
						onClick={handleUpdate}
					/>
					<IconButton
						aria-label="Excluir"
						icon={<DeleteIcon />}
						colorScheme="red"
						variant="outline"
						isLoading={isLoading}
						onClick={handleDelete}
					/>
				</VStack>
			)}
		</Flex>
	);
};
