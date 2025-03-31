import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../services/api';

export const useDeleteNews = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newsId: string) => {
			await api.delete(`/news/${newsId}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: query => query.queryKey[0] === 'news',
			});
		},
	});
};
