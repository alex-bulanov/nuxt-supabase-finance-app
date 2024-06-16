// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		host: '0.0.0.0'
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			meta: [
				{
					name: 'msapplication-TileColor',
					content: '#da532c'
				},
				{
					name: 'theme-color',
					content: '#000000'
				}
			],
			link: [
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon.png'
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/favicon-32x32.png'
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/favicon-16x16.png'
				},
				{
					rel: 'manifest',
					href: '/site.webmanifest'
				},
				{
					rel: 'mask-icon',
					href: '/safari-pinned-tab.svg',
					color: '#5bbad5'
				},
				// Включить предварительную загрузку шрифтов по мере необходимости.
				// {
				// 	rel: 'preload',
				// 	href: '/fonts/Montserrat-Thin.woff2',
				// 	as: 'font',
				// 	type: 'font/woff2',
				// 	crossorigin: ''
				// },
				// {
				// 	rel: 'preload',
				// 	href: '/fonts/Montserrat-ExtraLight.woff2',
				// 	as: 'font',
				// 	type: 'font/woff2',
				// 	crossorigin: ''
				// },
				// {
				// 	rel: 'preload',
				// 	href: '/fonts/Montserrat-Light.woff2',
				// 	as: 'font',
				// 	type: 'font/woff2',
				// 	crossorigin: ''
				// },
				{
					rel: 'preload',
					href: '/fonts/Montserrat-Regular.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: ''
				}
				// {
				// 	rel: 'preload',
				// 	href: '/fonts/Montserrat-Medium.woff2',
				// 	as: 'font',
				// 	type: 'font/woff2',
				// 	crossorigin: ''
				// },
				// {
				// 	rel: 'preload',
				// 	href: '/fonts/Montserrat-SemiBold.woff2',
				// 	as: 'font',
				// 	type: 'font/woff2',
				// 	crossorigin: ''
				// },
				// {
				// 	rel: 'preload',
				// 	href: '/fonts/Montserrat-Bold.woff2',
				// 	as: 'font',
				// 	type: 'font/woff2',
				// 	crossorigin: ''
				// },
				// {
				// 	rel: 'preload',
				// 	href: '/fonts/Montserrat-ExtraBold.woff2',
				// 	as: 'font',
				// 	type: 'font/woff2',
				// 	crossorigin: ''
				// },
				// {
				// 	rel: 'preload',
				// 	href: '/fonts/Montserrat-Black.woff2',
				// 	as: 'font',
				// 	type: 'font/woff2',
				// 	crossorigin: ''
				// }
				// end
			]
		}
	},
	modules: [
		'@nuxtjs/stylelint-module',
		'@nuxtjs/eslint-module',
		'@nuxtjs/supabase',
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'@nuxt/ui'
	],
	css: ['~/assets/scss/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "@/assets/scss/general/variables.scss" as *;
					`
				}
			}
		}
	},
	supabase: {
		redirect: false
	},
	runtimeConfig: {
		public: {
			baseUrl: process.env.BASE_URL || 'http://localhost:3000'
		}
	}
})
