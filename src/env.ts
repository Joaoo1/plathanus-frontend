export const Env = {
	API_URL: import.meta.env.PROD
		? 'https://api-plathanus.utamo.com.br/api'
		: 'http://localhost:3333/api',
};
