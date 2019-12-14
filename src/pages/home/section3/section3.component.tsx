import React, { useContext } from 'react';
import { StyledH2 } from '../home.styles';
import { SearchFormComponent } from './search-form';
import { StyledMusicCardsBox } from './section3.styles';
import { MusicCardComponent } from './music-card';
import { useHistory } from 'react-router';

export default () => {
    const history = useHistory();

    return (
        <>
            <StyledH2>TODAS AS MÚSICAS DO ARTISTA</StyledH2>
            <SearchFormComponent />
            <StyledMusicCardsBox>
                <MusicCardComponent
                    albumNumber={1} 
                    trackNumber={1}
                    musicName={'Starway to Heaven'}
                    popularity={'Alta'}
                    explicit={true}
                    onClick={() => history.push({
                        pathname: '/music-info',
                        search: '?name=Parklife'
                        })} />
                <MusicCardComponent
                    albumNumber={20} 
                    trackNumber={43}
                    musicName={'Starway to Heaven'}
                    popularity={'Alta'}
                    explicit={true}
                    onClick={() => history.push({
                        pathname: '/music-info',
                        search: '?name=Starway to Heaven'
                        })} />
                <MusicCardComponent
                    albumNumber={1} 
                    trackNumber={1}
                    musicName={'Starway to Heaven'}
                    popularity={'Alta'}
                    explicit={true}
                    onClick={() => history.push({
                        pathname: '/music-info',
                        search: '?name=Starway to Heaven'
                        })} />
                <MusicCardComponent
                    albumNumber={1} 
                    trackNumber={1}
                    musicName={'Starway to Heaven'}
                    popularity={'Alta'}
                    explicit={true}
                    onClick={() => history.push({
                        pathname: '/music-info',
                        search: '?name=Starway to Heaven'
                        })} />
                <MusicCardComponent
                    albumNumber={1} 
                    trackNumber={1}
                    musicName={'Starway to Heaven'}
                    popularity={'Alta'}
                    explicit={true}
                    onClick={() => history.push({
                        pathname: '/music-info',
                        search: '?name=Starway to Heaven'
                        })} />
                <MusicCardComponent
                    albumNumber={1} 
                    trackNumber={1}
                    musicName={'Starway to Heaven'}
                    popularity={'Alta'}
                    explicit={true}
                    onClick={() => history.push({
                        pathname: '/music-info',
                        search: '?name=Starway to Heaven'
                        })} />
                <MusicCardComponent
                    albumNumber={1} 
                    trackNumber={1}
                    musicName={'Starway to Heaven'}
                    popularity={'Alta'}
                    explicit={true}
                    onClick={() => history.push({
                        pathname: '/music-info',
                        search: '?name=Starway to Heaven'
                        })} />
            </StyledMusicCardsBox>
        </>
    )
}