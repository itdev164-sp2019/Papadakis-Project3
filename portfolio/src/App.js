import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
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
        <div className='App'>
          <header className='App-header'>
            <Header />
            <Route path='/About' render={() => <About />} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
