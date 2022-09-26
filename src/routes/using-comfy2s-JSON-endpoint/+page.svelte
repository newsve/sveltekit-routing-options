<script lang="ts">
	async function getKeyboard() {
		const res = await fetch('/comfy2', { headers: { accept: 'application/json' } });
		const resAsJSON = await res.json();

		return resAsJSON;
	}
</script>

<div>
	{#await getKeyboard() then keyboard}
		{keyboard.name} has a {keyboard.layout} layout
	{/await}
</div>
