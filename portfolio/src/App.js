import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme as theme } from './components/theme/Theme';
import About from './components/About';
import Header from './components/Header';
import Socials from './components/Socials';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: `The 'folio`,
      name: 'Nicholas Papadakis-Schneider',
      socialNames: ['LinkedIn', 'Twitter'],
      socialLinks: [
        'https://www.linkedin.com/in/nicholas-papadakis-schneider-04040215a/',
        'https://twitter.com/nickpapadakis33'
      ]
    };
  }
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className='App'>
            <Header name={this.state.header} />
            <Route
              path='/About'
              render={() => <About name={this.state.name} />}
            />
            <Route
              path='/Socials'
              render={() => (
                <Socials
                  name={this.state.socialNames}
                  socialLink={this.state.socialLinks}
                />
              )}
            />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
