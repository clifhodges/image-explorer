'use client';

import { Grid, Typography } from '@mui/material';
import { useImageContext } from '@/context/images/hooks/useImageContext';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const ImageCard = dynamic(() => import('./ImageCard'));

export default function ImageGrid() {
	const { images, refetch } = useImageContext();

	useEffect(() => {
		refetch();
	}, []);

	return (
		<>
			<Grid size={12}>
				<Typography variant="h4">
					{images?.length} image{images?.length !== 1 ? 's' : ''}
				</Typography>
			</Grid>
			<Grid container size={12} spacing={4} py={2}>
				{images &&
					images.map((img, index) => (
						<ImageCard key={`${img.fileName}-${index}`} image={img} />
					))}
			</Grid>
		</>
	);
}
