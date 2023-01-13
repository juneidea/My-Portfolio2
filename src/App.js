import React, { useState } from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './stylesheets/App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import BarChart from './bar-chart/App'

 //This returns a childFactory to provide to TransitionGroup
 const childFactoryCreator = (classNames) => (
  (child) => (
    React.cloneElement(child, {
      classNames
    })
  )
);

// class component
const App = () => {
  const pathname = window.location.pathname
  
  const [previousPage, setPreviousPage] = useState(1)
  const [goPage, setGoPage] = useState(1)

  const getPage = (num) => {
    setPreviousPage(goPage)
    setGoPage(num)
  }
  return (
    <div className="App">
      {pathname !== '/bar-chart' && 
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
        <NavLink exact to="/" activeClassName="active" onClick={() => {getPage(1)}}>HOME</NavLink>
        <NavLink to="/about" activeClassName="active" onClick={() => {getPage(2)}}>ABOUT</NavLink>
        <div className="menu-block">
        <NavLink to="/projects" activeClassName="active" onClick={() => {getPage(3)}}>PROJECTS</NavLink>
        <NavLink to="/contact" activeClassName="active" onClick={() => {getPage(4)}}>CONTACT</NavLink>
        </div>
      </div>}
      <Route render={({location}) => (
      <TransitionGroup childFactory={childFactoryCreator( goPage === previousPage ? '' : goPage > previousPage ? "fadeUp" : "fadeDown")} >
        <CSSTransition
          key={location.key}
          timeout={1000}
          classNames={ goPage === previousPage ? '' : goPage > previousPage ? "fadeUp" : "fadeDown"}
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
      <Route path="/bar-chart" component={BarChart} />
    </div>
  );
}

export default App;
