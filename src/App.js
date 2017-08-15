import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Nav, Navbar, NavItem, Grid } from 'react-bootstrap';

import asyncComponent from './asyncloading.js';

const AsyncMain = asyncComponent(() => import('./views/main'));
const AsyncBio = asyncComponent(() => import('./views/bio'));
const AsyncExperience = asyncComponent(() => import('./views/experience'));
const AsyncProjects = asyncComponent(() => import('./views/projects'));
const AsyncSkills = asyncComponent(() => import('./views/skills'));
const AsyncAbout = asyncComponent(() => import('./views/about'));

/*
import Main from './views/main.js'
import Bio from './views/bio.js'
import Experience from './views/experience.js'
import Projects from './views/projects.js'
import Skills from './views/skills.js'
import About from './views/about.js'
*/
//import {Main, Skills, About, Projects, Bio, Experience} from './views/'

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse>
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
