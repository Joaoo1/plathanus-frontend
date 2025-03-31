import { Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useAuth } from '../../../../../hooks/context/useAuth';
import { CreateNewsModal } from './CreateNewsModal';

export const RightContainer: React.FC = () => {
	const { user, signOut, isAuthenticated } = useAuth();

	const [showCreateModal, setShowCreateModal] = useState(false);

	if (!isAuthenticated) {
		return <div />;
	}

	return (
		<Flex gap="2" justifyContent="flex-end">
			{showCreateModal && (
				<CreateNewsModal onClose={() => setShowCreateModal(false)} />
			)}

			<Flex>
				<Flex
					flexDirection="column"
					alignItems="flex-end"
					justifyContent="center"
					pr="2"
					pt="1"
				>
					<Text
						fontWeight="bold"
						lineHeight="1"
						overflow="hidden"
						whiteSpace="nowrap"
						fontSize={{ base: 'sm', lg: 'md' }}
					>
						{user?.name}
					</Text>
					<Text
						fontSize="sm"
						color="gray.200"
						display={{ base: 'block', sm: 'none', md: 'none', lg: 'block' }}
					>
						{user?.email}
					</Text>
				</Flex>
			</Flex>

			<Button
				aria-label="Sair"
				colorScheme="brand"
				title="Sair"
				onClick={() => setShowCreateModal(true)}
			>
				Adicionar
			</Button>

			<Button
				aria-label="Sair"
				colorScheme="brand"
				title="Sair"
				variant="outline"
				onClick={signOut}
			>
				Sair
			</Button>
		</Flex>
	);
};
