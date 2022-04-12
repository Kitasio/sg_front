import adapter from 'svelte-adapter-static-digitalocean';

export default {
    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            spec: '.do/spec.yaml',
            name: ''
        })
    }
};
