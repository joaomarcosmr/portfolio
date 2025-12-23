// Base path para GitHub Pages
export const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

// Helper para gerar URLs de imagens
export const getImagePath = (path: string) => `${basePath}${path}`;

