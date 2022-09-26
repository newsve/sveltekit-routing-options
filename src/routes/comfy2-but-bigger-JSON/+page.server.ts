import { GET } from './+server';

export async function load() {
	const res = await GET();
	console.time('res.json()');
	const resAsJSON = await res.json();
	console.timeEnd('res.json()');
	console.time('devalue');
	return resAsJSON;
}
