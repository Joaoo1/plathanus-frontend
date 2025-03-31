import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { News } from '../../interfaces';
import { api } from '../../services/api';

interface CreateNewsParams {
	title: string;
	content: string;
}

export const useCreateNews = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data: CreateNewsParams) => {
			const response = await api.post<News>('/news', data);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: query => query.queryKey[0] === 'news',
			});
		},
	});
};
