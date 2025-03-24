export const chatConfig = {
	dimensions: {
		sm: 'sm:max-w-sm sm:max-h-[500px]',
		md: 'sm:max-w-md sm:max-h-[600px]',
		lg: 'sm:max-w-lg sm:max-h-[700px]',
		xl: 'sm:max-w-xl sm:max-h-[800px]',
		full: 'sm:w-full sm:h-full'
	},
	positions: {
		'bottom-right': 'bottom-5 right-5',
		'bottom-left': 'bottom-5 left-5'
	},
	chatPositions: {
		'bottom-right': 'sm:bottom-[calc(100%+10px)] sm:right-0',
		'bottom-left': 'sm:bottom-[calc(100%+10px)] sm:left-0'
	},
	states: {
		open: 'pointer-events-auto opacity-100 visible scale-100 translate-y-0',
		closed: 'pointer-events-none opacity-0 invisible scale-100 sm:translate-y-5'
	}
};
