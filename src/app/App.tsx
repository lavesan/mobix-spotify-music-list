import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { HomePage } from '../pages/home';
import musicInfoPage from '../pages/music-info/music-info.page';
import { StyledPagesContainer } from './App.styles';
import { AppContext } from './App.context';
import { SpotifyService } from '../services/spotify';
import theme from './App.theme';

const App: React.FC = () => {
  const spotifyService = new SpotifyService();

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ spotifyService }}>
        <ToastContainer />
        <StyledPagesContainer>
          <Router>
            <Switch>
              <Route exact path="/" render={() => <Redirect to='/home' />} />
              <Route path="/home" component={HomePage} />
              <Route path="/music-info" component={musicInfoPage} />
            </Switch>
          </Router>
        </StyledPagesContainer>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
