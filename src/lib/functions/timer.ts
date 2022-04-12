import { readable } from 'svelte/store';

// Timer between two dates (svelte readable store)
export const timer = readable(null, function start(set) {
    const interval = setInterval(() => {
        const now = new Date();
        const diff = new Date("2022-05-01").getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        set(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
})
