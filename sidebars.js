/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	docsSidebar: [
		{
			type: "category",
			label: "Documentation",
			items: [
				"Introduction",
				{
					type: "category",
					label: "Services",
					items: [
						"services/zero-knowledge-database", // must match id in md file and file folder name
						"services/registry",
						{
							type: "category",
							label: "Lambdas",
							items: [
								"services/lambdas/introduction",
								{
									type: "category",
									label: "Getting Started",
									items: [
										"services/lambdas/getting-started/build-a-function",
										"services/lambdas/getting-started/run-your-function",
										"services/lambdas/getting-started/debug-your-function"
									],
								},
							],
						},
						{
							type: "category",
							label: "Containers",
							items: [
								"services/containers/introduction",
								"services/containers/getting-started",
								"services/containers/maintaining",
							],
						},
					],
				},
			],
		},
	],
};

module.exports = sidebars;
