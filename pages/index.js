import { Button, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { BuilderComponent, getPage } from "@raber/react";
import '../comps.jsx'

export default ({ data }) => (
	<main>
		<h1>Welcome to Next.js</h1>
		<Button colorScheme='purple'>Purple</Button>		
		<BuilderComponent data={data} id='124b616e-3bf1-428d-abd7-5b0400a0ee5f'></BuilderComponent>
	</main>
)

export async function getServerSideProps() {
	const data = await getPage('124b616e-3bf1-428d-abd7-5b0400a0ee5f');
	return { props: { data } }
  }
  
