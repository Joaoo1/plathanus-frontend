import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { TextInput } from '../../../../../components/TextInput';
import { useDebounce } from '../../../../../hooks/useDebounce';

export const SearchContainer: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [searchQuery, setSearchQuery] = useState(
		searchParams.get('search') || ''
	);

	const debouncedSearchQuery = useDebounce(searchQuery, 500);

	useEffect(() => {
		if (debouncedSearchQuery) {
			setSearchParams({ search: debouncedSearchQuery });
		} else {
			setSearchParams({});
		}
	}, [debouncedSearchQuery, setSearchParams]);

	return (
		<Flex justifyContent="center">
			<TextInput
				flex="1"
				placeholder="Pesquisar notícias"
				onChange={e => setSearchQuery(e.currentTarget.value)}
				maxW="500px"
			/>
		</Flex>
	);
};
