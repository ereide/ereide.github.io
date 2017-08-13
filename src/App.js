import React, { Component } from 'react';
import './App.css';

import Main from './views/main.js'
import Bio from './views/bio.js'
import Experience from './views/experience.js'
import Projects from './views/projects.js'
import Skills from './views/skills.js'
import About from './views/about.js'

//import {Main, Skills, About, Projects, Bio, Experience} from './views/'

import createHistory from 'history/createBrowserHistory'


import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  Nav, Navbar, NavItem,
  Grid
} from 'react-bootstrap'

const browserHistory = createHistory()


class Header extends React.Component {
  render() { 
    return( 
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}> Eivind Roson Eide </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header> 
        <Navbar.Collapse>
          <Nav>
            <NavItem><Link to="/bio">Education</Link></NavItem>
            <NavItem><Link to="/projects">Projects</Link></NavItem>
            <NavItem><Link to="/experience">Experience</Link></NavItem>
            <NavItem><Link to="/skills">Skills</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Footer extends React.Component {
  render () {
    return (
      <Grid>
        <hr />
        <footer>
          <p>2017 Eivind Roson Eide &middot; <a href="mailto:contact@eivindeide.me">Email</a></p>
        </footer>
      </Grid> 
    );
  }
}

const routediv = (
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/bio" component={Bio} />
      <Route path="/experience" component={Experience} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
    </div>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}> 
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
