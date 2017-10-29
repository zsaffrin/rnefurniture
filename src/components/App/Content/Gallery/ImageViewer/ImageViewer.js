import React from 'react';
import { string } from 'prop-types';
import './ImageViewer.css';

const ImageViewer = ({ src, alt }) => (
    <div className="ImageViewer">
        <img src={src} alt={alt} />
    </div>
);
ImageViewer.propTypes = {
    src: string,
    alt: string,
};
ImageViewer.defaultProps = {
    src: '',
    alt: '',
};

export default ImageViewer;
