import { Box, Heading, Text } from '@chakra-ui/react';
import type { News } from '../../../interfaces';

interface NewsItemProps {
	news: News;
}

export const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
	return (
		<Box p="4" borderWidth="1px" borderRadius="md" minW="200px" maxW="400px">
			<Heading fontWeight="bold" fontSize="lg">
				{news.title}
			</Heading>

			<Text mt="2">{news.content}</Text>
		</Box>
	);
};
