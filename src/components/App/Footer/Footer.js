import React from 'react';
import Container from '../Container/Container';
import './Footer.css';

const Footer = () => (
    <Container>
        <div className="Footer flex flex-wrap flex-justify-between size-sm p2">
            <div className="center p2">
                All images &copy; RNE Furniture
            </div>
            <div className="center p2">
                Site design by Zach Saffrin - Full site credits / Colophon
            </div>
        </div>
    </Container>
);

export default Footer;
