<script lang="ts">
	async function getKeyboards() {
		const res = await fetch('/comfy2-but-bigger-JSON/__data.js');
		const resAsText = await res.text();
		console.time('devalue deserial');
		(0, eval)('(' + resAsText + ')');
		console.timeEnd('devalue deserial');

		// @ts-ignore
		console.log(window.__sveltekit_data.nodes[1].data);
		// @ts-ignore
		return window.__sveltekit_data.nodes[1].data;
	}
</script>

<div>
	{#await getKeyboards() then data}
		{data.keyboards[0].name} has a {data.keyboards[0].layout} layout
	{/await}
</div>
