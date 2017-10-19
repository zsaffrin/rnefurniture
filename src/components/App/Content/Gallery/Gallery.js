import React from 'react';
import Container from '../../Container/Container';
import ImageThumb from './ImageThumb/ImageThumb';
import './Gallery.css';
import galleryData from './galleryData.json';

const galleryContent = galleryData.categories.map(({ id, title, desc, imageCount, imageKey }) => {
    const bgImage = require(`../../../../images/gallery/${imageKey}/${imageKey}_main.jpg`);

    const imageThumbs = [];
    for (let i = 1; i <= imageCount; i += 1) {
        const thumb = require(`../../../../images/gallery/${imageKey}/${imageKey}-${i}_t.jpg`);
        imageThumbs.push(
            <ImageThumb src={thumb} alt={`${imageKey}${i}`} key={i} />
        );
    }
    
    const style = {
        background: `url('${bgImage}') center center no-repeat`,
    };

    return (
        <div className="Gallery-section" key={id} style={style}>
            <div className="overlay">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
                <div className="image-strip">
                    {imageThumbs}
                </div>
            </div>
        </div>
    );
});

const Gallery = () => (
	<div className="Gallery">
        <Container>
            <h2>Gallery</h2>
            {galleryContent}
        </Container>
	</div>
);

export default Gallery;
