<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Button, type ButtonProps } from '../../button/index.js';

	type ChatBubbleActionProps = ButtonProps & {
		icon: Snippet;
	};

	let {
		icon,
		onclick,
		class: className,
		variant = 'ghost',
		size = 'icon',
		...restProps
	}: ChatBubbleActionProps = $props();
</script>

<Button {variant} {size} class={[className]} {onclick} {...restProps}>
	{@render icon?.()}
</Button>
