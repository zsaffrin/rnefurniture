import React from 'react';
import Container from '../Container/Container';
import './Footer.css';

const Footer = () => (
    <Container>
        <footer className="Footer">
            <div className="Footer-col">
                All images &copy; RNE Furniture
            </div>
            <div className="Footer-col">
                Site design by Zach Saffrin<br />
                Full site credits / Colophon
            </div>
        </footer>
    </Container>
);

export default Footer;
