# Sveltekit Web Sockets

[](https://github.com/user-attachments/assets/55f633a7-21f4-4723-9223-afdde16cd0e7)


https://github.com/user-attachments/assets/d530201b-0dcc-48fd-9d3b-858da741c665


## Socket Server Endpoint Logic
- The socket server endpoint can be found at [`src/routes/ws`](https://github.com/cliffordkleinsr/websockets/blob/main/src/routes/ws/%2Bserver.ts). We create a socket connection using the experimental [ws](https://github.com/sveltejs/kit/pull/12973) sveltekit feature which uses [crossws](https://crossws.unjs.io/) under the hood
. Please look at the comments on the server endpoint to understand the logic and refer to crossws for documentation. The Endpoint is served on the root page file
- The project also uses [shadcn-svelte](https://next.shadcn-svelte.com/) and [shadcn-svelte-chat](https://shadcn-svelte-chat.vercel.app/) for the UI

