import React, { useEffect } from 'react';
import { queryStringToObject } from '../../utils/app.utils';
import { SpotifyService } from '../../services/spotify';
import { useHistory } from 'react-router-dom';

export default () => {
    const spotifyService = new SpotifyService();
    const history = useHistory();

    useEffect(() => {
        const albumData = queryStringToObject(window.location.href);
        if (albumData) {
            // spotifyService.getAlbumData(albumData.name);
        } else {
            history.push('home');
        }
    }, []);

    return (
        <p>Music page</p>
    )
}