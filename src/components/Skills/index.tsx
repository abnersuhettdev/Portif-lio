/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';

interface ISkill {
	img: string;
	caption: string;
}

export const Skill: React.FC<ISkill> = ({ img, caption }) => {
	return (
		<>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				gap={2}
			>
				<Box component={'img'} width={'80px'} src={img}></Box>
				<Typography
					variant="caption"
					component={'span'}
					fontFamily={'monospace'}
				>
					{caption.toUpperCase()}
				</Typography>
			</Box>
		</>
	);
};
