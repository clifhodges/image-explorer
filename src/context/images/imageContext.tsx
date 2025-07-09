import { createContext } from 'react';

import { ImageFile } from '@/hooks/useFetchImages';

interface ImageContextType {
	images: ImageFile[];
	refetch: (query?: string) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export default ImageContext;
