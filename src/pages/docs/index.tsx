import React from "react";
import Layout from "@theme/Layout";

export default function Docs() {
	return (
		<Layout title="Docs" description="Stuga Cloud Docs page">
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "50vh",
					fontSize: "20px",
				}}
			>
				<h1>My Containers Docs page</h1>
				<p>This is a React page</p>
			</div>
		</Layout>
	);
}
