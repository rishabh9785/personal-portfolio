export const getAssetPath = (path: string): string => {
    // Remove leading slash if present
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
    const isProduction = import.meta.env.PROD;
    const basePath = isProduction ? '.' : '';
    
    return `${basePath}/${normalizedPath}`;
  };