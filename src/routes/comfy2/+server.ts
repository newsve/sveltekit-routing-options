export async function GET() {
	const keyboard = {
		name: 'Hunstman Mini',
		layout: '60%'
	};

	return new Response(JSON.stringify(keyboard));
}
