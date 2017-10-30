import React, { Component } from 'react';
import Container from '../../Container/Container';
import ImageThumb from './ImageThumb/ImageThumb';
import ImageViewer from './ImageViewer/ImageViewer';
import Modal from '../../Modal/Modal';
import './Gallery.css';
import galleryData from './galleryData.json';

class Gallery extends Component {
    static getImage(imagePath) {
        try {
            const image = require(`../../../../images/gallery/${imagePath}`);
            return image;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    constructor(props) {
        super(props);
        this.state = {
            showViewer: false,
            viewerImageKey: '',
            viewerImageNum: 0,
        };

        this.viewImage = this.viewImage.bind(this);
        this.closeViewer = this.closeViewer.bind(this);
        this.renderContents = this.renderContents.bind(this);
    }

    viewImage(imageKey, imageNum) {
        this.setState({
            showViewer: true,
            viewerImageKey: imageKey,
            viewerImageNum: imageNum,
        });
    }

    closeViewer() {
        this.setState({ showViewer: false });
    }

    renderContents() {
        return galleryData.categories.map(({ id, title, desc, imageCount, imageKey }) => {
            const bgImage = Gallery.getImage(`${imageKey}/${imageKey}_main.jpg`);
            const style = {
                background: `url('${bgImage}') center center no-repeat`,
            };

            return (
                <div className="Gallery-section" key={id} style={style}>
                    <div className="overlay">
                        <div className="title">{title}</div>
                        <div className="desc">{desc}</div>
                        <div className="image-strip">
                            {this.renderCategoryThumbs(imageKey, imageCount)}
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderCategoryThumbs(imageKey, imageCount) {
        const thumbs = [];
        for (let i = 1; i <= imageCount; i += 1) {
            const thumbImage = Gallery.getImage(`${imageKey}/${imageKey}-${i}_t.jpg`);
            const thumbElement = (
                <ImageThumb
                    src={thumbImage}
                    alt={`${imageKey}${i}`}
                    key={i}
                    onClick={() => this.viewImage(imageKey, i)}
                />
            );
            thumbs.push(thumbElement);
        }

        return thumbs;
    }

    render() {
        let overlay;
        if (this.state.showViewer) {
            const { viewerImageKey, viewerImageNum } = this.state;
            const imageSource = Gallery.getImage(`${viewerImageKey}/${viewerImageKey}-${viewerImageNum}.jpg`);

            overlay = (
                <Modal closeModal={this.closeViewer}>
                    <ImageViewer src={imageSource} alt={`${viewerImageKey}${viewerImageNum}`} />
                </Modal>
            );
        }
        
        return (
            <div className="Gallery">
                <Container>
                    {overlay}

                    <h2>Gallery</h2>
                    {this.renderContents()}
                </Container>
            </div>
        );
    }
}

export default Gallery;
