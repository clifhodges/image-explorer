'use client';

import { Grid } from '@mui/material';
import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import ImageUploadButton from '../ImageUpload/ImageUploadButton';
import ImageUploadModal from '../ImageUpload/ImageUploadModal';

export default function TopBar() {
	const [open, setOpen] = useState<boolean>(false);

	const handleUploadClick = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Grid container size={12} my={4}>
			<Grid size={8}>
				<SearchBar />
			</Grid>
			<Grid container size={4} justifyContent={'flex-end'}>
				<ImageUploadButton onClick={handleUploadClick} />
			</Grid>

			<ImageUploadModal open={open} handleClose={handleClose} />
		</Grid>
	);
}
