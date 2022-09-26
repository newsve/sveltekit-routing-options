import { GET } from './+server';

export async function load() {
	const res = await GET();
	return await res.json();
}
