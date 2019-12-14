import React, { useEffect, useContext } from 'react';
import { queryStringToObject } from '../../utils/app.utils';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../app/App.context';

export default () => {
    const { spotifyService } = useContext(AppContext);
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