import React from 'react';
import { StyledMusicCard } from './music-card.styles';
import { MusicCardComponentProps } from './music-card.types';
import { addZeroOnNumber } from '../../../../utils/pipes.utils';
import under18Img from '../../../../assets/imgs/18-prohibited.jpg';

export default ({ albumNumber, trackNumber, musicName, popularity, explicit, onClick }: MusicCardComponentProps) => {
    return (
        <StyledMusicCard onClick={onClick}>
            <header>
                <h2>Nº{addZeroOnNumber(albumNumber)}</h2>
                <h2>Track {addZeroOnNumber(trackNumber)}</h2>
            </header>
            <hr />
            <div className="content">
                <p title={musicName}>{musicName}</p>
            </div>
            <div className="info">
                <p>{popularity} popularidade</p>
                {explicit &&
                    <img src={under18Img} alt="Under 18 year prohibited" width="30" />}
            </div>
        </StyledMusicCard>
    )
}