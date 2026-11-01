// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
	vite: {
		// Permite `import data from "./portfolio.yaml"` con recarga en caliente.
		plugins: [yaml()],
	},
});
