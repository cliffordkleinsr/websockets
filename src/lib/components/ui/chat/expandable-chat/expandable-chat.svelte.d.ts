import type { ChatPosition, ChatSize } from '../../../../types.js';
import type { WithElementRef } from 'bits-ui';
import type { Snippet } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
type ExpandableChatProps = WithElementRef<SvelteHTMLElements['div']> & {
	position?: ChatPosition;
	size?: ChatSize;
	icon?: Snippet;
};
declare const ExpandableChat: import('svelte').Component<ExpandableChatProps, {}, ''>;
type ExpandableChat = ReturnType<typeof ExpandableChat>;
export default ExpandableChat;
