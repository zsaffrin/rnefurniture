import React from 'react';
import { arrayOf, element, oneOfType } from 'prop-types';
import './Container.css';

const Container = ({ children }) => (
    <div className="Container">
        {children}
    </div>
);
Container.propTypes = {
    children: oneOfType([
        arrayOf(element),
        element,
    ]),
};
Container.defaultProps = {
    children: [],
};

export default Container;
