import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/home';
import musicInfoPage from './pages/music-info/music-info.page';

const theme = {
  site: {
    primaryColor: 'blue',
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/home' />} />
          <Route path="/home" component={HomePage} />
          <Route path="/music-info" component={musicInfoPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
