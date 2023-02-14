import { auth } from "$lib/server/lucia"
import { fail, redirect } from "@sveltejs/kit"

export const load = async ({ locals }) => {
	const session = await locals.validate()
	if (session) {
		throw redirect(302, "/")
	}
}

export const actions = {
	default: async ({ request, locals }) => {
		const { username, password } = Object.fromEntries(
			await request.formData(),
		)

		try {
			const key = await auth.validateKeyPassword("username", username, password)
			const session = await auth.createSession(key.userId)
			locals.setSession(session)
		} catch (err) {
			console.error(err)
			return fail(400, { message: "Could not login user." })
		}
		throw redirect(302, "/admin/dashboard")
	},
}