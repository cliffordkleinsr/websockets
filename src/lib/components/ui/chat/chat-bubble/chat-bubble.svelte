<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';

	export const chatBubbleVariant = tv({
		base: 'flex gap-2 max-w-[60%] items-end relative group',
		variants: {
			variant: {
				received: 'self-start',
				sent: 'self-end flex-row-reverse'
			},
			layout: {
				default: '',
				ai: 'max-w-full w-full items-center'
			}
		},
		defaultVariants: {
			variant: 'received',
			layout: 'default'
		}
	});

	type ChatBubbleVariant = VariantProps<typeof chatBubbleVariant>['variant'];
	type ChatBubbleLayout = VariantProps<typeof chatBubbleVariant>['layout'];
	export type ChatBubbleProps = WithElementRef<SvelteHTMLElements['div']> & {
		variant?: ChatBubbleVariant;
		layout?: ChatBubbleLayout;
	};
</script>

<script lang="ts">
	let {
		class: className,
		variant,
		layout,
		ref = $bindable(null),
		children,
		...restProps
	}: ChatBubbleProps = $props();
</script>

<div
	bind:this={ref}
	class={[chatBubbleVariant({ variant, layout }), className, 'relative']}
	{...restProps}
>
	{@render children?.()}
</div>
