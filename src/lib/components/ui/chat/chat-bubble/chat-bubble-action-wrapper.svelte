<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type ChatBubbleActionWrapperProps = WithElementRef<SvelteHTMLElements['div']> & {
		variant?: 'sent' | 'received';
	};

	let {
		variant,
		class: className,
		children,
		...restProps
	}: ChatBubbleActionWrapperProps = $props();
</script>

<div
	class={[
		'absolute top-1/2 flex -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100',
		variant === 'sent' ? '-top-0 -translate-y-full flex-row-reverse' : '-bottom-0 translate-y-full',
		className
	]}
	{...restProps}
>
	{@render children?.()}
</div>
