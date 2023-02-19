import { BuilderComponent, getPage } from '@raber/react';
import Head from 'next/head';
import '../comps.jsx';

import { Header } from '../components/eth/header.jsx';
import { StatisticCard } from '../components/eth/statistic.jsx';



export default ({ data }) => (
	<main>
		<Head>
			<title>Home | ethereum.org</title>
			<meta name="description" content="Make Your React App Visually Editable." />
			<link rel="icon" href="https://ethereum.org/favicon-32x32.png?v=8b512faa8d4a0b019c123a771b6622aa" />

		</Head>
		<div style={{
			maxWidth: '1504px',
			margin: 'auto'
		}}>
			<Header />
			<BuilderComponent data={data} id='ethereum'></BuilderComponent>

		</div>
	</main>
)

export async function getStaticProps() {
	const data = await getPage('ethereum');
	return { props: { data }, revalidate: 10 }
}

