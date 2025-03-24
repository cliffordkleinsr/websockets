<script lang="ts">
	import type { DivableProps } from '../../../../types.js';

	let { class: className, children, ...restProps }: DivableProps = $props();
</script>

<div class={['flex items-center justify-between border-b p-4', className]} {...restProps}>
	{@render children?.()}
</div>
