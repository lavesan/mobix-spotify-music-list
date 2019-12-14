import React, { useContext } from 'react';
import { StyledH2 } from '../home.styles';
import { SearchFormComponent } from './search-form';
import { StyledMusicCardsBox } from './section3.styles';
import { MusicCardComponent } from './music-card';
import { useHistory } from 'react-router';
import { HomePageContext } from '../home.context';

export default () => {
    const { musicsListed } = useContext(HomePageContext);
    const history = useHistory();

    return (
        <>
            <StyledH2>TODAS AS MÚSICAS DO ARTISTA</StyledH2>
            <SearchFormComponent />
            <StyledMusicCardsBox>
                {musicsListed.map(((music, index: number) => (
                    <MusicCardComponent key={index} {...music} onClick={() => history.push({
                        pathname: '/music-info',
                        search: `?albumId=dasdasdassa`,
                    })} />
                )))}
            </StyledMusicCardsBox>
        </>
    )
}