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
	// By default, Docusaurus generates a sidebar from the docs folder structure
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
						"services/lambdas",
						"services/containers",
					],
				},
			],
		},
	],
};

module.exports = sidebars;
