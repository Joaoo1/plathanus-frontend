import { useQuery } from '@tanstack/react-query';

import type { NewsWithAuthor } from '../../interfaces';
import { api } from '../../services/api';

interface FetchNewsProps {
	search?: string;
}

export const useFetchNews = (props: FetchNewsProps) => {
	async function handler() {
		const { search } = props || {};
		const { data } = await api.get<NewsWithAuthor[]>('/news', {
			params: { search },
		});

		return data;
	}

	const query = useQuery({
		queryFn: handler,
		queryKey: ['news', props.search],
	});

	return query;
};
