<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{data.keyboards[0].name} has {data.keyboards[0].layout} layout
</div>
