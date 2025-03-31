import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ConfirmModal } from '../../../components/ConfirmModal';
import { useDeleteNews } from '../../../hooks/api/useDeleteNews';
import { useAuth } from '../../../hooks/context/useAuth';
import type { NewsWithAuthor } from '../../../interfaces';
import { formatDate } from '../../../utils/formatDate';
import { UpdateNewsModal } from './UpdateNewsModal';

interface NewsItemProps {
	news: NewsWithAuthor;
}

export const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
	const { isAuthenticated } = useAuth();

	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

	const { mutate: deleteNews, isPending: isDeleting } = useDeleteNews();

	const handleDelete = () => {
		deleteNews(news.id, {
			onSuccess: () => {
				toast.success('Notícia excluída com sucesso.');
				setShowConfirmDeleteModal(false);
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
			justifyContent="space-between"
			gap="2"
			overflow="hidden"
			bg="gray.800"
		>
			{showUpdateModal && (
				<UpdateNewsModal
					onClose={() => setShowUpdateModal(false)}
					news={news}
				/>
			)}

			{showConfirmDeleteModal && (
				<ConfirmModal
					title="Excluir notícia"
					description="Você tem certeza que deseja excluir esta notícia?"
					onConfirm={handleDelete}
					onClose={() => setShowConfirmDeleteModal(false)}
					isLoading={isDeleting}
				/>
			)}

			<Box>
				<Heading fontWeight="bold" fontSize="xl">
					{news.title}
				</Heading>

				<Text fontSize="sm" color="gray.500" mt="1">
					{news.authorName} • {formatDate(news.createdAt)}
				</Text>

				<Text mt="2">{news.content}</Text>
			</Box>

			{isAuthenticated && (
				<VStack>
					<IconButton
						aria-label="Editar"
						icon={<EditIcon />}
						colorScheme="brand"
						variant="outline"
						isLoading={isDeleting}
						onClick={handleUpdate}
					/>
					<IconButton
						aria-label="Excluir"
						icon={<DeleteIcon />}
						colorScheme="red"
						variant="outline"
						isLoading={isDeleting}
						onClick={() => setShowConfirmDeleteModal(true)}
					/>
				</VStack>
			)}
		</Flex>
	);
};
