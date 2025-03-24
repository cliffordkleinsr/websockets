<script lang="ts">
	import { Button } from '../../button/index.js';
	import type { ChatPosition, ChatSize } from '../../../../types.js';
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import X from 'lucide-svelte/icons/x';
	import { chatConfig } from './config.js';
	import ExpandableChatToggle from './expandable-chat-toggle.svelte';

	type ExpandableChatProps = WithElementRef<SvelteHTMLElements['div']> & {
		position?: ChatPosition;
		size?: ChatSize;
		icon?: Snippet;
	};

	let {
		class: className,
		position = 'bottom-right',
		size = 'md',
		icon,
		children,
		...restProps
	}: ExpandableChatProps = $props();

	let isOpen = $state(false);
	let chatRef = $state<HTMLDivElement>();
	const toggleChat = () => (isOpen = !isOpen);
</script>

<div class={['fixed z-50', chatConfig.positions[position], className]} {...restProps}>
	<div
		bind:this={chatRef}
		class={[
			'bg-background fixed inset-0 flex h-full w-full flex-col overflow-hidden border shadow-md transition-all duration-250 ease-out sm:absolute sm:inset-auto sm:h-[80vh] sm:w-[90vw] sm:rounded-lg',
			chatConfig.chatPositions[position],
			chatConfig.dimensions[size],
			isOpen ? chatConfig.states.open : chatConfig.states.closed,
			className
		]}
	>
		{@render children?.()}
		<Button
			variant="ghost"
			size="icon"
			class="absolute top-2 right-2 sm:hidden"
			onclick={toggleChat}
		>
			<X class="size-4" />
		</Button>
	</div>
	<ExpandableChatToggle {icon} {isOpen} {toggleChat} />
</div>
