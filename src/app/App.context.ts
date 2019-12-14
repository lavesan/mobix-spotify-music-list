import React from 'react';
import { SpotifyService } from '../services/spotify';

export const AppContext = React.createContext({
    spotifyService: new SpotifyService(),
});