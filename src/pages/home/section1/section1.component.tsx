import React, { useContext, useEffect, useCallback, useState } from 'react';
import { StyledH2 } from '../home.styles';
import { StyledArtistsFilterBox, StyledLogSpotifyLink } from './section1.styles';
import { SelectComponent } from './select';
import { RangePickerComponent } from './range-picker';
import { AppContext } from '../../../app/App.context';
import { HomePageContext } from '../home.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { MusicCardComponentProps } from '../section3/music-card/music-card.types';
import * as am4core from "@amcharts/amcharts4/core";

export default () => {
    const { spotifyService } = useContext(AppContext);
    const { setChartData, setMusicsListed } = useContext(HomePageContext);

    const [options] = useState(
        [
            { value: '1on7ZQ2pvgeQF4vmIA09x5', label: 'Charlie Brown Jr.', color: 'gray' },
            { value: '14pVkFUHDL207LzLHtSA18', label: 'Pantera', color: 'red' },
            { value: '1dfeR4HaWDbWqFHLkxsg1d', label: 'Queen', color: 'black' },
            { value: '3lDpdwM8KILepMHqBWUhIA', label: 'The Struts', color: '#aaa' },
            { value: '2ZofT7n9AlTKf7KDCoHGgD', label: 'Luiz Gonzaga', color: 'green' },
        ]
    );

    const handleChooseArtist = async ({ value, color }: any) => {
        const albums = await spotifyService.getArtistAlbums(value);
        if (albums) {
            setChartData(albums.items.map(({ id, name, release_date, total_tracks }: any) => ({
                albumId: id,
                albumName: name,
                releaseDate: release_date,
                totalTrack: total_tracks,
                color: am4core.color(color)
            })))
        }
    }

    const handleInit = useCallback(
        async () => {
            let musicTracks: MusicCardComponentProps[] = [];
    
            for(const { value } of options) {
                const artistTopTrack = await spotifyService.getArtistTopTracks(value);
    
                if (artistTopTrack) {
                    musicTracks = [
                        ...musicTracks,
                        ...artistTopTrack.tracks.map(({ disc_number, explicit, name, popularity, track_number, album: { id } }: any) => ({
                            explicit,
                            popularity,
                            albumId: id,
                            diskNumber: disc_number,
                            trackNumber: track_number,
                            musicName: name,
                        }))
                    ]
                } else {
                    break;
                }
            }
            setMusicsListed(musicTracks);
        }, [options, setMusicsListed, spotifyService]
    ) 

    useEffect(() => {
        // Gets all top tracks of all artists on the select option
        handleInit();
    }, [handleInit]);

    return (
        <>
            <StyledH2>FILTRO DOS ARTISTAS</StyledH2>
            <StyledArtistsFilterBox>
                <SelectComponent
                    options={options}
                    placeholder="Artistas"
                    onChange={handleChooseArtist} />
                <RangePickerComponent label="Periodo" />
                <StyledLogSpotifyLink
                    title="Autentique-se no spotify"
                    href={`https://accounts.spotify.com/pt-BR/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_SPOTIFY_LOGIN_REDIRECT_URI}`}>
                    <FontAwesomeIcon icon={faSpotify} />&nbsp;&nbsp;<span>Logar-se no spotify</span>
                </StyledLogSpotifyLink>
            </StyledArtistsFilterBox>
        </>
    )
}