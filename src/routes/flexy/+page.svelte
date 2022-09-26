<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	// TS hints:
	//   let data: {
	//       [x: string]: any;
	//   }
</script>

<div>
	{data.name} has a refresh rate of {data.refreshRate}hz
</div>
