import React, { useEffect, useContext, useState } from 'react';
import { queryStringToObject } from '../../utils/app.utils';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../app/App.context';
import { StyledSectionCard } from '../../components/section-card';
import { AlbumSectionComponent } from './album-section';

export default () => {
    const { spotifyService } = useContext(AppContext);
    const history = useHistory();
    const [albumInfo, setAlbumInfo] = useState<any>(null);

    useEffect(() => {
        const albumData = queryStringToObject(window.location.href);
        
        if (albumData) {
            (async () => {
                const album = await spotifyService.getAlbumData(albumData.albumId);

                if (album) {
                    const { name, tracks, popularity, release_date, total_tracks, artists, images } = album;

                    const albumTracks = tracks.items.map(({ name, duration_ms, external_urls }: any) => ({
                        trackName: name,
                        durationTime: duration_ms,
                        playOnSpotifyUrl: external_urls.spotify,
                    }));
                    setAlbumInfo({
                        popularity,
                        albumName: name,
                        tracks: albumTracks,
                        artistsNames: artists.map((artist: any) => artist.name),
                        releaseDate: release_date,
                        totalTracks: total_tracks,
                        imgUrl: images[0].url,
                    });
                } else {
                    history.push('home');
                }
            })()
        } else {
            history.push('home');
        }
    }, []);

    return (
        <StyledSectionCard>
            {albumInfo && 
                <AlbumSectionComponent {...albumInfo} />
            }
        </StyledSectionCard>
    )
}