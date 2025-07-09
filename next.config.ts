import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		minimumCacheTTL: 10,
		remotePatterns: [new URL('http://localhost:8000/files/**')],
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};

export default nextConfig;
