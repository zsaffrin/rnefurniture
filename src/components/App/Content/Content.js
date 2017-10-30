import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from '../Container/Container';
import Home from './Home/Home';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Colophon from './Colophon/Colophon';

const Content = () => (
    <Container>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/education" component={Education} />
            <Route path="/colophon" component={Colophon} />
            <Redirect to="/" />
        </Switch>
    </Container>
);

export default Content;
