import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Nav, Navbar, NavItem, Grid } from 'react-bootstrap';

import AsyncLoadable from './components/asyncloading.js';

const AsyncMain = AsyncLoadable({
  loader: () => import('./containers/main')
});

const AsyncBio = AsyncLoadable({
  loader: () => import('./containers/bio')
});

const AsyncExperience = AsyncLoadable({
  loader: () => import('./containers/experience')
});

const AsyncProjects = AsyncLoadable({
  loader: () => import('./containers/projects')
});

const AsyncSkills = AsyncLoadable({
  loader: () => import('./containers/skills')
});

const AsyncAbout = AsyncLoadable({
  loader: () => import('./containers/about')
});

class Header extends React.Component {
  render() {
    return (
      <Navbar bsStyle="pills">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}> Eivind Roson Eide </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <Link to="/bio">Education</Link>
            </NavItem>
            <NavItem>
              <Link to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link to="/experience">Experience</Link>
            </NavItem>
            <NavItem>
              <Link to="/skills">Skills</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>
            2017 Eivind Roson Eide &middot;{' '}
            <a href="mailto:contact@eivindeide.me">Email</a>
          </p>
        </footer>
      </Grid>
    );
  }
}

const routediv = (
  <div>
    <Route exact path="/" component={AsyncMain} />
    <Route exact path="/about" component={AsyncAbout} />
    <Route exact path="/bio" component={AsyncBio} />
    <Route exact path="/experience" component={AsyncExperience} />
    <Route exact path="/skills" component={AsyncSkills} />
    <Route exact path="/projects" component={AsyncProjects} />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Grid>
            {routediv}
          </Grid>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
