import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Blog from './components/Pages/Blog';
import Services from './components/Pages/Services';
import Demo from './components/Pages/ChessBoard';
import Crossword from './components/Pages/CrossWord';
import Alert from './components/Pages/Alert';
import Portfolio from './components/Common/Portfolio';



class App extends Component {
  render() {
    return (
      <Router>
            <Route
              exact={true}
              path="/"
              render={props => (
                <PageWrapper>
                  <Home {...props} />
                </PageWrapper>
              )}
            />


            <Route
              path="/blog"
              exact={true}
              render={props => (
                <PageWrapper>
                  <Blog {...props} />
                </PageWrapper>
              )}
            />

              <Route
                path="/Services"
                exact={true}
                render={props => (
                  <PageWrapper>
                    <Services {...props} />
                  </PageWrapper>
                )}
              />

            <Route
              path="/about"
              render={props => (
                <PageWrapper>
                  <About {...props} />
                </PageWrapper>
              )}
              />
            

              <Route 
              path="/contact"
              render={props => (
                <PageWrapper>
                  <Contact {...props} />
                </PageWrapper>
              )}
              />

              <Route 
              path="/ChessBoard"
              render={props => (
                
                <Demo {...props} />
              
              )}
              />

              <Route 
              path="/Crossword"
              render={props => (
                
                <Crossword {...props} />
              
              )}
              />

              <Route 
              path="/Alert"
              render={props => (
                <PageWrapper>
                 <Alert {...props} />
                </PageWrapper>
              )}
              />

              <Route 
              path="/Portfolio"
              render={props => (
                <PageWrapper>
                 <Portfolio {...props} />
                </PageWrapper>
              )}
              />
            
           
          </Router>

    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
