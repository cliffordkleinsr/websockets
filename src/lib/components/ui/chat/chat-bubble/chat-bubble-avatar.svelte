<script lang="ts">
	import * as Avatar from '../../avatar/index.js';
	import type { ChatBubbleAvatarProps } from '../../../../types.js';

	let { src, class: className, fallback }: ChatBubbleAvatarProps = $props();
</script>

<Avatar.Root class={[className]}>
	<Avatar.Image {src} alt="avatar" />
	<Avatar.Fallback>{fallback}</Avatar.Fallback>
</Avatar.Root>
