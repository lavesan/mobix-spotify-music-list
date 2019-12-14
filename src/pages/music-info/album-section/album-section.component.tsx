import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { AlbumSectionProps } from './album-section.types';
import { StyledH2 } from '../../home/home.styles';
import { StyledMusicInfoComponent, StyledTrackComponent, StyledTrackInfo, StyledAlbumImageBox, StyledMusicsBox, StyledCardHeader, StyledReturnButton } from './album-section.styles';
import { TrackCardComponent } from './track-card';

export default ({ albumName, popularity, tracks, artistsNames, releaseDate, totalTracks, imgUrl }: AlbumSectionProps) => {
    return (
        <>
            <StyledCardHeader>
                <StyledH2>Músicas do álbum</StyledH2>
                <StyledReturnButton to="/home">Voltar</StyledReturnButton>
            </StyledCardHeader>
            <StyledMusicInfoComponent>
                <StyledTrackComponent>
                    <StyledAlbumImageBox>
                        <img src={imgUrl} alt={`imagem do album ${albumName}`}/>
                    </StyledAlbumImageBox>
                    <StyledTrackInfo>
                        <p><strong>{albumName}</strong></p>
                        <p>Número de faixas: {totalTracks}</p>
                        <p>Data de Criação: {moment(releaseDate).format('DD/MM/YYYY')}</p>
                        <p>Artistas: {artistsNames.join(', ')}</p>
                    </StyledTrackInfo>
                </StyledTrackComponent>
            </StyledMusicInfoComponent>
            <StyledMusicsBox>
                {tracks.map((track, index: number) => <TrackCardComponent key={index} {...track} />)}
            </StyledMusicsBox>
        </>
    )
}