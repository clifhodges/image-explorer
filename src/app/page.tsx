'use client';

import ImageGrid from '@/components/ImageGrid';
import TopBar from '@/components/TopBar';
import { ImageProvider } from '@/context/images/hooks/useImageContext';
import { Container, Grid } from '@mui/material';

export default function Home() {
	return (
		<ImageProvider>
			<Container>
				<Grid container size={12}>
					<TopBar />
					<ImageGrid />
				</Grid>
			</Container>
		</ImageProvider>
	);
}
