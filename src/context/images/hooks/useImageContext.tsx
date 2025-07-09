'use client';

import { PropsWithChildren, useContext, useEffect, useState } from 'react';

import ImageContext from '../imageContext';
import useFetchImages from '@/hooks/useFetchImages';

export interface ImageProviderProps extends PropsWithChildren {}

export function ImageProvider({ children }: ImageProviderProps) {
	const { data: images, refetch } = useFetchImages();

	return (
		<ImageContext.Provider value={{ images: images ?? [], refetch }}>
			{children}
		</ImageContext.Provider>
	);
}

export const useImageContext = () => {
	const context = useContext(ImageContext);
	if (!context) {
		throw new Error('useImageContext must be used within an ImageProvider');
	}
	return context;
};
