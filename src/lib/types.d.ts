import type { WithElementRef } from 'bits-ui';
import type { SvelteHTMLElements } from 'svelte/elements';

export interface ScrollState {
	isAtBottom: boolean;
	autoScrollEnabled: boolean;
}

export interface UseAutoScrollOptions {
	offset?: number;
	smooth?: boolean;
	content?: any;
}

export interface ChatBubbleAvatarProps {
	src?: string;
	fallback?: string;
	class?: string;
}

export type ChatPosition = 'bottom-right' | 'bottom-left';
export type ChatSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type DivableProps = WithElementRef<SvelteHTMLElements['div']>;
