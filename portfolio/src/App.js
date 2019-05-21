import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme as theme } from './components/theme/Theme';
import About from './components/About';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className='App'>
            <Header />
            <Route path='/About' render={() => <About />} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
