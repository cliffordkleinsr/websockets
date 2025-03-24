<script lang="ts">
	import type { DivableProps } from '../../../types.js';
	import ArrowDown from 'lucide-svelte/icons/a-arrow-down';
	import autoscroll from './hooks/use_autoscroll.svelte.js';
	type ChatMessageListProps = DivableProps & {
		smooth?: boolean;
	};
	let {
		class: className,
		smooth = false,
		ref = $bindable(null),
		children,
		...restProps
	}: ChatMessageListProps = $props();
</script>

<div class="relative h-full w-full">
	<div
		bind:this={ref}
		use:autoscroll
		class={['flex h-full w-full flex-col overflow-y-auto p-4', className]}
		{...restProps}
	>
		<div class="flex flex-col gap-6">
			{@render children?.()}
		</div>
	</div>
</div>
