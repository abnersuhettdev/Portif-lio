import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import githubIcon from '../public/assets/icons/github.png';
import linkedinIcon from '../public/assets/icons/linkedin.svg';
import mailIcon from '../public/assets/icons/mail.png';
import profile from '../public/assets/Perfil.jpeg';
import { ProjectCard } from './components/Card';
import { Navbar } from './components/Navbar';
import { Skill } from './components/Skills';

const skills = [
	{
		img: '../public/assets/skills/javascript.png',
		caption: 'Javascript',
	},
	{
		img: '../public/assets/skills/Typescript.png',
		caption: 'Typescript',
	},
	{
		img: '../public/assets/skills/React.png',
		caption: 'React',
	},
	{
		img: '../public/assets/skills/mui.png',
		caption: 'Material UI',
	},
	{
		img: '../public/assets/skills/styled-components.png',
		caption: 'Styled Components',
	},
	{
		img: '../public/assets/skills/Redux.png',
		caption: 'Redux',
	},
	{
		img: '../public/assets/skills/Postgres.png',
		caption: 'Postgres',
	},
	{
		img: '../public/assets/skills/node.png',
		caption: 'Node',
	},
	{
		img: '../public/assets/skills/git.png',
		caption: 'Git',
	},
];

const projetos = [
	{
		nome: 'Do It!',
		techs: ['HTML', 'CSS', 'Javascript', 'GIT E GITHUB'],
		img: '../public/assets/projetos/do-it.png',
		deploy: 'https://abnersuhettdev.github.io/Criador-de-Notas/',
		repositorio: 'https://github.com/abnersuhettdev/Criador-de-Notas',
	},
	{
		nome: 'Lawyers',
		techs: ['HTML', 'CSS', 'Bootstrap'],
		img: '../public/assets/projetos/Lawyers.png',
		deploy: 'https://abnersuhettdev.github.io/lawyers/',
		repositorio: 'https://github.com/abnersuhettdev/lawyers',
	},
	{
		nome: 'Calculadora',
		techs: ['HTML', 'CSS', 'Javascript'],
		img: '../public/assets/projetos/calculadora.png',
		deploy: 'https://abnersuhettdev.github.io/Calculadora/',
		repositorio: 'https://github.com/abnersuhettdev/Calculadora',
	},
];

export const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<Container>
				<Grid
					container
					gap={4}
					alignItems={'center'}
					justifyContent={'center'}
					height={'90vh'}
					marginBottom={'10%'}
				>
					<Grid item xs={12} sm={5} md={5}>
						<Box
							maxHeight={'380px'}
							maxWidth={'300px'}
							display={'flex'}
							marginX="auto"
							component={'img'}
							borderRadius={'50%'}
							src={profile}
							boxShadow={'-2px 2px 48px 10px rgba(0,0,0,0.75)'}
						></Box>
					</Grid>
					<Grid item xs={12} md={6} color={'white'}>
						<Typography
							variant="body1"
							component={'h2'}
							sx={{
								fontFamily: 'monospace',
							}}
						>
							Desenvolvedor Fullstack
						</Typography>
						<Typography
							variant="h2"
							component={'h1'}
							sx={{
								fontWeight: 'bold',
								background:
									'linear-gradient(90deg, #00D9F5 0%, #7678ED 100%)',
								backgroundClip: 'text',
								textFillColor: 'transparent',
							}}
						>
							Abner Suhett
						</Typography>
						<Typography
							variant="body2"
							component={'p'}
							sx={{
								color: '#ffffff9e',
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolor sint sit dolorem ipsa officia, hic amet
							ipsam consequuntur praesentium voluptatem maxime
							animi illum blanditiis, deserunt inventore veritatis
							asperiores. Nemo, dolores.
						</Typography>
					</Grid>
				</Grid>

				<Grid container marginY="10%" marginX={'10%'}>
					<Grid item xs={10} color={'#ffff'}>
						<Typography
							variant="h5"
							component={'h3'}
							marginLeft={'14px'}
							fontWeight={'bold'}
						>
							Sobre mim
						</Typography>
						<Box
							sx={{
								borderLeft: '4px solid #7678ED',
								padding: '10px',
								borderRadius: '2px',
							}}
						>
							<Typography variant="body1" component={'p'}>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Dolorem consequatur in neque
								velit consequuntur? Architecto sed nemo dolor
								odit, explicabo assumenda perferendis!
								Reiciendis molestias suscipit sunt qui commodi.
								Non, numquam!
							</Typography>
						</Box>
					</Grid>
				</Grid>

				<Grid
					container
					color={'#ffff'}
					gap={4}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					marginY={4}
				>
					<Grid item xs={12} md={9}>
						<Typography
							variant="h5"
							fontWeight={'bold'}
							textAlign={'start'}
						>
							Projetos
						</Typography>
					</Grid>

					{projetos.map((projeto) => (
						<Grid key={projeto.nome} item xs={12} sm={4} md={3}>
							<ProjectCard
								nome={projeto.nome}
								techs={projeto.techs}
								deploy={projeto.deploy}
								repositorio={projeto.repositorio}
								img={projeto.img}
							/>
						</Grid>
					))}

					<Grid
						xs={12}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<Button
							variant="contained"
							sx={{
								padding: '20px',
								fontFamily: 'monospace',
								background:
									'linear-gradient(90deg, #7678ED 0%, #00D9F5 100%)',
							}}
							onClick={() => navigate('/projetos')}
						>
							Veja todos os Projetos
						</Button>
					</Grid>
				</Grid>

				<Grid
					container
					color={'white'}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					marginY={6}
					gap={1}
				>
					<Grid item xs={12} md={9} marginBottom={4}>
						<Typography
							variant="h5"
							component={'h3'}
							fontWeight={'bold'}
						>
							Habilidades
						</Typography>
					</Grid>

					{skills.map((skill) => (
						<Grid
							key={skill.caption}
							item
							xs={4}
							md={3}
							display={'flex'}
							justifyContent={'center'}
						>
							<Skill img={skill.img} caption={skill.caption} />
						</Grid>
					))}
				</Grid>

				<Grid
					container
					height={'20vh'}
					flexDirection={'column'}
					alignItems={'center'}
					justifyContent={'center'}
					gap={3}
					color={'white'}
				>
					<Grid item display={'flex'} gap={3}>
						<Box
							component={'a'}
							target="_blank"
							href="mailto:abner.suhett@gmail.com"
						>
							<Box component={'img'} src={mailIcon}></Box>
						</Box>
						<Box
							component={'a'}
							target="_blank"
							href="https://br.linkedin.com/in/abner-suhett-8bbb45175"
						>
							<Box component={'img'} src={linkedinIcon}></Box>
						</Box>
						<Box
							component={'a'}
							target="_blank"
							href="https://github.com/abnersuhettdev"
						>
							<Box component={'img'} src={githubIcon}></Box>
						</Box>
					</Grid>
					<Typography variant="caption" component={'span'}>
						Feito por Abner Suhett - 2023
					</Typography>
				</Grid>
			</Container>
		</>
	);
};
