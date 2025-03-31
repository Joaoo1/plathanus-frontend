import { Flex, Grid, Heading } from '@chakra-ui/react';
import { Sizes } from '../../../../styles/sizes';
import { RightContainer } from './components/RightContainer';
import { SearchContainer } from './components/SearchContainer';
import { useIsShrunken } from './hooks/useIsShrunken';

export const Header: React.FC = () => {
	const isShrunken = useIsShrunken();

	const headerHeight = isShrunken
		? Sizes.ShrunkenHeaderHeight
		: Sizes.FullHeaderHeight;

	return (
		<Flex
			as="header"
			bg="gray.600"
			borderBottom="1px solid"
			borderColor="gray.500"
			position="fixed"
			width="100vw"
			minH={`${headerHeight}px`}
			zIndex={2}
			boxShadow="0px 5px 10px 1px rgba(0,0,0,0.3)"
			transition="0.4s"
			py="2"
		>
			<Grid
				gridTemplateColumns={{ base: '1fr', sm: '1fr auto', md: '1fr 3fr 1fr' }}
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

				<SearchContainer />

				<RightContainer />
			</Grid>
		</Flex>
	);
};
