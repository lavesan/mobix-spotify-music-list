import React from 'react';
import { StyledSectionCard } from '../../components/section-card';
import { MusicCardComponent } from '../../components/music-card';
import { SearchFormComponent } from '../../components/search-form';

export default () => {
    return (
        <>
            <StyledSectionCard>
                <h2>FILTRO DOS ARTISTAS</h2>
            </StyledSectionCard>
            <StyledSectionCard>
                <h2>PAINEL DE ÁLBUNS</h2>
            </StyledSectionCard>
            <StyledSectionCard>
                <h2>TODAS AS MÚSICAS DO ARTISTA</h2>
                <SearchFormComponent />
                <MusicCardComponent
                    albumNumber={1} 
                    trackNumber={1}
                    musicName={'Starway to Heaven'}
                    popularity={'Alta'}
                    explicit={true} />
            </StyledSectionCard>
        </>
    )
}