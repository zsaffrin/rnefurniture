import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './Footer.css';

const Footer = () => (
    <Container>
        <footer className="Footer">
            <div className="Footer-col">
                All images &copy; RNE Furniture
            </div>
            <div className="Footer-col">
                Site design by&nbsp;
                <a
                    href="http://zachsaffrin.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="subtle-link"
                >
                    Zach Saffrin
                </a><br />
                <Link to="/colophon" className="subtle-link">
                    Full site credits / Colophon
                </Link>
            </div>
        </footer>
    </Container>
);

export default Footer;
