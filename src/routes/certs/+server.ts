import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Temporary so a real certs index page can replace this later without
// fighting browsers that cached a permanent redirect.
export const GET: RequestHandler = () => {
	throw redirect(302, '/');
};
