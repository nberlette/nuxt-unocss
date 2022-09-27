import { defineNuxtConfig } from 'nuxt/config';
import { resolve, dirname, basename } from 'pathe';
import { fileURLToPath } from 'node:url';

import colors from './colors';

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
  unocss: {

		// @unocss/preset-uno
		uno: {},

		// @unocss/preset-icons
		icons: true,

		// @unocss/preset-attributify
		attributify: {
			prefix: 'u-',
		},

		// @unocss/preset-typography
		typography: {
			selectorName: 'prose',
		},

		// @unocss/preset-web-fonts
		webFonts: {
			provider: 'google',
			fonts: {
				display: [
					{
						name: 'Montserrat',
						weights: ['400', '700'],
						italic: false,
					},
					{
						name: 'IBM Plex Sans',
						provider: 'none',
					},
					{
						name: 'sans-serif',
						provider: 'none',
					},
				],
				sans: [
					{
						name: 'IBM Plex Sans',
						italic: true,
					},
				],
				mono: [
					{
						name: 'IBM Plex Mono',
						italic: true,
					},
				],
				serif: [
					{
						name: 'IBM Plex Serif',
						italic: true,
					},
				],
			},
		},

		// inject @unocss/reset/tailwind.css
		preflight: true,

		// shortcuts (aliases)
		shortcuts: [
			// fix the missing tailwind primary palettes
			// [/^(text|bg|border|ring)-(primary|accent)(?:-(\d+))?/i,
			// primaryPaletteShortcut],
			{
				'text-primary': 'text-primary-600',
				'text-secondary': 'text-secondary-600',
				'text-accent': 'text-secondary-600',
			},
		],

		// custom rules
		rules: [

		],
 
		theme: {
			colors,
		}
  },
	// postcss: {
	// 	plugins: {
	// 		tailwindcss: {},
	// 		autoprefixer: {},
	// 		...(isDev ? {} : { cssnano }),
	// 	},
	// },
});
