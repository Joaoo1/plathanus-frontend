import { Button, Flex, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { BaseModal } from '../../../../../components/BaseModal';
import { Label } from '../../../../../components/Label';
import { TextInput } from '../../../../../components/TextInput';
import { useCreateNews } from '../../../../../hooks/api/useCreateNews';

interface CreateNewsModalProps {
	onClose: () => void;
}

const CreateNewsFormSchema = z.object({
	title: z.string().nonempty('Título é obrigatório'),
	content: z.string().nonempty('Conteúdo é obrigatório'),
});

type ICreateNewsFormData = z.infer<typeof CreateNewsFormSchema>;

export const CreateNewsModal: React.FC<CreateNewsModalProps> = ({
	onClose,
}) => {
	const { mutate: CreateNews, isPending: isLoading } = useCreateNews();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ICreateNewsFormData>({
		resolver: zodResolver(CreateNewsFormSchema),
	});

	const onSubmit = ({ content, title }: ICreateNewsFormData) => {
		CreateNews(
			{ title, content },
			{
				onSuccess: () => {
					toast.success('Notícia criada com sucesso!');
					onClose();
				},
				onError: () => {
					toast.error('Erro ao adicionar notícia!');
				},
			}
		);
	};

	return (
		<BaseModal show onClickOutside={onClose}>
			<Flex flexDirection="column" p="6" gap="4" w="90vw" maxW="800px">
				<Text fontSize="lg" fontWeight="bold">
					Adicionar notícia
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
