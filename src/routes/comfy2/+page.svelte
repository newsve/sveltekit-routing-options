<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{data.name} has {data.layout} layout
</div>
