import { BuilderComponent, getPage } from "@raber/react";

export default ({ data }) => (
	<main>
		<h1>Welcome to Next.js</h1>
		<BuilderComponent data={data} id="ethereum"></BuilderComponent>
	</main>
)

export async function getStaticProps() {
	const data = await getPage('ethereum');
	return { props: { data }, revalidate: 10 }
}
