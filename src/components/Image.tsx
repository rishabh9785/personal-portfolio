import React from 'react';
import { getAssetPath } from '@/utils/assetUtils';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className = '' }: ImageProps) => {
  const imagePath = getAssetPath(src);
  console.log(imagePath)
  return (
    <img 
      src={imagePath} 
      alt={alt} 
      className={className} 
    />
  );
};

export default Image;