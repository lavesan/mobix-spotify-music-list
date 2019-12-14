import React, { useEffect } from 'react';
import { StyledSectionCard } from '../../components/section-card';
import { MusicCardComponent } from '../../components/music-card';
import { SearchFormComponent } from '../../components/search-form';
import { StyledMusicCardsBox, StyledH2, StyledArtistsFilterBox, StyledLogSpotifyLink } from './home.styles';
import { SelectComponent } from '../../components/select';
import { RangePickerComponent } from '../../components/range-picker';
import { BarChartComponent } from '../../components/bar-chart';
import { SpotifyService } from '../../services/spotify';
import { queryStringToObject } from '../../utils/app.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default () => {
    const spotifyService = new SpotifyService();
    const options = [
        { value: 'michael jackson', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    useEffect(() => {
        const authToken = queryStringToObject(window.location.href);
        if (authToken) {
            spotifyService.saveAuthOnCookie(authToken);
        }
        // const accessToken = queryString.parse(window.location.access_token)
        setTimeout(() => {
            spotifyService.getArtistAlbum('Michael jackson');
        }, 4000);
    }, []);

    return (
        <>
            <StyledSectionCard>
                <StyledH2>FILTRO DOS ARTISTAS</StyledH2>
                <StyledArtistsFilterBox>
                    <SelectComponent
                        options={options}
                        placeholder="Artistas" />
                    <RangePickerComponent
                        label="Periodo"
                        initialValue={2019} />
                    <StyledLogSpotifyLink href="https://accounts.spotify.com/pt-BR/authorize?client_id=f27147875f9843e9898af17332049543&response_type=token&redirect_uri=http:%2F%2Flocalhost:3000%2Fhome">
                        <FontAwesomeIcon icon={faSpotify} />&nbsp;&nbsp;Logar-se no spotify
                    </StyledLogSpotifyLink>
                </StyledArtistsFilterBox>
            </StyledSectionCard>
            <StyledSectionCard>
                <StyledH2>PAINEL DE ÁLBUNS</StyledH2>
                <BarChartComponent />
            </StyledSectionCard>
            <StyledSectionCard>
                <StyledH2>TODAS AS MÚSICAS DO ARTISTA</StyledH2>
                <SearchFormComponent />
                <StyledMusicCardsBox>
                    <MusicCardComponent
                        albumNumber={1} 
                        trackNumber={1}
                        musicName={'Starway to Heaven'}
                        popularity={'Alta'}
                        explicit={true} />
                    <MusicCardComponent
                        albumNumber={20} 
                        trackNumber={43}
                        musicName={'Starway to Heaven'}
                        popularity={'Alta'}
                        explicit={true} />
                    <MusicCardComponent
                        albumNumber={1} 
                        trackNumber={1}
                        musicName={'Starway to Heaven'}
                        popularity={'Alta'}
                        explicit={true} />
                    <MusicCardComponent
                        albumNumber={1} 
                        trackNumber={1}
                        musicName={'Starway to Heaven'}
                        popularity={'Alta'}
                        explicit={true} />
                    <MusicCardComponent
                        albumNumber={1} 
                        trackNumber={1}
                        musicName={'Starway to Heaven'}
                        popularity={'Alta'}
                        explicit={true} />
                    <MusicCardComponent
                        albumNumber={1} 
                        trackNumber={1}
                        musicName={'Starway to Heaven'}
                        popularity={'Alta'}
                        explicit={true} />
                    <MusicCardComponent
                        albumNumber={1} 
                        trackNumber={1}
                        musicName={'Starway to Heaven'}
                        popularity={'Alta'}
                        explicit={true} />
                </StyledMusicCardsBox>
            </StyledSectionCard>
        </>
    )
}