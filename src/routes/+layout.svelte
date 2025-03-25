<script lang="ts">
	import '../app.css';
	import { Header } from 'svelte-fancy-darkmode';

	let { children } = $props();
</script>

{@render children()}
<Header themeColors={{ dark: '#000000', light: '#ffffff' }} />
