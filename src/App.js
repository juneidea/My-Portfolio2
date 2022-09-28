import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import './stylesheets/App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

 //This returns a childFactory to provide to TransitionGroup
 const childFactoryCreator = (classNames) => (
  (child) => (
    React.cloneElement(child, {
      classNames
    })
  )
);

// class component
class App extends Component {
  constructor() {
    super ()
    this.state = {
      previousPage: 1 ,
      goPage: 1
    }
    this.getPage = this.getPage.bind(this)
  }

  async getPage(num) {
    try {
      await this.setState({ 
        previousPage: this.state.goPage,
        goPage: num })
    } catch (err) {
      console.error(err)
    }
  }

  render() {

    return (
      <div className="App">
        <div className="nav">
          <div className="glowing">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="glowing2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <NavLink exact to="/" activeClassName="active" onClick={() => {this.getPage(1)}}>HOME</NavLink>
          <NavLink to="/about" activeClassName="active" onClick={() => {this.getPage(2)}}>ABOUT</NavLink>
          <NavLink to="/projects" activeClassName="active" onClick={() => {this.getPage(3)}}>PROJECTS</NavLink>
          <NavLink to="/contact" activeClassName="active" onClick={() => {this.getPage(4)}}>CONTACT</NavLink>
        </div>
        <Route render={({location}) => (
        <TransitionGroup childFactory={childFactoryCreator( this.state.goPage === this.state.previousPage ? '' : this.state.goPage > this.state.previousPage ? "fadeUp" : "fadeDown")} >
          <CSSTransition
            key={location.key}
            timeout={1000}
            classNames={ this.state.goPage === this.state.previousPage ? '' : this.state.goPage > this.state.previousPage ? "fadeUp" : "fadeDown"}
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;
