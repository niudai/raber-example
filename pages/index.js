import { BuilderComponent, getPage } from "@raber/react";

export default ({ data }) => (
	<main>
		<h1>Welcome to Next.js</h1>
		<BuilderComponent data={data}></BuilderComponent>
	</main>
)

export async function getServerSideProps() {
	const data = await getPage('124b616e-3bf1-428d-abd7-5b0400a0ee5f');
	return { props: { data } }
  }
  
