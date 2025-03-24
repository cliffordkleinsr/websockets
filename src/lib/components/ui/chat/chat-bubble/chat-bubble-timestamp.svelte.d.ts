import type { WithElementRef } from 'bits-ui';
import type { SvelteHTMLElements } from 'svelte/elements';
type ChatBubbleTimestampProps = WithElementRef<SvelteHTMLElements['div']> & {
	timestamp: string;
};
declare const ChatBubbleTimestamp: import('svelte').Component<ChatBubbleTimestampProps, {}, ''>;
type ChatBubbleTimestamp = ReturnType<typeof ChatBubbleTimestamp>;
export default ChatBubbleTimestamp;
