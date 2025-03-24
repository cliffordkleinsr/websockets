<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';
	import MessageLoading from '../message-loading.svelte';

	export const chatBubbleMessageVariants = tv({
		base: 'p-4',
		variants: {
			variant: {
				received: 'bg-secondary text-secondary-foreground rounded-r-lg rounded-tl-lg',
				sent: 'bg-primary text-primary-foreground rounded-l-lg rounded-tr-lg'
			},
			layout: {
				default: '',
				ai: 'border-t w-full rounded-none bg-transparent'
			}
		},
		defaultVariants: {
			variant: 'received',
			layout: 'default'
		}
	});

	type ChatBubbleMessageVariant = VariantProps<typeof chatBubbleMessageVariants>['variant'];
	type ChatBubbleMessageLayout = VariantProps<typeof chatBubbleMessageVariants>['layout'];

	export type ChatBubbleMessageProps = WithElementRef<SvelteHTMLElements['div']> & {
		variant?: ChatBubbleMessageVariant;
		layout?: ChatBubbleMessageLayout;
		isLoading?: boolean;
	};
</script>

<script lang="ts">
	let {
		class: className,
		variant,
		layout,
		ref = $bindable(null),
		isLoading = false,
		children,
		...restProps
	}: ChatBubbleMessageProps = $props();
</script>

<div
	bind:this={ref}
	class={[chatBubbleMessageVariants({ variant, layout }), className]}
	{...restProps}
>
	{#if isLoading}
		<div class="flex items-center space-x-2">
			<MessageLoading />
		</div>
	{:else}
		{@render children?.()}
	{/if}
</div>
