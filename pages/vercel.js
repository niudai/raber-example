import { BuilderComponent, getPage } from "@raber/react";

export default ({ data }) => (
	<main>
		<h1>Welcome to Next.js</h1>
		<BuilderComponent data={data} id="124b616e-3bf1-428d-abd7-5b0408aaaa"></BuilderComponent>
	</main>
)

export async function getServerSideProps() {
	const data = await getPage('124b616e-3bf1-428d-abd7-5b0408aaaa');
	return { props: { data } }
  }
  
