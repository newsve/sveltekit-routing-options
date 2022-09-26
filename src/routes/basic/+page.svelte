<script lang="ts">
	async function getMouse() {
		const res = await fetch('/basic', { headers: { accept: 'application/json' } });
		const resAsJson = await res.json();
		return resAsJson;
		// TS hints: `const resAsJson: any`
	}
</script>

<div>
	{#await getMouse() then mouse}
		{mouse.name} is {mouse.weight}g
	{/await}
</div>
