export default function autoscroll(
	node,
	options = {
		behavior: 'smooth'
	}
) {
	const forbiddenOverflows = ['visible', 'hidden'];
	if (
		forbiddenOverflows.includes(getComputedStyle(node).overflowX) &&
		forbiddenOverflows.includes(getComputedStyle(node).overflowY)
	) {
		console.warn(
			'Autoscroll element will never scroll. Set at least one of `overflow-x` or `overflow-y` to either `auto` or `scroll`.'
		);
	}
	const { pauseOnUserScroll: _, ...scrollOptions } = {
		behavior: 'smooth',
		...options
	};
	const scroll = () => {
		node.scrollTo({
			top: node.scrollHeight,
			left: node.scrollWidth,
			...scrollOptions
		});
	};
	// for when children change sizes
	const resizeObserver = new ResizeObserver(() => {
		scroll();
	});
	// for when children are added or removed/subtree changes
	const mutationObserver = new MutationObserver(() => {
		scroll();
	});
	const observeAll = () => {
		// observe size of all children
		for (const child of node.children) {
			resizeObserver.observe(child);
		}
		mutationObserver.observe(node, { childList: true, subtree: true });
	};
	observeAll();
	const handleScroll = () => {
		if (node.scrollTop + node.clientHeight < node.scrollHeight) {
			mutationObserver.disconnect();
			resizeObserver.disconnect();
		} else {
			observeAll();
		}
	};
	if (options.pauseOnUserScroll) {
		node.addEventListener('scroll', handleScroll);
	}
	return {
		update({ pauseOnUserScroll, behavior }) {
			if (pauseOnUserScroll) {
				node.addEventListener('scroll', handleScroll);
				mutationObserver.disconnect();
				resizeObserver.disconnect();
			} else {
				node.removeEventListener('scroll', handleScroll);
				observeAll();
			}
		},
		destroy() {
			if (mutationObserver) {
				mutationObserver.disconnect();
			}
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
			if (options.pauseOnUserScroll) {
				node.removeEventListener('scroll', handleScroll);
			}
		}
	};
}
