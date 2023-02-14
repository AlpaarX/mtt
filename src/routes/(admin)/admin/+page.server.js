import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
	const session = await locals.validate();
	if (session) {
		throw redirect(303, '/admin/dashboard')
	}
    else throw redirect(303, '/')
};