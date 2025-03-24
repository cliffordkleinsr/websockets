<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Button, type ButtonProps } from '../../button/index.js';
	import X from 'lucide-svelte/icons/x';
	import MessageCircle from 'lucide-svelte/icons/message-circle';
	type ExpandableChatToggleProps = ButtonProps & {
		icon?: Snippet;
		isOpen: boolean;
		toggleChat: () => void;
	};

	let {
		class: className,
		icon,
		isOpen,
		toggleChat,
		...restProps
	}: ExpandableChatToggleProps = $props();
</script>

<Button
	variant="default"
	onclick={toggleChat}
	class={[
		'flex h-14 w-14 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-black/30',
		className
	]}
	{...restProps}
>
	{#if isOpen}
		<X className="size-6" />
	{:else if icon}
		{@render icon?.()}
	{:else}
		<MessageCircle className="size-6" />
	{/if}
</Button>
