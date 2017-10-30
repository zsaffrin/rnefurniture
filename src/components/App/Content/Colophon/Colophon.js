import React from 'react';
import './Colophon.css';

const Colophon = () => (
    <div className="Colophon">
        <h2>Colophon</h2>

        <div className="Colophon-entry">
            <div className="title">Site Design and Development</div>
            <div className="credit">
                <div className="label">
                    Zach Saffrin
                </div>
                <div className="link">
                    <a
                        href="http://zachsaffrin.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        http://zachsaffrin.com
                    </a>
                </div>
            </div>
        </div>

        <div className="Colophon-entry">
            <div className="title">Hosting</div>
            <div className="credit">
                <div className="label">
                    DigitalOcean
                </div>
                <div className="link">
                    <a
                        href="https://m.do.co/c/7d1bf52d239c"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        http://digitalocean.com
                    </a>
                </div>
            </div>
        </div>

        <div className="Colophon-entry">
            <div className="title">Stack</div>
            <div className="credit">
                <div className="label-link">
                    <a
                        href="https://www.ubuntu.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Ubuntu
                    </a>
                    &nbsp;&gt;&nbsp;
                    <a
                        href="https://nodejs.org"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Node.js
                    </a>
                    &nbsp;&gt;&nbsp;
                    <a
                        href="https://expressjs.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Express
                    </a>
                    &nbsp;&gt;&nbsp;
                    <a
                        href="https://reactjs.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        React
                    </a>
                </div>
            </div>
        </div>

        <div className="Colophon-entry">
            <div className="title">Fonts</div>
            <div className="credit">
                <div>
                    <div className="label">
                        Lora Regular,&nbsp;
                        <span className="italic">Lora Italic</span>
                    </div>
                    <div className="link">
                        <a
                            href="http://www.cyreal.org/2012/07/lora/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            http://www.cyreal.org/2012/07/lora/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Colophon;
