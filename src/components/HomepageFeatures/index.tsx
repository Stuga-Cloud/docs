import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Boxes, Box, FunctionSquare, Key, Icon } from "lucide-react";

type FeatureItem = {
	title: string;
	description: JSX.Element;
	icon: Icon;
	bgColor: string;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Zero knowledge database",
		description: (
			<>
				Secure database where data is encrypted and decrypted
				client-side, ensuring privacy and protection even if the
				provider is compromised.
			</>
		),
		icon: Key,
		// red but little darker
		bgColor: "red",
	},
	{
		title: "Container registry",
		description: (
			<>
				Central repository to store and distribute container images,
				facilitating application sharing and deployment.
			</>
		),
		icon: Boxes,
		bgColor: "green",
	},
	{
		title: "Function as a service",
		description: (
			<>
				Serverless computing where developers focus on code, and the
				cloud provider handles infrastructure management.
			</>
		),
		icon: FunctionSquare,
		bgColor: "brown",
	},
	{
		title: "Container as a service",
		description: (
			<>
				Platform for running and managing containers, simplifying
				deployment and scaling of containerized applications.
			</>
		),
		icon: Box,
		bgColor: "blue",
	},
];

function Feature({ title, description, icon, bgColor }: FeatureItem) {
	return (
		<div className={clsx("col col--6")}>
			<div className="text--center">
				{React.createElement(icon, {
					className: styles.featureSvg,
					role: "img",
					color: bgColor,
				})}
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
