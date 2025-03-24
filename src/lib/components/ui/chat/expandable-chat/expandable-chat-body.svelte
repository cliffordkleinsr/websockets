<script lang="ts">
	import type { DivableProps } from '../../../../types.js';
	let { class: className, children, ...restProps }: DivableProps = $props();
</script>

<div class={['grow overflow-y-auto', className]} {...restProps}>
	{@render children?.()}
</div>
