export async function load() {
	const res = await fetch('/flexy', { headers: { accept: 'application/json' } });
	return await res.json();
}
