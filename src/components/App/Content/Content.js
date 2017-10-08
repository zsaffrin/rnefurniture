import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from '../Container/Container';
import Home from './Home/Home';
import About from './About/About';

const Content = () => (
	<Container>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Redirect to="/" />
		</Switch>
	</Container>
);

export default Content;
