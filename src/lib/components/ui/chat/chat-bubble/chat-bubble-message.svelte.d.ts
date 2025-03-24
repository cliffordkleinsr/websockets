import type { WithElementRef } from 'bits-ui';
import type { SvelteHTMLElements } from 'svelte/elements';
import { type VariantProps } from 'tailwind-variants';
export declare const chatBubbleMessageVariants: import('tailwind-variants').TVReturnType<
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
	'p-4',
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
		'p-4',
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
type ChatBubbleMessageVariant = VariantProps<typeof chatBubbleMessageVariants>['variant'];
type ChatBubbleMessageLayout = VariantProps<typeof chatBubbleMessageVariants>['layout'];
export type ChatBubbleMessageProps = WithElementRef<SvelteHTMLElements['div']> & {
	variant?: ChatBubbleMessageVariant;
	layout?: ChatBubbleMessageLayout;
	isLoading?: boolean;
};
declare const ChatBubbleMessage: import('svelte').Component<ChatBubbleMessageProps, {}, 'ref'>;
type ChatBubbleMessage = ReturnType<typeof ChatBubbleMessage>;
export default ChatBubbleMessage;
