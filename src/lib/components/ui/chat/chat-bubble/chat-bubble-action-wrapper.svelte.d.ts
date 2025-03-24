import type { WithElementRef } from 'bits-ui';
import type { SvelteHTMLElements } from 'svelte/elements';
type ChatBubbleActionWrapperProps = WithElementRef<SvelteHTMLElements['div']> & {
	variant?: 'sent' | 'received';
};
declare const ChatBubbleActionWrapper: import('svelte').Component<
	ChatBubbleActionWrapperProps,
	{},
	''
>;
type ChatBubbleActionWrapper = ReturnType<typeof ChatBubbleActionWrapper>;
export default ChatBubbleActionWrapper;
