import React from 'react';
import { StyledMusicCard } from './music-card.styles';
import { MusicCardComponentProps } from './music-card.types';

export default ({ albumNumber, trackNumber, musicName, popularity, explicit }: MusicCardComponentProps) => {
    return (
        <StyledMusicCard>
            <header>
                <h2>Nº{albumNumber}</h2>
                <h2>Track {trackNumber}</h2>
            </header>
            <hr />
            <div className="content">
                <p title={musicName}>{musicName}</p>
            </div>
            <div className="info">
                <p>{popularity} popularidade</p>
                <p>{explicit ? '18' : ''}</p>
            </div>
        </StyledMusicCard>
    )
}