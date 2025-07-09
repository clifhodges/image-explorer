import { useImageContext } from '@/context/images/hooks/useImageContext';
import useDeleteImage from '@/hooks/useDeleteImage';
import { ImageFile } from '@/hooks/useFetchImages';
import { Delete, Preview } from '@mui/icons-material';
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Grid,
	Typography,
} from '@mui/material';
import { useState } from 'react';

export default function ImageCard({ image }: { image: ImageFile }) {
	const { refetch } = useImageContext();
	const { deleteImage } = useDeleteImage();
	const [open, setOpen] = useState<boolean>(false);
	const [confirmationModalOpen, setConfirmationModalOpen] =
		useState<boolean>(false);

	const handlePopoverOpen = () => {
		setOpen(true);
	};
	const handlePopoverClose = () => {
		setOpen(false);
	};
	const handleDeleteImage = () => {
		deleteImage(image.fileName);
		refetch();
	};
	const handleDeleteConfirmation = () => {
		setConfirmationModalOpen(true);
	};
	const handleCloseConfirmationModal = () => {
		setConfirmationModalOpen(false);
	};

	return (
		<>
			<Grid
				size={{ lg: 6, xs: 12 }}
				width="100%"
				height={'20rem'}
				position="relative"
				sx={{
					backgroundColor: 'Background',
					backgroundImage: `url('${image.url}')`,
					backgroundRepeat: 'no-repeat',
					backgroundBlendMode: 'normal',
					backgroundPosition: 'center',
					backgroundSize: '100%',
					transition: 'all .5s ease',
					borderRadius: 5,
					'&:hover': {
						backgroundSize: '102%',
						opacity: 0.3,
						backgroundBlendMode: 'lighten',
					},
				}}
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				<Grid
					container
					size={12}
					position="absolute"
					justifyContent="center"
					sx={{
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					<Typography
						component={'div'}
						sx={{
							backgroundColor: 'rgba(0,0,0,0.7)',
							borderRadius: 3,
							py: 1,
							px: 2,
							display: open ? 'block' : 'none',
						}}
					>
						<Typography component={'span'}>
							<Preview
								sx={{ fontSize: 56, '&:hover': { cursor: 'pointer' } }}
							/>
						</Typography>
						<Typography component={'span'} onClick={handleDeleteConfirmation}>
							<Delete sx={{ fontSize: 56, '&:hover': { cursor: 'pointer' } }} />
						</Typography>
					</Typography>
				</Grid>
				<Dialog
					open={confirmationModalOpen}
					onClose={handleCloseConfirmationModal}
				>
					<DialogContent>
						<DialogTitle>
							Are you sure you want to permanently delete {image.fileName}?
						</DialogTitle>
						<Grid container size={12} justifyContent="space-around">
							<Button
								variant="contained"
								color="error"
								type="button"
								onClick={handleCloseConfirmationModal}
								sx={{ textTransform: 'none' }}
							>
								No, go back to safety!
							</Button>
							<Button
								variant="contained"
								color="primary"
								type="button"
								onClick={handleDeleteImage}
								sx={{ textTransform: 'none' }}
							>
								Yes, delete it
							</Button>
						</Grid>
					</DialogContent>
				</Dialog>
			</Grid>
		</>
	);
}
