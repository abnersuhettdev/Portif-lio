import { Container, Grid } from '@mui/material';

import calculator from './assets/projetos/calculadora.png';
import crudveiculos from './assets/projetos/crud-veiculos.png';
import doItImg from './assets/projetos/do-it.png';
import habits from './assets/projetos/habits.png';
import homework from './assets/projetos/homework.png';
import velha from './assets/projetos/jogo-da-velha.png';
import lawyers from './assets/projetos/Lawyers.png';
import { ProjectCard } from './components/Card';
import { Navbar } from './components/Navbar';

const projetos = [
	{
		nome: 'Do It!',
		techs: ['HTML', 'CSS', 'Javascript', 'GIT E GITHUB'],
		img: doItImg,
		deploy: 'https://abnersuhettdev.github.io/Criador-de-Notas/',
		repositorio: 'https://github.com/abnersuhettdev/Criador-de-Notas',
	},
	{
		nome: 'Lawyers',
		techs: ['HTML', 'CSS', 'Bootstrap'],
		img: lawyers,
		deploy: 'https://abnersuhettdev.github.io/lawyers/',
		repositorio: 'https://github.com/abnersuhettdev/lawyers',
	},
	{
		nome: 'Calculadora',
		techs: ['HTML', 'CSS', 'Javascript'],
		img: calculator,
		deploy: 'https://abnersuhettdev.github.io/Calculadora/',
		repositorio: 'https://github.com/abnersuhettdev/Calculadora',
	},
	{
		nome: 'Jogo da Velha',
		techs: ['HTML', 'CSS', 'Javascript'],
		img: velha,
		deploy: 'https://abnersuhettdev.github.io/Jogo-da-Velha/',
		repositorio: 'https://github.com/abnersuhettdev/Jogo-da-Velha',
	},
	{
		nome: 'Habits',
		techs: ['HTML', 'CSS', 'Javascript'],
		img: habits,
		deploy: 'https://abnersuhettdev.github.io/NLWSetup-2023/',
		repositorio: 'https://github.com/abnersuhettdev/NLWSetup-2023',
	},
	{
		nome: 'Homework',
		techs: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
		img: homework,
		deploy: 'https://abnersuhettdev.github.io/Homework/',
		repositorio: 'https://github.com/abnersuhettdev/Homework',
	},
	{
		nome: 'Sistema de crud de Veículos',
		techs: ['HTML', 'CSS', 'Javascript'],
		img: crudveiculos,
		deploy: 'https://abnersuhettdev.github.io/Sistema-de-CRUD-de-veiculos/',
		repositorio:
			'https://github.com/abnersuhettdev/Sistema-de-CRUD-de-veiculos',
	},
];

export const Projetos: React.FC = () => {
	return (
		<>
			<Navbar />

			<Container>
				<Grid
					container
					gap={2}
					alignItems={'center'}
					justifyContent={'center'}
				>
					{projetos.map((projeto) => (
						<Grid
							key={projeto.nome}
							display={'flex'}
							justifyContent={'center'}
							item
							xs={12}
							sm={6}
							md={3}
						>
							<ProjectCard
								nome={projeto.nome}
								techs={projeto.techs}
								deploy={projeto.deploy}
								repositorio={projeto.repositorio}
								img={projeto.img}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};
