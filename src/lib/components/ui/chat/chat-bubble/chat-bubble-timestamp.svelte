<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type ChatBubbleTimestampProps = WithElementRef<SvelteHTMLElements['div']> & {
		timestamp: string;
	};
	let { timestamp, class: classname, ...restProps }: ChatBubbleTimestampProps = $props();
</script>

<div class={['mt-2 text-right text-xs', classname]} {...restProps}>
	{timestamp}
</div>
