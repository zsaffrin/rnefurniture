import React from 'react';
import leafplate from '../../../../images/leafplate.svg';
import './Contact.css';

const Contact = () => (
    <div className="Contact">
        <div className="Contact-content">
            <div className="content-block">
                <img src={leafplate} alt="The Rustic New England Furniture Company"/>
                <h6>
                    The Rustic New<br />
                    England Furniture<br />
                    Company
                </h6>
                <p>
                    2 Tower Drive<br />
                    Dover, MA 02030
                </p>
            </div>
            <div className="content-block">
                <p>602-768-8818</p>
                <p>rnefurniture@gmail.com</p>
            </div>
        </div>
    </div>
);

export default Contact;
