/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface ICardProjeto {
	nome: string;
	techs: string[];
	img: string;
	deploy: string;
	repositorio: string;
}

export const ProjectCard: React.FC<ICardProjeto> = ({
	nome,
	img,
	deploy,
	repositorio,
	techs,
}) => {
	return (
		<Card
			sx={{
				bgcolor: '#222525',
				color: '#ffff',
				height: 420,
				maxWidth: '300px',
				position: 'relative',
			}}
		>
			<CardMedia sx={{ height: 200 }} image={img} title={nome} />
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
					{nome}
				</Typography>

				<Grid container gap={2}>
					{techs.map((tech) => (
						<Typography
							key={tech}
							sx={{
								background:
									'linear-gradient(90deg, #00D9F5 0%, #7678ED 100%)',
								width: 'fit-content',
								padding: 1,
								borderRadius: '5px',
								color: 'white',
								fontFamily: 'monospace',
							}}
							variant="caption"
							component={'p'}
						>
							{tech}
						</Typography>
					))}
				</Grid>
			</CardContent>
			<CardActions sx={{ position: 'absolute', bottom: 0, right: 0 }}>
				<Button
					variant="outlined"
					sx={{
						color: '#7678ED',
						borderColor: '#7678ED',

						'&:hover': {
							borderColor: '#7678ED',
						},
					}}
					size="small"
					onClick={() => window.open(deploy, '_blank')}
				>
					Deploy
				</Button>
				<Button
					variant="contained"
					size="small"
					onClick={() => window.open(repositorio, '_blank')}
				>
					Repositório
				</Button>
			</CardActions>
		</Card>
	);
};
