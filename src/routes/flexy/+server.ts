export function GET() {
	const phone = {
		name: 'Xiaomi F4 Pro',
		color: 'yellow',
		refreshRate: 120
	};

	return new Response(JSON.stringify(phone));
}
