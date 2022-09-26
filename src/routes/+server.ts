export function GET() {
	const mouse = {
		name: 'Starlight Pro TenZ',
		color: 'silver',
		weight: 42
	};

	return new Response(JSON.stringify(mouse));
}
