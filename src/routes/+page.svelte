<script lang="ts">
	import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage, ChatMessageList } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { Send } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let message = $state(undefined);
	let chatmessages = $state([]) as Array<{
		sender: string;
		content: string;
		isSystem: boolean;
		avatar?: string;
	}>;
	let socket = $state() as WebSocket;
	let myAvatar = $state('');

	onMount(() => {
		socket = new WebSocket('/ws');
		socket.addEventListener('message', (event) => {
			try {
				const data = JSON.parse(event.data);
				if (data.type === 'welcome') {
					myAvatar = data.avatar;
					chatmessages.push({
						sender: 'system',
						content: data.message,
						isSystem: true,
						avatar: data.avatar
					});
				} else if (data.type === 'message') {
					chatmessages.push({
						sender: data.username,
						content: data.message,
						isSystem: false,
						avatar: data.avatar
					});
				} else if (data.type === 'system') {
					chatmessages.push({
						sender: data.username,
						content: data.message,
						isSystem: true,
						avatar: data.avatar
					});
				}
			} catch (e) {
				console.error('Error parsing JSON:', e);
				const msg = event.data as string;
				const match = msg.match(/\[([^\]]+)\]\s*(.*)/);
				if (match) {
					const sender = match[1];
					const content = match[2];
					const isSystem = sender === 'system';
					chatmessages.push({
						sender,
						content,
						isSystem
					});
				} else {
					chatmessages.push({
						sender: 'system',
						content: msg,
						isSystem: true
					});
				}
			}
		});
	});
</script>

<div class="mx-auto grid max-w-md gap-2 py-10">
	<h1 class="text-center text-2xl">WebSocket Chat</h1>
	<div class="h-65">
		<ChatMessageList>
			{#each chatmessages as message}
				{#if message.isSystem}
					<div class="my-2 text-center text-sm text-gray-500">
						{message.content}
					</div>
				{:else}
					<ChatBubble variant={message.sender === 'You' ? 'sent' : 'recieved'}>
						<ChatBubbleAvatar
							src={message.sender === 'You' ? myAvatar : message.avatar}
							fallback={message.sender.substring(0, 2).toUpperCase()}
						/>
						<ChatBubbleMessage
							variant={message.sender === 'You' ? 'sent' : 'recieved'}
							isLoading={false}
						>
							{message.content}
						</ChatBubbleMessage>
					</ChatBubble>
				{/if}
			{/each}
		</ChatMessageList>
	</div>
	<form
		onsubmit={(e) => {
			e.preventDefault();
			if (message) {
				socket.send(message);
				chatmessages.push({
					sender: 'You',
					content: message,
					isSystem: false,
					avatar: myAvatar
				});
				message = undefined;
			}
		}}
		class="flex gap-1"
	>
		<Textarea bind:value={message} />
		<Button type="submit" size="icon" class="my-5 shrink-0 rounded-full">
			<Send class="size-4" />
		</Button>
	</form>
</div>
