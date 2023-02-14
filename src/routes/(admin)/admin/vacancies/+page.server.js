import { prisma } from '$lib/server/prisma';

export const actions = {
	createVacancy: async ({ request }) => {
		const { title, company, description, location } = Object.fromEntries(await request.formData());

		try {
			await prisma.vacancy.create({
				data: {
                    title,
                    company,
                    description,
                    location
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the vacancy.' });
		}

		return {
			status: 201
		};
	},
	deleteVacancy: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prisma.vacancy.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'Something went wrong deleting the vacancy'
			});
		}

		return {
			status: 200
		};
	}
};
