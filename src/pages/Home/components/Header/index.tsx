import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { TextInput } from '../../../../components/TextInput';
import { useAuth } from '../../../../hooks/context/useAuth';
import { useDebounce } from '../../../../hooks/useDebounce';
import { Sizes } from '../../../../styles/sizes';
import { CreateNewsModal } from '../CreateNewsModal';
import { useIsShrunken } from './hooks/useIsShrunken';

export const Header: React.FC = () => {
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const [searchQuery, setSearchQuery] = useState(
		searchParams.get('search') || ''
	);

	const debouncedSearchQuery = useDebounce(searchQuery, 500);

	const isShrunken = useIsShrunken();
	const { user, signOut, isAuthenticated } = useAuth();

	const headerHeight = isShrunken
		? Sizes.ShrunkenHeaderHeight
		: Sizes.FullHeaderHeight;

	useEffect(() => {
		if (debouncedSearchQuery) {
			setSearchParams({ search: debouncedSearchQuery });
		} else {
			setSearchParams({});
		}
	}, [debouncedSearchQuery, setSearchParams]);

	return (
		<Flex
			as="header"
			bg="gray.600"
			borderBottom="1px solid"
			borderColor="gray.500"
			position="fixed"
			width="100vw"
			height={`${headerHeight}px`}
			zIndex={2}
			boxShadow="0px 5px 10px 1px rgba(0,0,0,0.3)"
			transition="0.4s"
		>
			{showCreateModal && (
				<CreateNewsModal onClose={() => setShowCreateModal(false)} />
			)}

			<Grid
				gridTemplateColumns={{ base: '1fr auto', md: '1fr 3fr 1fr' }}
				alignItems="center"
				width="100%"
				margin="0 auto"
				justifyContent="space-between"
				paddingInline="4"
				gap="5"
			>
				<Heading size="md" display={{ base: 'none', md: 'block' }}>
					Portal de notícias
				</Heading>

				<Flex justifyContent="center">
					<TextInput
						flex="1"
						placeholder="Pesquisar notícias"
						onChange={e => setSearchQuery(e.currentTarget.value)}
						maxW="500px"
					/>
				</Flex>

				{isAuthenticated ? (
					<Flex gap="2">
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
									display={{ base: 'none', lg: 'block' }}
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
				) : (
					<div />
				)}
			</Grid>
		</Flex>
	);
};
