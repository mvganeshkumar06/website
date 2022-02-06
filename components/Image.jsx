import React from 'react';
import { ImageStyled } from '../styles';

const Image = ({ src, alt, sizes }) => {
	return <ImageStyled src={src} alt={alt} sizes={sizes} />;
};

export default Image;
