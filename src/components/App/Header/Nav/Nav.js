import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';
import './Nav.css';

const Nav = () => {
    const curPath = window.location.pathname;

    return (
        <div className="Nav">
            <Container>
                <div className="Nav-items">
                    <Link to="/" className="Nav-item" >Home</Link>

                    <Link
                        to="/about"
                        className={`Nav-item ${curPath === '/about' ? 'active' : ''}`}
                    >
                        About
                    </Link>

                    <Link
                        to="/gallery"
                        className={`Nav-item ${curPath === '/gallery' ? 'active' : ''}`}
                    >
                        Gallery
                    </Link>

                    <Link
                        to="/contact"
                        className={`Nav-item ${curPath === '/contact' ? 'active' : ''}`}
                    >
                        Contact
                    </Link>

                    <Link
                        to="/education"
                        className={`Nav-item ${curPath === '/education' ? 'active' : ''}`}
                    >
                        Training/Classes
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Nav;
