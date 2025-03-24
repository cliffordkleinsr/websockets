<script lang="ts">
	import type { DivableProps } from '../../../../types.js';

	let { class: className, children, ...restProps }: DivableProps = $props();
</script>

<div class={['border-t p-4', className]} {...restProps}>
	{@render children?.()}
</div>
