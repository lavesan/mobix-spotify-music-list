import React, { useContext } from 'react';
import { StyledH2 } from '../home.styles';
import { SearchFormComponent } from './search-form';
import { StyledMusicCardsBox } from './section3.styles';
import { MusicCardComponent } from './music-card';
import { HomePageContext } from '../home.context';

export default () => {
    const { musicsListed } = useContext(HomePageContext);

    return (
        <>
            <StyledH2>TODAS AS MÚSICAS DO ARTISTA</StyledH2>
            <SearchFormComponent />
            <StyledMusicCardsBox>
                {musicsListed.map(((music, index: number) => (
                    <MusicCardComponent key={index} {...music} />
                )))}
            </StyledMusicCardsBox>
        </>
    )
}