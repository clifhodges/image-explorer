import { Button } from '@mui/material';
import React, { MouseEvent, MouseEventHandler } from 'react';

export default function ImageUploadButton({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<Button variant="contained" color="primary" type="button" onClick={onClick}>
			UPLOAD
		</Button>
	);
}
