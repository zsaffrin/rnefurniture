import React from 'react';
import Container from '../Container/Container';
import Nav from './Nav/Nav';
import './Header.css';
import leafplate from '../../../images/leafplate.svg';

const Header = () => (
    <header className="Header">
        <Container>
            <img
                src={leafplate}
                alt="Rustic New England Furniture"
                style={{
                    height: '7em',
                    maxWidth: '100%',
                }}
            />
            <h1>Rustic New England Furniture</h1>
        </Container>
        
        <Nav />
    </header>
);

export default Header;
