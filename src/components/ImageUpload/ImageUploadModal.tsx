import { useState } from 'react';
import { Button, Dialog, DialogContent, Grid, Typography } from '@mui/material';
import { axiosInstance } from '@/api/axiosInstance';
import { useImageContext } from '@/context/images/hooks/useImageContext';

export default function ImageUploadModal({
	open,
	handleClose,
}: {
	open: boolean;
	handleClose: () => void;
}) {
	const { refetch } = useImageContext();
	const [file, setFile] = useState<Blob>();
	const [submitted, setSubmitted] = useState<boolean>(false);

	const handleFileChange = (event: any) => {
		const curFile = event.target.files[0];
		setFile(curFile);
	};

	const handleFileUpload = async (event: any) => {
		event.preventDefault();
		setSubmitted(true);
		try {
			const formData = new FormData();
			if (file) {
				formData.append('file', file);
				await axiosInstance.post('/upload', formData);
			}
			refetch();
			handleClose();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogContent>
				<form onChange={handleFileChange} onSubmit={handleFileUpload}>
					<Grid container size={12} p={4}>
						<input type="file" accept="image/*" />
						{submitted && !file && (
							<Typography variant="body1">
								At least one file must be uploaded
							</Typography>
						)}
					</Grid>

					<Grid container size={12} justifyContent="space-around">
						<Button
							variant="contained"
							color="error"
							type="button"
							onClick={handleClose}
						>
							Cancel
						</Button>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							disabled={!file}
						>
							Upload
						</Button>
					</Grid>
				</form>
			</DialogContent>
		</Dialog>
	);
}
