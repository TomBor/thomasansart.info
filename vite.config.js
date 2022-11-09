import { sveltekit } from '@sveltejs/kit/vite';
import * as path from 'path';
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		imagetools({
			// https://github.com/JonasKruckenberg/imagetools/blob/main/packages/vite/README.md#defaultdirectives
			defaultDirectives: (url) => {
				const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);
				if (['jpg', 'jpeg', 'png'].includes(extension)) {
					return new URLSearchParams({
						width: '800;400;1600',
						format: 'avif;webp',
						picture: true
					});
				}
				return new URLSearchParams();
			}
		})
	],
	resolve: {
		alias: {
			$img: path.resolve('src/img'),
			$md: path.resolve('src/md')
		}
	}
};

export default config;
