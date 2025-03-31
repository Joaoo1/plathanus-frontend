interface BaseEntity {
	id: string;
	createdAt: string;
}

export interface User extends BaseEntity {
	name: string;
	email: string;
	passwordHash: string;
}

export interface DefaultApiError {
	message: string;
}
