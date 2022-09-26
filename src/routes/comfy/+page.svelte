<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	// TS hints:
	//   let data: {
	//       name: string;
	//       layout: string;
	//   }
</script>

<div>
	{data.name} has {data.layout} layout
</div>
