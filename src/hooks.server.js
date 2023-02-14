import { handleHooks } from "@lucia-auth/sveltekit"
import { auth } from "$lib/server/lucia"
import { sequence } from "@sveltejs/kit/hooks"

export const customHandle = async ({resolve, event}) => {
    return resolve(event)
}

export const handle = sequence(handleHooks(auth), customHandle)
