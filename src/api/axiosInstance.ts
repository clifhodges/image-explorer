import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:8000',
	headers: {
		'Content-Type': 'multipart/form-data',
	},
});
