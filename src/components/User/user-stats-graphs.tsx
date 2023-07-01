import { useState, useEffect } from 'react';
import styles from './user-stats-graphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

export interface UserStatsGraphsProps {
	id: number;
	title: string;
	acessos: string;
}

interface Graphs {
	x: string;
	y: number;
}

export default function UserStatsGraphs({
	data,
}: {
	data: UserStatsGraphsProps[];
}) {
	const [graph, setGraph] = useState<Graphs[]>([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const graphData = data.map((item) => {
			return {
				x: item.title,
				y: Number(item.acessos),
			};
		});

		const totalArray = data.map(({ acessos }) => acessos);
		const total = totalArray.reduce((acc, actual) => {
			return acc + Number(actual);
		}, 0);

		setTotal(total);
		setGraph(graphData);
	}, [data]);

	return (
		<section className={`${styles.graph} animeLeft `}>
			<div className={`${styles.total} ${styles.graphItem}`}>
				<p>Acessos: {total}</p>
			</div>
			<div className={styles.graphItem}>
				<VictoryPie
					data={graph}
					innerRadius={50}
					padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
					style={{
						data: {
							fillOpacity: 0.9,
							stroke: '#fff',
							strokeWidth: 2,
						},
						labels: {
							fontSize: 14,
							fill: '#333',
						},
					}}
				/>
			</div>
			<div className={styles.graphItem}>
				<VictoryChart>
					<VictoryBar alignment="start" data={graph}></VictoryBar>
				</VictoryChart>
			</div>
		</section>
	);
}
