import { Home } from '@mui/icons-material';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Box sx={{ flexGrow: 1, height: '10vh' }}>
			<AppBar
				position="static"
				sx={{
					boxShadow: '0',
					bgcolor: '#041f31',
					color: '#f1f1f1 ',
				}}
			>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						fontSize: '13px',
					}}
				>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={() => navigate('/')}
					>
						<Home />
					</IconButton>
					<Grid
						item
						sx={{
							display: 'flex',
						}}
						gap={1}
					>
						<Button
							color="inherit"
							sx={{
								fontSize: '0.8rem',
								'&:hover': {
									backgroundColor: '#ffffff1b',
								},
							}}
							onClick={() => navigate('/projetos')}
						>
							Projetos
						</Button>
						<Button
							variant="contained"
							sx={{
								fontSize: '0.8rem',
								background:
									'linear-gradient(90deg, #7678ED 0%, #00D9F5 100%)',
								color: '#00000',

								'&:hover': {
									background:
										'linear-gradient(90deg, #00D9F5 0%, #7678ED 100%)',
								},
							}}
							onClick={() =>
								window.open(
									'https://api.whatsapp.com/send?phone=5524993129149&text=Ol%C3%A1!',
									'_blank',
								)
							}
						>
							Contato
						</Button>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
