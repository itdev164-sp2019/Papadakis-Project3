import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme as theme } from './components/theme/Theme';
import About from './components/About';
import Header from './components/Header';
import Socials from './components/Socials';
import Stripe from './components/Stripe';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: `The 'folio`,
      name: 'Nicholas Papadakis-Schneider',
      socials: {
        linkedin: {
          name: 'LinkedIn',
          link:
            'https://www.linkedin.com/in/nicholas-papadakis-schneider-04040215a/'
        },
        twitter: {
          name: 'Twitter',
          link: 'https://twitter.com/nickpapadakis33'
        },
        medium: {
          name: 'Medium',
          link: 'https://medium.com/@nickpapadakis33'
        }
      },
      projects: {
        ci_design: {
          name: 'CI-Design Inc. Website',
          type: 'Front-End Website | Made with .NET - SCSS - Umbraco',
          link: 'https://www.cidesigninc.com'
        },
        rsvp: {
          name: 'Rsvp App',
          type: 'Full Stack Web App | Made with the MERN stack',
          link: 'http://localhost:3000'
        },
        meme: {
          name: 'Meme Generator',
          type: 'Front-End Web App | Made with ReactJS',
          link: 'https://youthful-neumann-6562df.netlify.com/'
        },
        photo: {
          name: 'The Photo App',
          type: 'Front End Web App | Made with GatsbyJS',
          link: 'https://vigilant-brahmagupta-0a705a.netlify.com/'
        }
      }
    };
  }
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className='App'>
            <Header name={this.state.header} />
            <Stripe />
            <Route
              path='/About'
              render={() => <About name={this.state.name} />}
            />
            <Route
              path='/Socials'
              render={() => <Socials socials={this.state.socials} />}
            />
            <Route
              path='/Projects'
              render={() => <Projects projects={this.state.projects} />}
            />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
