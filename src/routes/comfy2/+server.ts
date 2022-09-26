export async function GET() {
	const keyboard = {
		name: 'Huntsman Mini',
		layout: '60%'
	};

	return new Response(JSON.stringify(keyboard));
}
