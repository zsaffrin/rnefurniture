import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';
import './Container.css';

const Container = ({ children }) => (
    <div className="Container">
        {children}
    </div>
);
Container.propTypes = {
    children: oneOfType([
        arrayOf(node),
        node,
    ]),
};
Container.defaultProps = {
    children: [],
};

export default Container;
