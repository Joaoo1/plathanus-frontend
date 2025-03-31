import { Button, Flex, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { BaseModal } from '../../../components/BaseModal';
import { Label } from '../../../components/Label';
import { TextInput } from '../../../components/TextInput';
import { useUpdateNews } from '../../../hooks/api/useUpdateNews';
import type { News } from '../../../interfaces';

interface UpdateNewsModalProps {
	onClose: () => void;
	news: News;
}

const updateNewsFormSchema = z.object({
	title: z.string().nonempty('Título é obrigatório'),
	content: z.string().nonempty('Conteúdo é obrigatório'),
});

type IUpdateNewsFormData = z.infer<typeof updateNewsFormSchema>;

export const UpdateNewsModal: React.FC<UpdateNewsModalProps> = ({
	onClose,
	news,
}) => {
	const { mutate: updateNews, isPending: isLoading } = useUpdateNews();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IUpdateNewsFormData>({
		resolver: zodResolver(updateNewsFormSchema),
		defaultValues: {
			content: news.content,
			title: news.title,
		},
	});

	const onSubmit = ({ content, title }: IUpdateNewsFormData) => {
		updateNews(
			{ id: news.id, data: { title, content } },
			{
				onSuccess: () => {
					toast.success('Notícia atualizada com sucesso!');
					onClose();
				},
				onError: () => {
					toast.error('Erro ao atualizar notícia!');
				},
			}
		);
	};

	return (
		<BaseModal show onClickOutside={onClose}>
			<Flex flexDirection="column" p="6" gap="4" w="90vw" maxW="800px">
				<Text fontSize="lg" fontWeight="bold">
					Atualizar notícia
				</Text>

				<Label>
					<Text pb="6px" size="sm">
						Título
					</Text>
					<TextInput
						isRequired
						type="text"
						placeholder="Digite o título"
						{...register('title')}
					/>

					{errors.title && (
						<Text color="red" size="sm">
							{errors.title.message}
						</Text>
					)}
				</Label>

				<Label>
					<Text pb="6px" size="sm">
						Conteúdo
					</Text>
					<TextInput
						as="textarea"
						isRequired
						placeholder="Digite o conteúdo da notícia"
						type="text"
						{...register('content')}
					/>

					{errors.content && (
						<Text color="red" size="sm">
							{errors.content.message}
						</Text>
					)}
				</Label>

				<Flex justifyContent="flex-end" gap="2">
					<Button onClick={onClose} variant="outline" colorScheme="red">
						Cancelar
					</Button>
					<Button
						colorScheme="brand"
						onClick={handleSubmit(onSubmit)}
						isLoading={isSubmitting || isLoading}
					>
						Salvar
					</Button>
				</Flex>
			</Flex>
		</BaseModal>
	);
};
