import React from 'react';
import { StyledSectionCard } from '../../components/section-card';
import { MusicCardComponent } from '../../components/music-card';
import { SearchFormComponent } from '../../components/search-form';
import { StyledMusicCardsBox, StyledH2, StyledArtistsFilterBox } from './home.styles';
import { SelectComponent } from '../../components/select';
import { RangePickerComponent } from '../../components/range-picker';

export default () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <StyledSectionCard>
                <StyledH2>FILTRO DOS ARTISTAS</StyledH2>
                <StyledArtistsFilterBox>
                    <SelectComponent
                        options={options}
                        placeholder="Artistas" />
                    <RangePickerComponent
                        label="Periodo" />
                </StyledArtistsFilterBox>
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