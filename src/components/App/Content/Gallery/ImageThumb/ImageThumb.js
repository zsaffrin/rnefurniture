import React from 'react';
import { string } from 'prop-types';
import './ImageThumb.css';

const ImageThumb = ({ src, alt }) => (
    <img className="ImageThumb" src={src} alt={alt} />
);
ImageThumb.propTypes = {
    src: string,
    alt: string,
};
ImageThumb.defaultProps = {
    src: '',
    alt: '',
};

export default ImageThumb;
