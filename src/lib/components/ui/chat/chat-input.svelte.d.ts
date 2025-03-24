import type { WithElementRef } from 'bits-ui';
import type { HTMLTextareaAttributes } from 'svelte/elements';
type ChatInputProps = WithElementRef<HTMLTextareaAttributes>;
declare const ChatInput: import('svelte').Component<ChatInputProps, {}, 'ref'>;
type ChatInput = ReturnType<typeof ChatInput>;
export default ChatInput;
