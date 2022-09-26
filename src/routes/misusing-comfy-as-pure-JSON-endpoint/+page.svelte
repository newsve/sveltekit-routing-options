<script lang="ts">
	async function getKeyboard() {
		const res = await fetch('/comfy/__data.js');
		const resAsText = await res.text();
		(0, eval)('(' + resAsText + ')');

		// @ts-ignore
		return window.__sveltekit_data.nodes[1].data;
	}
</script>

<div>
	{#await getKeyboard() then keyboard}
		{keyboard.name} has a {keyboard.layout} layout
	{/await}
</div>
