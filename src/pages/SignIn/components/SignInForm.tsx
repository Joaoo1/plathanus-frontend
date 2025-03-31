import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TextInput } from '../../../components/TextInput';
import { useAuth } from '../../../hooks/context/useAuth';

const signInFormSchema = z.object({
	email: z
		.string()
		.email('Deve ser um e-mail válido')
		.min(1, { message: 'Este campo é obrigatório' }),
	password: z.string().min(1, { message: 'Este campo é obrigatório' }),
});

type ILoginFormData = z.infer<typeof signInFormSchema>;

const Label: React.FC<PropsWithChildren> = ({ children }) => (
	<Text as="label" fontSize="sm" display="flex" flexDirection="column" gap={1}>
		{children}
	</Text>
);

export const SignInForm: React.FC = () => {
	const { signIn, isAuthenticating } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ILoginFormData>({
		resolver: zodResolver(signInFormSchema, { async: false }),
	});

	return (
		<Flex
			as="form"
			mt={6}
			flexDirection="column"
			gap={5}
			onSubmit={handleSubmit(signIn)}
		>
			<Label>
				<Text pb="6px" size="sm">
					Email
				</Text>
				<TextInput
					isRequired
					type="email"
					placeholder="Digite seu email"
					{...register('email')}
				/>

				{errors.email && (
					<Text color="red" size="sm">
						{errors.email.message}
					</Text>
				)}
			</Label>

			<Label>
				<Text pb="6px" size="sm">
					Senha
				</Text>
				<TextInput
					isRequired
					placeholder="Digite sua senha"
					type="password"
					{...register('password')}
				/>

				{errors.password && (
					<Text color="red" size="sm">
						{errors.password.message}
					</Text>
				)}
			</Label>

			<Button
				colorScheme="brand"
				gap="1"
				display="flex"
				alignItems="center"
				type="submit"
				fontSize="sm"
				disabled={isSubmitting}
				isLoading={isAuthenticating}
				loadingText="Entrando..."
			>
				<Text>Fazer login</Text>
				<ArrowForwardIcon />
			</Button>
		</Flex>
	);
};
