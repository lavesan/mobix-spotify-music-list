import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { HomePage } from '../pages/home';
import musicInfoPage from '../pages/music-info/music-info.page';
import { StyledPagesContainer } from './App.styles';

const theme = {
  site: {
    primaryColor: 'blue',
  },
  spotify: {
    green: {
      primaryColor: '#1db954',
    },
    dark: {
      primaryColor: '#212121',
      secondaryColor: '#121212',
      terciaryColor: '#535353',
      quaternaryColor: '#b3b3b3',
    }
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPagesContainer>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to='/home' />} />
            <Route path="/home" component={HomePage} />
            <Route path="/music-info" component={musicInfoPage} />
          </Switch>
        </Router>
      </StyledPagesContainer>
    </ThemeProvider>
  );
}

export default App;
