'use client';

import { useImageContext } from '@/context/images/hooks/useImageContext';
import useFetchImages from '@/hooks/useFetchImages';
import { FormControl, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState<string>('');

	const { refetch } = useImageContext();

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		setSearchInput(() => target.value);
		refetch(target.value);
	};

	return (
		<FormControl>
			<TextField
				label="Search images..."
				size="small"
				fullWidth
				variant="outlined"
				slotProps={{
					input: {
						type: 'search',
					},
				}}
				sx={{
					'& .MuiOutlinedInput-root': {
						color: '#fff',
						fontFamily: 'Arial',
						fontWeight: 'bold',
						'& .MuiOutlinedInput-notchedOutline': {
							borderColor: '#fff',
							borderWidth: '2px',
						},
					},
					'& .MuiInputLabel-outlined': {
						color: '#fff',
						fontWeight: 'bold',
					},
				}}
				value={searchInput}
				onChange={handleSearchChange}
			/>
		</FormControl>
	);
}
