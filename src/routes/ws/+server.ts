import type { Socket } from '@sveltejs/kit';

function generateUsername() {
	const adjectives = ['Happy', 'Brave', 'Clever', 'Swift', 'Gentle'];
	const nouns = ['Panda', 'Tiger', 'Dolphin', 'Eagle', 'Fox'];
	return `${adjectives[Math.floor(Math.random() * adjectives.length)]}${nouns[Math.floor(Math.random() * nouns.length)]}`;
}

function generateAvatar() {
	const presets = ['Sadie', 'Destiny', 'Sara', 'Riley', 'Adrian', 'Jocelyn'];
	const seed = presets[Math.floor(Math.random() * presets.length)];
	return `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${seed}`;
}

const users = new Map();

export const socket: Socket = {
	upgrade(req) {
		console.log('upgrade');
	},

	open(peer) {
		// Fetch random username
		const username = generateUsername();
		// Fetch random avatar
		const avatar = generateAvatar();
		// Set Utilities
		users.set(peer, { username, avatar });
		// Send welcome to the new client
		peer.send(
			JSON.stringify({ type: 'welcome', message: 'Welcome to the chat!', username, avatar })
		);
		// Join new client to the "chat" channel
		peer.subscribe('chat');
		// Notify every other connected client
		peer.publish(
			'chat',
			JSON.stringify({
				type: 'system',
				message: `${username} joined!`,
				username: 'system',
				avatar: null
			})
		);
	},

	message(peer, message) {
		const user = users.get(peer);
		// Extract the text message from the 'message' parameter
		const textMessage = String(message); // Convert to string to prevent issues.

		// Send the avatar with the chat message
		peer.publish(
			'chat',
			JSON.stringify({
				type: 'message',
				message: textMessage,
				username: user.username,
				avatar: user.avatar
			})
		);
	},

	close(peer, event) {
		const user = users.get(peer);
		// Removeuser from peer
		peer.publish(
			'chat',
			JSON.stringify({
				type: 'system',
				message: `${user.username} has left the chat!`,
				username: 'system',
				avatar: null
			})
		);
		// unsubscribe from chat
		peer.unsubscribe('chat');
		// clear user from storage
		users.delete(peer);
	},

	error(peer, error) {
		console.log('error');
		users.delete(peer);
	}
};
