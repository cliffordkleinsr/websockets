<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { Textarea } from '../textarea/index.js';

	type ChatInputProps = WithElementRef<HTMLTextareaAttributes>;

	let { class: className, ref = $bindable(null), ...restProps }: ChatInputProps = $props();
</script>

<Textarea
	autocomplete="off"
	{ref}
	name="message"
	class={[
		'bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-16 max-h-12 w-full resize-none items-center rounded-md px-4 py-3 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
		className
	]}
	{...restProps}
/>
