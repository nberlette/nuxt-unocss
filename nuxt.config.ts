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

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		"@nuxt/content",
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
			theme: {
				default: 'material-palenight',
				dark: 'material-darker',
				sepa: 'material-ocean',
			},
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
