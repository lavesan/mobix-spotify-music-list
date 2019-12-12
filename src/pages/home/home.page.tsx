import React from 'react';
import { StyledSectionCard } from '../../components/section-card';
import { MusicCardComponent } from '../../components/music-card';
import { SearchFormComponent } from '../../components/search-form';
import { StyledMusicCardsBox, StyledH2 } from './home.styles';

export default () => {
    return (
        <>
            <StyledSectionCard>
                <StyledH2>FILTRO DOS ARTISTAS</StyledH2>
            </StyledSectionCard>
            <StyledSectionCard>
                <StyledH2>PAINEL DE ÁLBUNS</StyledH2>
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