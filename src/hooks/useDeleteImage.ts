'use client';

import { useState } from 'react';
import { axiosInstance } from '@/api/axiosInstance';

export interface UseDeleteImageReturn {
	loading: boolean;
	error: string | null;
	deleteImage: (fileName: string) => void;
}

export default function useDeleteImage(): UseDeleteImageReturn {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const deleteImage = async (fileName: string) => {
		const url = `/files/${fileName.replaceAll(' ', '-')}`;
		try {
			setLoading(true);
			setError(null);
			await axiosInstance.delete(url);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'An error occurred');
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		error,
		deleteImage,
	};
}
