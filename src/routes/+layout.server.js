import { prisma } from '$lib/server/prisma';

export const load = async ({ locals }) => {
	const {user , session} = await locals.validateUser();
	const articles = await prisma.article.findMany();

	return {
		user,
		articles
	};
};
