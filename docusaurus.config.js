// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Stuga Cloud",
	tagline: "The simplicity in the cloud",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://www.stuga-cloud.tech",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/docs/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "Stuga-Cloud", // Usually your GitHub org/user name.
	projectName: "docs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					admonitions: {},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/stuga-social-card.jpg",
			navbar: {
				title: "Stuga Cloud",
				logo: {
					alt: "Stuga Cloud Logo",
					src: "img/stuga-logo.png",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "docsSidebar",
						position: "left",
						label: "Docs",
						to: "/",
					},
					// { to: "/docs", label: "Docs", position: "left" },
					// { to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/orgs/Stuga-Cloud",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Zero Knowledge Database",
								to: "/docs/docs/services/zero-knowledge-database",
							},
							{
								label: "Registry",
								to: "/docs/docs/services/registry",
							},
							{
								label: "Lamdbas",
								to: "/docs/docs/services/lambdas/introduction",
							},
							{
								label: "Containers",
								to: "/docs/docs/services/containers/introduction",
							},
						],
					},
					// {
					// 	title: "Community",
					// 	items: [
					// 		{
					// 			label: "Stack Overflow",
					// 			href: "https://stackoverflow.com/questions/tagged/docusaurus",
					// 		},
					// 		{
					// 			label: "Discord",
					// 			href: "https://discordapp.com/invite/docusaurus",
					// 		},
					// 		{
					// 			label: "Twitter",
					// 			href: "https://twitter.com/docusaurus",
					// 		},
					// 	],
					// },
					{
						title: "More",
						items: [
							// {
							// 	label: "Blog",
							// 	to: "/blog",
							// },
							{
								label: "GitHub",
								href: "https://github.com/Stuga-Cloud",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Stuga Cloud`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ["rust"],
			},
		}),
};

module.exports = config;
