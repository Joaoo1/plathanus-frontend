interface BaseEntity {
	id: string;
	createdAt: string;
}

export interface User extends BaseEntity {
	name: string;
	email: string;
	passwordHash: string;
}

export interface News extends BaseEntity {
	title: string;
	slug: string;
	content: string;
	authorId: string;
}

export interface NewsWithAuthor extends News {
	authorName: string;
}

export interface DefaultApiError {
	message: string;
}
