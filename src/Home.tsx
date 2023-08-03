import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import curriculo from './assets/Abner+Resume+.pdf';
import githubIcon from './assets/icons/github.png';
import linkedinIcon from './assets/icons/linkedin.svg';
import mailIcon from './assets/icons/mail.png';
import profile from './assets/Perfil.jpeg';
import calculatorImg from './assets/projetos/calculadora.png';
import doItimg from './assets/projetos/do-it.png';
import lawyersImg from './assets/projetos/Lawyers.png';
import gitIcon from './assets/skills/git.png';
import jsIcon from './assets/skills/javascript.png';
import muiIcon from './assets/skills/mui.png';
import nodeIcon from './assets/skills/node.png';
import psqlIcon from './assets/skills/Postgres.png';
import reactIcon from './assets/skills/React.png';
import reduxIcon from './assets/skills/Redux.png';
import scIcon from './assets/skills/styled-components.png';
import tsIcon from './assets/skills/Typescript.png';
import { ProjectCard } from './components/Card';
import { Navbar } from './components/Navbar';
import { Skill } from './components/Skills';

const skills = [
	{
		img: jsIcon,
		caption: 'Javascript',
	},
	{
		img: tsIcon,
		caption: 'Typescript',
	},
	{
		img: reactIcon,
		caption: 'React',
	},
	{
		img: muiIcon,
		caption: 'Material UI',
	},
	{
		img: scIcon,
		caption: 'Styled Components',
	},
	{
		img: reduxIcon,
		caption: 'Redux',
	},
	{
		img: psqlIcon,
		caption: 'Postgres',
	},
	{
		img: nodeIcon,
		caption: 'Node',
	},
	{
		img: gitIcon,
		caption: 'Git',
	},
];

const projetos = [
	{
		nome: 'Do It!',
		techs: ['HTML', 'CSS', 'Javascript', 'GIT E GITHUB'],
		img: doItimg,
		deploy: 'https://abnersuhettdev.github.io/Criador-de-Notas/',
		repositorio: 'https://github.com/abnersuhettdev/Criador-de-Notas',
	},
	{
		nome: 'Lawyers',
		techs: ['HTML', 'CSS', 'Bootstrap'],
		img: lawyersImg,
		deploy: 'https://abnersuhettdev.github.io/lawyers/',
		repositorio: 'https://github.com/abnersuhettdev/lawyers',
	},
	{
		nome: 'Calculadora',
		techs: ['HTML', 'CSS', 'Javascript'],
		img: calculatorImg,
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
							borderRadius={'2%'}
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
							Um jovem desenvolvedor, Bem vindo ao meu portifólio!
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
							marginBottom={1}
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
								Estudante de tecnologia, cursando Análise e
								desenvolvimento de sistemas, tenho 22 anos e
								estou em processo de início de carreira, venho
								aprendendo as tecnologias essenciais de um web
								developer enquanto compartilho o conhecimento
								que venho adquirindo através de projetos
								próprios, busco minha primeira experiência no
								mercado tech.
							</Typography>
							<Button
								sx={{
									marginTop: 2,
									color: 'white',
									borderColor: 'white',

									'&:hover': {
										color: '#7678ED',
										borderColor: '#7678ed',
									},
								}}
								href={curriculo}
								variant="outlined"
								type="download"
								size="small"
							>
								Baixar CV
							</Button>
						</Box>
					</Grid>
				</Grid>

				<Grid
					container
					color={'#ffff'}
					gap={5}
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
						<Grid
							key={projeto.nome}
							item
							xs={12}
							display={'flex'}
							justifyContent={'center'}
							sm={4}
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
