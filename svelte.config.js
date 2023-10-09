import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the static adapter
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    // Set the base and assets path for GitHub Pages
    paths: {
        base: '/Greg-Portfolio', // assuming your repo name is 'portfolio'
        assets: 'https://gregkab.github.io/Greg-Portfolio'
      },
  },
  preprocess: vitePreprocess()
};

export default config;
