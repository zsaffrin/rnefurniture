import React from 'react';
import { func, string } from 'prop-types';
import './ImageThumb.css';

const ImageThumb = ({ src, alt, onClick }) => (
    <img className="ImageThumb" src={src} alt={alt} onClick={onClick} />
);
ImageThumb.propTypes = {
    src: string,
    alt: string,
    onClick: func,
};
ImageThumb.defaultProps = {
    src: '',
    alt: '',
    onClick: () => {},
};

export default ImageThumb;
