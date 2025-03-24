import type { WithElementRef } from 'bits-ui';
import type { SvelteHTMLElements } from 'svelte/elements';
import { type VariantProps } from 'tailwind-variants';
export declare const chatBubbleVariant: import('tailwind-variants').TVReturnType<
	{
		variant: {
			received: string;
			sent: string;
		};
		layout: {
			default: string;
			ai: string;
		};
	},
	undefined,
	'flex gap-2 max-w-[60%] items-end relative group',
	import('tailwind-variants/dist/config').TVConfig<
		{
			variant: {
				received: string;
				sent: string;
			};
			layout: {
				default: string;
				ai: string;
			};
		},
		{
			variant: {
				received: string;
				sent: string;
			};
			layout: {
				default: string;
				ai: string;
			};
		}
	>,
	{
		variant: {
			received: string;
			sent: string;
		};
		layout: {
			default: string;
			ai: string;
		};
	},
	undefined,
	import('tailwind-variants').TVReturnType<
		{
			variant: {
				received: string;
				sent: string;
			};
			layout: {
				default: string;
				ai: string;
			};
		},
		undefined,
		'flex gap-2 max-w-[60%] items-end relative group',
		import('tailwind-variants/dist/config').TVConfig<
			{
				variant: {
					received: string;
					sent: string;
				};
				layout: {
					default: string;
					ai: string;
				};
			},
			{
				variant: {
					received: string;
					sent: string;
				};
				layout: {
					default: string;
					ai: string;
				};
			}
		>,
		unknown,
		unknown,
		undefined
	>
>;
type ChatBubbleVariant = VariantProps<typeof chatBubbleVariant>['variant'];
type ChatBubbleLayout = VariantProps<typeof chatBubbleVariant>['layout'];
export type ChatBubbleProps = WithElementRef<SvelteHTMLElements['div']> & {
	variant?: ChatBubbleVariant;
	layout?: ChatBubbleLayout;
};
declare const ChatBubble: import('svelte').Component<ChatBubbleProps, {}, 'ref'>;
type ChatBubble = ReturnType<typeof ChatBubble>;
export default ChatBubble;
