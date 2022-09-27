import { defineNuxtConfig } from 'nuxt/config';
import { resolve, dirname, basename } from 'pathe';
import { fileURLToPath } from 'node:url';

import unocss from './unocss.config'

const isDev = process.env.NODE_ENV === 'development';

const _dirname = __dirname ?? (
	dirname(fileURLToPath(new URL('./', import.meta.url)))
);

/**
 * Shorthand relative path resolver (with tilde support)
 * 
 * @example r('~/unocss.config.ts')
 * // => /workspace/project/unocss.config.ts
 */
const r = (...parts: string[]) =>
	resolve(_dirname, ...parts.map(p =>
		p.trim().replace(/^[~][/]/g, './')
	));


const adaptColorPrefix = (p: string) => (p === 'bg' ? 'background-color' : p === 'border' ? 'border-color' : 'color');

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		"@nuxt/content",
		// "@nuxtjs/tailwindcss",
		"@unocss/nuxt",
	],
	content: {
		documentDriven: true,
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
		},
		highlight: {
			theme: 'material-palenight',
			preload: [
				'vue-html',
				'json',
				'bash',
				'ts',
				'tsx',
				'js',
				'jsx',
				'yaml',
				'graphql',
				'md',
				'svelte',
				'astro',
			],
		},
	},
	css: [
		'~/assets/css/main.css',
	],
  unocss: unocss,
});
