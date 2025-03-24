type AutoscrollOptions = {
	pauseOnUserScroll?: boolean;
};
export default function autoscroll(
	node: HTMLElement,
	options?: AutoscrollOptions & ScrollOptions
): {
	update({ pauseOnUserScroll, behavior }: AutoscrollOptions & ScrollOptions): void;
	destroy(): void;
};
export {};
