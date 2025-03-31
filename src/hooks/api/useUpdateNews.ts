import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { News } from '../../interfaces';
import { api } from '../../services/api';

interface UpdateNewsParams {
	id: string;
	data: Partial<News>;
}

export const useUpdateNews = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, data }: UpdateNewsParams) => {
			const response = await api.put(`/news/${id}`, data);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: query => query.queryKey[0] === 'news',
			});
		},
	});
};
