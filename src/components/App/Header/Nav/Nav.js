import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';
import './Nav.css';

const Nav = () => (
	<div className="Nav">
        <Container>
            <div className="Nav-items">
                <Link to="/" className="Nav-item">Home</Link>
                <Link to="/about" className="Nav-item">About</Link>
                <Link to="/gallery" className="Nav-item">Gallery</Link>
                <Link to="/contact" className="Nav-item">Contact</Link>
                <Link to="/education" className="Nav-item">Training/Classes</Link>
            </div>
        </Container>
	</div>
);

export default Nav;