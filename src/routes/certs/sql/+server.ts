import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const CERTIFICATE_URL =
	'https://www.freecodecamp.org/certification/dm_friends/relational-databases-v9';

export const GET: RequestHandler = () => {
	throw redirect(308, CERTIFICATE_URL);
};
