'use client';

import { useState } from 'react';
import { axiosInstance } from '@/api/axiosInstance';

export interface ImageFile {
	fileName: string;
	url: string;
}

interface ImageResponse {
	count: number;
	files: Array<{
		name: string;
		size: number;
		uploadDate: string;
		url: string;
	}> | null;
}

export interface UseFetchImagesReturn {
	data: ImageFile[] | null;
	loading: boolean;
	error: string | null;
	refetch: (query?: string) => void;
}

export default function useFetchImages(): UseFetchImagesReturn {
	const [data, setData] = useState<ImageFile[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const fetchImages = async (query?: string) => {
		const url = `/files${query ? `?query=${query}` : ''}`;
		try {
			setLoading(true);
			setError(null);
			const response = await axiosInstance.get<ImageResponse>(url);
			setData(
				response.data.files?.map((file) => ({
					fileName: file.name,
					url: file.url,
				})) ?? []
			);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'An error occurred');
		} finally {
			setLoading(false);
		}
	};

	return {
		data,
		loading,
		error,
		refetch: fetchImages,
	};
}
