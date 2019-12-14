import React from 'react';
import { StyledMusicCard } from './music-card.styles';
import { MusicCardComponentProps } from './music-card.types';
import { addZeroOnNumber } from '../../../../utils/pipes.utils';
import under18Img from '../../../../assets/imgs/18-prohibited.jpg';

export default ({ diskNumber, trackNumber, musicName, popularity, explicit, onClick }: MusicCardComponentProps) => {
    const popularityLevel = (popularity: number): string => {
        if (popularity >= 70)
            return 'Alta';
        if (popularity < 70 && popularity >= 40)
            return 'Média';
        else
            return 'Baixa';
    }

    return (
        <StyledMusicCard onClick={onClick}>
            <header>
                <h2>Nº{addZeroOnNumber(diskNumber)}</h2>
                <h2>Track {addZeroOnNumber(trackNumber)}</h2>
            </header>
            <hr />
            <div className="content">
                <p title={musicName}>{musicName}</p>
            </div>
            <div className="info">
                <p>{popularityLevel(popularity)} popularidade</p>
                {explicit &&
                    <img src={under18Img} alt="Under 18 year prohibited" width="30" />}
            </div>
        </StyledMusicCard>
    )
}